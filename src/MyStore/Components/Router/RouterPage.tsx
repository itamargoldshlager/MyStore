import React, {FC} from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "../Home/Home";
import StorageManagement from "../StorageManagment/StorageManagement"
import ProductByCategory from '../Products/ProductByCategory'
import OrderPage from '../Orders/OrdersPage';
import ProductById from '../Products/ProductById'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

const RouterPage: FC = () => {
    return (
        <Switch>
            <Route path="/products/:category">
                <ProductByCategory/>
            </Route>
            <Route path="/productById/:productId">
                <ProductById/>
            </Route>
            <Route path="/orders/">
                <OrderPage/>
            </Route>
            <Route path="/shoppingcart">
                <ShoppingCart/>
            </Route>
            <Route path="/storage">
                <StorageManagement/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    );
};



export default RouterPage;
