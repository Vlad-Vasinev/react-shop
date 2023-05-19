import React from 'react';

import classes from './finals.module.css';

function Finals(props) {
    return (
        <p className='shop-cart-text'>{props.name}&nbsp;
            <span className={classes.shopCartLink}>{props.link}</span>
        </p>
    );
}

export default Finals;