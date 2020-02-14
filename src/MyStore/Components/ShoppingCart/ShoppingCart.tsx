import React, { FC, useState, useEffect} from "react"
import { ProductProps } from "../Products/ProductRow"
import { FetchProductsIdFromShoppingCart, removeProductFromShoppingCart } from "../Products/FetchDataFromServer"
import GenericTable from "../GenericTable/GenericTable"
import TableProduct from "../Products/ProductsTable"
import { Button, Grid, makeStyles, Theme, createStyles } from "@material-ui/core"

import {Link} from "react-router-dom";

import "../MainPage/linkStyle.css"

const addRemoveProductFromCartFunction = (products: ProductProps[], setProducts:(data: ProductProps[]) => void) : ProductProps[] => {
    return products.map(product => {
        const tempProduct:ProductProps = product
        tempProduct.removeFromCart = () => {
            removeProductFromShoppingCart(product.id)
            setProducts(products.filter(filterProduct => filterProduct.id !== product.id))
        }
        return tempProduct
    })
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
    },
  }),
);

const ShoppingCart: FC = () => {
    const classes = useStyles();
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        FetchProductsIdFromShoppingCart((data: ProductProps[]) => 
            setProducts(addRemoveProductFromCartFunction(data, setProducts)))
    }, [])

    return (
        <div>
            {
                products.length !== 0 ?
                    <Grid container justify="center">
                        <Grid item>
                        <div className={classes.root}>
                            total price : ${products.reduce((currentTotal, product) => currentTotal + product.price,0)}
                        </div>
                        </Grid>
                        <Grid item>
                            <Link to="/Checkout" className="LinkStyle">
                                <Button 
                                    color="primary"
                                    variant="contained"
                                >
                                    Check out
                                </Button>
                            </Link>
                        </Grid>
                    </Grid> : 
                    <></>
            }
            <GenericTable
                rowComponent={TableProduct}
                rows={products}
            />
        </div>
    )
}

export default ShoppingCart