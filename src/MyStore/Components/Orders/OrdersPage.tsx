import React, { FC } from "react"
import GenericTable from "../GenericTable/GenericTable"
import TableOrder from "../Products/ProductsTable"

const OrdersPage : FC = () => {
    return (
        <GenericTable
            rowComponent={TableOrder}
            rows = {[]}
        />
    )
}

export default OrdersPage