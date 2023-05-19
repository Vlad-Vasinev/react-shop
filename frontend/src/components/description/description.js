import React from 'react';

import classes from './description.module.css';

function Description(props) {
    return (
        <div className={classes.productDescription}>
            <p className='description'>{props.description}</p>
            <p>&nbsp;/&nbsp;</p>
            <p className='amount'>{props.amount}</p>
        </div>
    )
}

export default Description;