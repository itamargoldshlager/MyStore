import React, {FC} from 'react';
import {ProductProps} from "./ProductRow"
import { Grid, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import { getUrl } from './FetchDataFromServer';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 700,
            margin: 'auto'
        },
        image: {
            width: 328,
            height: 328,
        },
        img: {
            margin: 'auto',
            display: 'block',
            width: '300px',
            height: '300px',
        },
        price: {
            float: 'left'
        },
        addToCart: {
            float: 'right'
        }
    }),
);

const AddProductToShoppingCart = (productId: number) => {
    const data = {
        productId: productId,
    }

    axios.post(getUrl() + "/api/shoppingcart/addProduct", data, {}).then(
        res => { // then print response status
            console.log(res)
    })
}

const arrayBufferToBase64 = (buffer: any): any => {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer.data));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
};

const SinglePage: FC<ProductProps> = ({id, name, description, amount, price, image}) => {
    const classes = useStyles();
    const base64Flag = 'data:image/jpeg;base64,';
    const imageStr = arrayBufferToBase64(image);
    const imgData = base64Flag + imageStr
    return (
        <div className={classes.root}>
            <Grid className={classes.root} container spacing={2}>
                {
                    amount === 0 ?
                    <h1>The product not available in the store</h1> :
                    <></>
                }
                <Grid item>
                    <div className={classes.image}>
                        <img className={classes.img} src={imgData} alt={name}/>
                    </div>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column">
                        <h1>{name}</h1>
                        {description}
                    </Grid>
                </Grid>
            </Grid>
            <div>
                <p className={classes.price}>Final price:${price}</p>
                <Button 
                    className={classes.addToCart} 
                    disabled={amount === 0}
                    color="primary" 
                    variant="contained"
                    onClick = {() => {
                        AddProductToShoppingCart(id)
                    }}>
                    Add to shopping cart
                </Button>
            </div>
        </div>
    );
};

export default SinglePage;
