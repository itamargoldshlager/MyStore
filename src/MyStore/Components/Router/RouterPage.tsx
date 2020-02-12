import React, {FC, useState, useEffect} from 'react';
import {
    Switch,
    Route,
    useParams
} from "react-router-dom";
import GenericTable from "../GenericTable/GenericTable";
import TableProduct from "../Products/TableProduct"
import TableOrder from "../Orders/TableOrder"

import orderData from "../../Mocks/Orders/MockOrders";
import Home from "../Home/Home";
import SingleProductPage from "../SingleProductPage/SingleProduct";
import StorageManagement from "../StorageManagment/StorageManagement"

import {FetchProductsbyCategory, FetchProductbyId, FetchProductsIdFromShoppingCart, removeProductFromShoppingCart} from "../Products/FetchDataFromServer"
import { ProductProps } from '../Products/SingleProductRow';

const ProductByCategory: FC = () => {
    const [products, setProducts] = useState<ProductProps[]>([])
    let { category } = useParams();
    useEffect(() => {
        FetchProductsbyCategory(category, (products: ProductProps[]) => setProducts(products))
    }, [category])

    return (
        <GenericTable
            rowComponent={TableProduct}
            rows={products}
        />
    );
};

const ShowAllOrders : FC = () => {
    return (
        <GenericTable
            rowComponent={TableOrder}
            rows = {orderData}
        />
    )
}

const ProductById : FC = () => {
    let { productId } = useParams();
    const [product, setProduct] = useState<ProductProps>()

    useEffect(() => {
        FetchProductbyId(Number(productId), (data: ProductProps) => setProduct(data))
    }, [productId])

    return (
        <div>
        {
            (product !== undefined) ? 
            <SingleProductPage {...product} />:
            <div>Invalid product id</div>
        }
        </div>
    )
}

const ShoppingCart: FC = () => {
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        FetchProductsIdFromShoppingCart((data: ProductProps[]) => setProducts(data))
    }, [])

    useEffect(() => {
        const temp = products.map(product => {
            const tempProduct:ProductProps = product
            tempProduct.removeFromCart = () => {
                removeProductFromShoppingCart(product.id)
                setProducts(products.filter(filterProduct => filterProduct.id !== product.id))
            }
            return tempProduct
        })

        setProducts(temp)
    }, [products.length])
    return (
        <GenericTable
            rowComponent={TableProduct}
            rows={products}
        />
    )
}

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
                <ShowAllOrders/>
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
