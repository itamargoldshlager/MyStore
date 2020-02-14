import React, {FC, useState, useEffect} from 'react';
import {FetchProductsbyCategory, getUrl} from "../Products/FetchDataFromServer"
import { Button } from '@material-ui/core';
import { ProductProps } from '../Products/ProductRow';
import GenericTable from '../GenericTable/GenericTable';
import ProductsTable from "../Products/ProductsTable"
import axios from 'axios';

const updateProductAmount = (id: number, amount: number) => {
    axios.post(getUrl() + "/api/product/updateAmount/", {
        productId: id,
        productAmount: amount
    }).then(
        res => { // then print response status
            console.log(res.data)
    })
}

const removeProductFromStore = (id: number) => {
    axios.delete(getUrl() + "/api/product/removeProduct/" + id).then(
        res => { // then print response status
            console.log(res.data)
    })
}

const addManageProductsFunction = (products: ProductProps[], setProducts: (data: ProductProps[]) => void) : ProductProps[] => {
    return products.map(product => {
        const tempProduct:ProductProps = product
        tempProduct.removeFromStore = () => {
            removeProductFromStore(product.id)
            setProducts(products.filter(filterProduct => filterProduct.id !== product.id))
        }

        tempProduct.updateAmount = (amount: number) => {
            updateProductAmount(product.id, amount)
            setProducts(products.map(currProduct => currProduct.id === product.id ? {...currProduct, amount: amount} : currProduct))
        }

        return tempProduct;
    })
}

const ManageProducts: FC = () => {
    const [category, setCategory] = useState<string>('');
    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        FetchProductsbyCategory(category, (products: ProductProps[]) => {
            setProducts(addManageProductsFunction(products, setProducts))
        }
    )}, [category])

    return (
        <div className="App">
            choose category: 
            <Button onClick={() => setCategory('Televisions')}>
                Televisions
            </Button>
            <Button onClick={() => setCategory('Cellphones')}>
                Cellphones
            </Button>
            <Button onClick={() => setCategory('Computers')}>
                Computers
            </Button>
            <Button onClick={() => setCategory('Headset')}>
                Headset
            </Button>
            <Button onClick={() => setCategory('Sport')}>
                Sport
            </Button>
            {
                category !== '' ? 
                    <GenericTable
                        rowComponent={ProductsTable}
                        rows={products}
                    /> :
                    <></>
            }
        </div>
    );
};

export default ManageProducts;
