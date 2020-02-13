import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {TableHead} from "@material-ui/core";
import {OrderProps} from "../Orders/OrderRow";
import {ProductProps} from "../Products/ProductRow"
import TablePaginationActions from "./TablePagingAction";

const GenericTableStyle = makeStyles({
    table: {
        width: '500px',
        margin: 'auto'
    },
});

export interface GenericTableProps {
    rows: OrderProps[] | ProductProps[],
    rowComponent: FC< {rows: OrderProps[] | ProductProps[]}>
}

const GenericTable: FC<GenericTableProps> = ({rows, rowComponent}) => {
    const classes = GenericTableStyle();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const rowsToDisplay= {
        rows:(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
        )
    };

    // @ts-ignore
    // @ts-ignore
    return (
        <div className={classes.table}>
        {(rows.length === 0) ?
            <h1>There is not object to display</h1> :
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rowComponent({...rowsToDisplay})
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            }
        </div>
    );
};

export default GenericTable;
