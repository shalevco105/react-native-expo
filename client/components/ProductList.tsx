import React from "react";
import Product from "./Product";
import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native';
import ProductInterface from "../interfaces/ProductInterface";

const ProductList = () => {
    const products: ProductInterface[] = [
        {
            title: "מוצר חשמל",
            image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
            text: "מוצר קטלני אחושרמוטה ממליץ בחום נודר",
        },
        {
            title: "מוצר אמאלה ואבאלה",
            image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
            text: "מוצר פגז חשמל מת עליו",
        },
    ]

    return (
        <FlatList
            data={products}
            renderItem={({ item }) =>
                <Product product={item} />
            }
        />
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default ProductList;