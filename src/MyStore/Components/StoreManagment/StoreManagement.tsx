import React, {FC} from 'react';
import AddNewProduct from "./AddNewProduct"
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom';
import ManageProducts from './ManageProducts';
import "../MainPage/linkStyle.css"
import { Button, Grid } from '@material-ui/core';
import ManageOrders from './ManageOrders';
const StorageManagement: FC = () => {
    let match = useRouteMatch();
    return (
        <div className="App">
            <Grid container xs={12} spacing={2} style={{textAlign: 'center'}} justify="center">
                <Grid item>
                    <Link to={`${match.url}/AddNewProduct`} className="LinkStyle">
                        <Button color="default" variant="contained">
                            Add New Product
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to={`${match.url}/ManageProducts`} className="LinkStyle">
                        <Button color="default" variant="contained">
                            Manage Products
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Link to={`${match.url}/ManageOrders`} className="LinkStyle">
                        <Button color="default" variant="contained">
                            Manage Orders
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <Switch>
                <Route path={`${match.path}/AddNewProduct`}>
                    <AddNewProduct/>
                </Route>
                <Route path={`${match.path}/ManageProducts`}>
                    <ManageProducts/>
                </Route>
                <Route path={`${match.path}/ManageOrders`}>
                    <ManageOrders/>
                </Route>
            </Switch>
        </div>
    );
};

export default StorageManagement;
