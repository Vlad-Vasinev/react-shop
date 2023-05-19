import React from "react";

import classes from './productEl.module.css';
import { Link } from "react-router-dom";
import { countPageCreator } from "../../store/binReducer";
import { useDispatch } from "react-redux";

const ProductEl = (props) => {

    const dispatch = useDispatch();

    let imgSrc = props.images[0].image;

    let productData = {
        name: props.productName,
        equipment: props.equipment,
        price: props.price,
        imgSource: imgSrc,
        count: props.count,
        id: props.id,
        choicesId: props.choicesId,
        choices: props.choices,
        specifications: props.specifications
    }

    function addPage() {
        dispatch(countPageCreator(productData));
    }

    return (
        <div className={classes.productEl}>
            <div className={classes.productElImg}>
                <img src={imgSrc} alt="sweety gum"></img>
            </div>
            <div className={classes.productElInfo}>
                <h2 className={classes.productElTitle}> {props.productName} </h2>
                <div className={classes.productElVolume}> {props.equipment} </div>
                <div className={classes.productElVendor}>
                    {props.specifications}
                </div>
                <div className={classes.productElPrice}> {props.price} </div>
                <Link
                onClick = {addPage}
                className={classes.productElBuy} to="/productPage"> Купить </Link>
            </div>
        </div>
    )
}

export default ProductEl;

// <Link state={{ product: productData }} className={classes.productElBuy} to="/productPage"> Купить </Link>