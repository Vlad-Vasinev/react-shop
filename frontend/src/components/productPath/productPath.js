import React from 'react';

function ProductPath(props) {
    return(
        <div className="product_path">
        <p className="product_label">{props.label}&nbsp;</p> 
        <p>/</p>
        <p className="product_type">&nbsp;{props.type}&nbsp;</p> 
        <p>/</p>
        <p className="product_subtype">&nbsp;{props.subtype}&nbsp;</p>
        </div>
    )
}

export default ProductPath;