import React from 'react';

import classes from './productName.module.css';

function ProductName(props) {
    return(
        <h2 className={classes.productName}>{props.name}</h2>
    )
}

export default ProductName;