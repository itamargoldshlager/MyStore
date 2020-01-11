import React, {FC} from 'react';
import TableRow from "@material-ui/core/TableRow";
import SingleProductRow, {ProductProps} from "./SingleProductRow"

const TableOrder: FC<{rows: ProductProps[] | any}> = ({rows}) => {
    return (
        <div className="App">
            {
                rows.map((row: ProductProps) =>
                    <TableRow key={row.channel}>
                        <SingleProductRow {...row}/>
                    </TableRow>
                )
            }
        </div>
    );
};

export default TableOrder;
