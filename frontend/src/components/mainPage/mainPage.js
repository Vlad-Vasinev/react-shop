import React from "react";

import classes from './mainPage.module.css'

import HeaderPrimary from "../headerPrimary/headerPrimary";
import ProductMainList from "../productMainList/productMainList";

const MainPage = () => {
    return (
        <div className= { classes.mainWrapper }>
            <HeaderPrimary></HeaderPrimary>
            <h1 className="mainTitle">
                шоп №1
                <span className="mainSubtitle">Теперь у нас тоже есть магазин!</span>
            </h1>
            <ProductMainList></ProductMainList>
        </div>
    )
}

export default MainPage;