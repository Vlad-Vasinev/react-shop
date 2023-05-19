import React from 'react';

import classes from './chooseForm.module.css';

function ChooseForm(props) {
    return (
        <label className={classes.chooseForm}>
            <input type="radio" name="radio" value="{props.name}" id="choice1" className={classes.choosFormRadio} />
            {props.name}
        </label>
    )
}

export default ChooseForm;