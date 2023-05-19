import React from 'react';

import classes from './linkShare.module.css';

function LinkShare (props) {
    return (
        <div className='link_share'>
            <a className={classes.classes} href={props.link}>   
            <span>{props.img}</span>   
            {props.text}
            </a>     
            </div>
    )
}

export default LinkShare;