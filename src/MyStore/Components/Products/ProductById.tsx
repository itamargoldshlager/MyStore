import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductProps } from "./ProductRow";
import { FetchProductbyId } from "./FetchDataFromServer";
import SingleProductPage from "./SingleProductPage"

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

export default ProductById