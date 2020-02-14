import React, {FC, useState, useEffect} from 'react';
import GenericTable from '../GenericTable/GenericTable';
import OrdersTable from '../Orders/OrdersTable';
import { OrderProps } from '../Orders/OrderRow';
import axios from 'axios';
import { getUrl } from '../Products/FetchDataFromServer';

const setOrderStatus = (orderId: number, status: string) : void => {
    axios.post(getUrl() + "/api/order/changeStatus", {
        orderId: orderId,
        orderStatus: status
    }).then(
        res => { // then print response status
            console.log(res.data)
    })
}

const setApproveAndDisapproveFunc = (orders: OrderProps[], setOrders : (orders:OrderProps[]) => void): void => {
    setOrders(orders.map(order => {
        order.approve = () => {
            order.status = 'approve'
            setOrderStatus(order.id, 'approve')
            setOrders(orders.map(currOrder => currOrder.id !== order.id ? currOrder : order))
        }

        order.disApprove = () => {
            order.status = 'disapprove'
            setOrderStatus(order.id, 'disapprove')
            setOrders(orders.map(currOrder => currOrder.id !== order.id ? currOrder : order))
        }

        return order
    }))
}

export const fetchOrdersFromServer = (callback: (orders: OrderProps[]) => void) => {
    axios.get(getUrl() + "/api/order/all").then(
        res => { // then print response status
            console.log(res.data)
            callback(res.data)
    })
}

const ManageOrders: FC = () => {
    const [orders, setOrders] = useState<OrderProps[]>([])

    useEffect(() => {
        fetchOrdersFromServer((orders: OrderProps[]) => setApproveAndDisapproveFunc(orders, setOrders))
    }, [])

    return (
        <div className="App">
            <GenericTable
                rows={orders}
                rowComponent={OrdersTable}
            />
        </div>

    );
};

export default ManageOrders;
