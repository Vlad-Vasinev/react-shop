import React from 'react';

import classes from './mainImg.module.css';

function MainImg (props) {
    return (
        <img className={ classes.mainImg } title="HOTSPOT FUEL SALT ULTRA" alt="HOTSPOT FUEL SALT ULTRA" src={props.link} height="515px" width="730px"/>
    )
}

export default MainImg;