import React from 'react';

import classes from './price.module.css';

function Price(props) {
    return (
        <p className={classes.productPrice}>
            ИТОГО <span class={classes.productPriceAll}>{props.price}</span>
        </p>
    )
}

export default Price;