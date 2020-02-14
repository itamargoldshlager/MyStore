import React, {FC} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from "../GenericTable/GenericTableStyle"
import { ButtonBase, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "../MainPage/linkStyle.css"

export interface OrderProps {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    postal: string,
    country: string,
    status: string,
    date: string,
    approve?: () => void,
    disApprove?: () => void,
}

const SingleOrderRow: FC<OrderProps> = ({id, firstName, lastName, address, city, postal, country, status, date, approve, disApprove}) => {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        first name:
                    </Grid>
                    <Grid item xs={9}>
                        {firstName}
                    </Grid>
                    <Grid item xs={3}>
                        last name:
                    </Grid>
                    <Grid item xs={9}>
                        {lastName}
                    </Grid>
                    <Grid item xs={3}>
                        address:
                    </Grid>
                    <Grid item xs={9}>
                        {address}
                    </Grid>
                    <Grid item xs={3}>
                        city:
                    </Grid>
                    <Grid item xs={9}>
                        {city}
                    </Grid>
                    <Grid item xs={3}>
                        postal:
                    </Grid>
                    <Grid item xs={9}>
                        {postal}
                    </Grid>
                    <Grid item xs={3}>
                        country:
                    </Grid>
                    <Grid item xs={9}>
                        {country}
                    </Grid>
                    <Grid item xs={3}>
                        date:
                    </Grid>
                    <Grid item xs={9}>
                        {date}
                    </Grid>
                    <Grid item xs={3}>
                        status:
                    </Grid>
                    <Grid item xs={9}>
                        {status}
                    </Grid>
                    <Grid item xs={4}>
                        {
                            approve !== undefined && status === 'waitForApproval' ?
                                <Button
                                    onClick = {() => approve()}
                                >
                                    approve
                                </Button> : 
                                <></>
                        }
                    </Grid>
                    <Grid item xs={4}>
                        {
                            disApprove !== undefined && status === 'waitForApproval' ?
                                <Button
                                    onClick = {() => disApprove()}
                                >
                                    disApprove
                                </Button> : 
                                <></>
                        }
                    </Grid>
                    <Grid item xs={4}>
                        <Link to={`/productByOrder/${id}`} className="LinkStyle">
                            <Button>
                                view items
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default SingleOrderRow;