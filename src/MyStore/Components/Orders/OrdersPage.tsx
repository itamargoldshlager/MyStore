import React, { FC, useState, useEffect} from "react"
import GenericTable from "../GenericTable/GenericTable"
import OrdersTable from '../Orders/OrdersTable';
import {fetchOrdersFromServer} from "../StoreManagment/ManageOrders"
import { OrderProps } from "./OrderRow"

const OrdersPage : FC = () => {
    const [orders, setOrders] = useState<OrderProps[]>([])

    useEffect(() => {
        fetchOrdersFromServer(setOrders);
    }, [])
    return (
        <GenericTable
            rows={orders}
            rowComponent={OrdersTable}
        />
    )
}

export default OrdersPage