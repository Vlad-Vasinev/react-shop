import React from 'react';

import classes from './heading.module.css';

function Heading(props) {
    return (
        <h2 className={classes.shopCartTitle}>{props.text}</h2>
    );
}

export default Heading;