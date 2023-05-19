import React from 'react';

import classes from './inStore.module.css';

function InStore(props) {
    return(
        <p className={classes.label}>В наличии: {props.quantity} штук</p>
    )
}

export default InStore;