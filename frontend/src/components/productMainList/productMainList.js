import React, { useEffect } from "react";

import classes from './productMainList.module.css';

import ProductEl from "../productEl/productEl";
import ContactSection from "../contactSection/contactSection";

import { useDispatch, useSelector } from "react-redux";
import { getProductsCreator } from "../../store/productReducer";

const ProductMainList = () => {

    const http = "http://127.0.0.1:8000/api/v1/";

    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.product.products);

    let getAllProducts = async () => {
        let response = await fetch(`${http}product/all/`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },

        })

        let data = await response.json();

        console.log(data);

        data.forEach(element => {
            dispatch(getProductsCreator(element))
        });

    }

    console.log(allProducts);

    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <div className="container">
            <div className={classes.mainList}>
                {
                    allProducts.map(el =>
                        <div key = { el.id }>
                            <ProductEl
                            productName = {el.name}
                            equipment = { el.equipment }
                            images = { el.images }
                            specifications = { el.specifications }
                            price = { el.choices[0].price }
                            count = { el.choices[0].count }
                            choicesId = {el.choices[0].id}
                            choices = {el.choices}
                            id = { el.id }
                            ></ProductEl>
                        </div>
                    )
                }
            </div>
            <hr></hr>
            <ContactSection></ContactSection>
        </div>
    )
}

export default ProductMainList;