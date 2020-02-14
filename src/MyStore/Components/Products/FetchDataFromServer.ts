import {ProductProps} from "./ProductRow"
import axios from 'axios';

export const getUrl = (): string => {
    // const url = window.location.href
    // const pathName = window.location.pathname
    // return url.substring(0, url.length - pathName.length)
    return "http://localhost:4000"
}

export const FetchProductsbyCategory = (category: string = "", callback: (products: ProductProps[]) => void): void => {
    axios.get(getUrl() + "/api/product/category/" + category).then(
        res => { // then print response status
            callback (res.data)
            console.log(res.data)
    })
}

export const FetchProductbyId = (productId: number = 0, callback: (products: ProductProps) => void): void => {
    axios.get(getUrl() + "/api/product/id/" + productId).then(
        res => { // then print response status
            callback (res.data[0])
            console.log(res.data)
    })
}

export const FetchProductsIdFromShoppingCart = (callback: (products: ProductProps[]) => void) : void => {
    axios.get(getUrl() + "/api/shoppingcart/").then(
        (res: {
            data: {id: number, productId: number,amount:number}[]
        }) => { // then print response status
            let ids = ""
            if (res.data.length !== 0) {
                res.data.map(value => ids= ids + "," + value.productId)
                ids = ids.substring(1);
                console.log(ids)
                FetchMultipleProductbyId(ids, callback);
            } else {
                callback([])
            }
    })
}

export const FetchProductbyOrder = (id: number, callback: (products: ProductProps[]) => void): void => {
    axios.get(getUrl() + "/api/order/productsIds/" + id).then(
        (res: {
            data: {id: number, orderId: number, productId: number,amount:number}[]
        }) => { // then print response status
            let ids = ""
            if (res.data.length !== 0) {
                res.data.map(value => ids= ids + "," + value.productId)
                ids = ids.substring(1);
                console.log(ids)
                FetchMultipleProductbyId(ids, callback);
            } else {
                callback([])
            }
    })
}

export const FetchMultipleProductbyId = (ids: string, callback: (products: ProductProps[]) => void) : void => {
    axios.get(getUrl() + "/api/product/mulitipleid/" + ids).then(
        res => { // then print response status
            console.log(res.data)
            callback(res.data)
    })
}

export const removeProductFromShoppingCart = (id: number) : void => {
    axios.delete(getUrl() + "/api/shoppingcart/removeProduct/" + id).then(
        res => { // then print response status
            console.log(res.data)
    })
}