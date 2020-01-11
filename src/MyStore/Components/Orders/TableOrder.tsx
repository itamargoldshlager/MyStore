import React, {FC} from 'react';
import SingleOrderRow, {OrderProps} from "./SingleOrderRow";
import TableRow from "@material-ui/core/TableRow";

const TableOrder: FC<{rows: OrderProps[] | any}> = ({rows}) => {
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

export default TableOrder;
