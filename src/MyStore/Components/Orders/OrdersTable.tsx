import React, {FC} from 'react';
import SingleOrderRow, {OrderProps} from "./OrderRow";
import TableRow from "@material-ui/core/TableRow";

const OrdersTable: FC<{rows: OrderProps[] | any}> = ({rows}) => {
    return (
        <div className="App">
            {
                rows.map((row: OrderProps) =>
                    <TableRow key={row.date.getDate()}>
                        <SingleOrderRow {...row}/>
                    </TableRow>
                )
            }
        </div>
    );
};

export default OrdersTable;
