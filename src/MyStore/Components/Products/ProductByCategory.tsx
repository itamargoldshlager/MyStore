import React, {FC, useState, useEffect} from 'react';
import { ProductProps } from './ProductRow';
import {
    useParams
} from "react-router-dom";

import { FetchProductsbyCategory } from './FetchDataFromServer';
import GenericTable from '../GenericTable/GenericTable';
import TableProduct from './ProductsTable';

const ProductByCategory: FC = () => {
    const [products, setProducts] = useState<ProductProps[]>([])
    let { category } = useParams();

    useEffect(() => {
        FetchProductsbyCategory(category, (products: ProductProps[]) => setProducts((products))
    )}, [category])

    return (
        <GenericTable
            rowComponent={TableProduct}
            rows={products}
        />
    );
};

export default ProductByCategory