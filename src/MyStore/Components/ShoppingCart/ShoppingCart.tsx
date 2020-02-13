import React, { FC, useState, useEffect} from "react"
import { ProductProps } from "../Products/ProductRow"
import { FetchProductsIdFromShoppingCart, removeProductFromShoppingCart } from "../Products/FetchDataFromServer"
import GenericTable from "../GenericTable/GenericTable"
import TableProduct from "../Products/ProductsTable"

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
    }, [products])
    return (
        <GenericTable
            rowComponent={TableProduct}
            rows={products}
        />
    )
}

export default ShoppingCart