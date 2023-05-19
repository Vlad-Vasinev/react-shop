import React from 'react';

import classes from './flag.module.css';

function Flag(props) {
    return (
        <div className={classes.flag}><span className={classes.flagName}>{props.state}</span></div>
    )
}

export default Flag;