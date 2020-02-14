import React, {FC} from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "../Home/Home";
import StoreManagement from "../StoreManagment/StoreManagement"
import ProductByCategory from '../Products/ProductByCategory'
import OrderPage from '../Orders/OrdersPage';
import ProductById from '../Products/ProductById'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import CheckOut from '../CheckOut/CheckOut'
import ProductsByOrder from '../Products/ProductsByOrder';

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
            <Route path="/productByOrder/:orderId">
                <ProductsByOrder/>
            </Route>
            <Route path="/shoppingcart">
                <ShoppingCart/>
            </Route>
            <Route path="/Store">
                <StoreManagement/>
            </Route>
            <Route path="/CheckOut">
                <CheckOut/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    );
};



export default RouterPage;
