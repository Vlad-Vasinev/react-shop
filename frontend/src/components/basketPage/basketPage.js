import React, { useEffect } from "react";

import classes from './basketPage.module.css';
import { Link, json } from "react-router-dom";

import HeaderPrimary from "../headerPrimary/headerPrimary";
import ContactSection from "../contactSection/contactSection";

import imgSrc from '../../../src/assets/images/headerBg.PNG';
import { useDispatch, useSelector } from "react-redux";
import { removeFromBinCreator } from "../../store/binReducer";
import { minusProductCreator } from "../../store/binReducer";
import { setCountCreator } from "../../store/binReducer";
import { minusCountOfProductCreator } from '../../store/binReducer';

const BasketPage = () => {

    const binElements = useSelector(state => state.bin.binElements);
    const countProduct = useSelector(state => state.bin.countProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        if (binElements.length === 0) {
            dispatch(setCountCreator())
        }
    })

    function delFromBin(elId, elPrice, countProduct) {
        if (countProduct > 1) {
            dispatch(minusProductCreator(elPrice));
            dispatch(minusCountOfProductCreator(elId));
        }
        else {
            dispatch(removeFromBinCreator(elId));
            dispatch(minusProductCreator(elPrice)); 
        }
    }

    return (
        <div className="container">
            <div className={classes.shopCartProduct}>
                <HeaderPrimary></HeaderPrimary>
                <div className={classes.basketWrapper}>
                    <div className={classes.basketLeftSection}>
                        <h2 className={classes.basketLeftTitle}> Корзина </h2>
                        <div className={classes.basketList}>
                            {
                                binElements.length > 0 ?
                                    binElements.map((el) =>
                                        <div
                                            key={el.id}
                                            className={classes.basketEl}>
                                            <button
                                                onClick={() => delFromBin(el.id, el.price, el.countOfProduct)}
                                                className={classes.basketElDel}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                    <path
                                                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                                </svg>
                                            </button>
                                            <div className={classes.basketElImg}>
                                                <img style={{ maxWidth: "140px" }} src={el.images} alt="картинка выбранного товара" />
                                            </div>
                                            <div className={classes.basketElInfo}>
                                                <div className={classes.basketElName}> {el.name} </div>
                                                <div className={classes.basketElEquipment}> {el.equipment} </div>
                                                <div className={classes.basketElCount}> {el.count} Есть на складе </div>
                                                <div className={classes.basketElCount}> {el.countOfProduct} заказано </div>
                                            </div>
                                        </div>
                                    ) : "nothing here"
                            }
                        </div>
                        <div className={classes.countItems}>
                            <h3 className={classes.countItemsTitle}>Итого:</h3>
                            <div className={classes.countItemsField}>{countProduct} &#8381; </div>
                        </div>
                    </div>
                    <div className={classes.basketRightSection}>
                        <h3 className={classes.basketRightTitle}>Оформление заказа:</h3>
                        <div className={classes.countItemsPolicy}>
                            Я ознакомился (-ась) с политикой  конфиденциальности и согласен на обработку персональных данных и получение новостей
                        </div>
                        <Link className={classes.orderBtn} to="/addressPage">Оформить заказ</Link>
                        <div className={classes.basketRightInfo}>
                            <h3 className={classes.basketRightTitle}>Далее:</h3>
                            <div className={classes.basketRightText}>
                                <h4 className={classes.basketRightTitle}>
                                    Способ доставки:
                                    <span className={classes.basketRightSubitle}>
                                        Выберите, как будете получать свой заказ.
                                    </span>
                                </h4>
                            </div>
                            <div className={classes.basketRightText}>
                                <h4 className={classes.basketRightTitle}>
                                    Оплата:
                                    <span className={classes.basketRightSubitle}>
                                        Выберите способ оплаты и введите платёжные данные.
                                    </span>
                                </h4>
                            </div>
                            <div className={classes.basketRightText}>
                                <h4 className={classes.basketRightTitle}>
                                    Подтверждение заказа:
                                    <span className={classes.basketRightSubitle}>
                                        Разместите заказ и получите подтверждение по электронной почте.
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactSection></ContactSection>
            </div>
        </div>
    )
}

export default BasketPage;
