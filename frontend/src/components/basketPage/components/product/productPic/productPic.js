import React from 'react';

import classes from './productPic.module.css';

function ProductPic(props) {
    return (
        <img src={props.src} alt='product' width="100" height="100" className="shop-cart-product-pic" />
    );
}

export default ProductPic;