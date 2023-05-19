import React from 'react';

import classes from './productPath.module.css';

function ProductPath(props) {
    return (
        <div className={classes.productPath}>
            <p className="product_shop">{props.shop}&nbsp;</p>
            <p>/</p>
            <p className="product_basket">&nbsp;{props.basket}&nbsp;</p>
        </div>
    )
}

export default ProductPath;