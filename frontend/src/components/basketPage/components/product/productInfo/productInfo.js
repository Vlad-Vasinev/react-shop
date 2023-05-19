import React from 'react';

import classes from './productInfo.module.css';

function ProductInfo(props) {
    return (
        <div className="product-info">
            <a className={classes.classes} href="#"
            >{props.link}</a>
            <p className={classes.productColor}>
                Цвет: <span className={classes.productColor}>{props.color}</span>
            </p>
        </div>
    )
}

export default ProductInfo;