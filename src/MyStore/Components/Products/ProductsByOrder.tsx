import React, {FC, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ProductProps } from './ProductRow';
import { FetchProductbyOrder } from './FetchDataFromServer';
import GenericTable from '../GenericTable/GenericTable';
import ProductsTable from './ProductsTable'

const ProductsByOrder: FC = () => {
    let { orderId } = useParams();
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        FetchProductbyOrder(Number(orderId), (data: ProductProps[]) => setProducts(data))
    }, [orderId])

    return (
        <GenericTable
            rowComponent={ProductsTable}
            rows={products}
        />
    );
};

export default ProductsByOrder;
