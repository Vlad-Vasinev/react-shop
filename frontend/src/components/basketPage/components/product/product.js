import React from 'react';
import ProductPic from './productPic/productPic';
import ProductPhoto from "./vape-pic1.jpg"
import ProductInfo from './productInfo/productInfo';

import classes from './product.module.css';

function Product() {
    return (
        <div className={classes.shopCartProductPic}>
            <ProductPic src={ProductPhoto} />
            <ProductInfo link='Vandy Vape Jackaroo Pod Kit 2000mAh 70W (Black Warrior)' color='Чёрный' />
        </div>
    );
}

export default Product;