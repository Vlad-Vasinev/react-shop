import React from 'react';

import classes from './price.module.css';

function Price(props) {
    return(
        <p className={classes.price}>{props.price}</p>
    )
}

export default Price;