import React, { useEffect } from "react";

import classes from './productPage.module.css';

import HeaderPrimary from "../headerPrimary/headerPrimary";
import ContactSection from "../contactSection/contactSection";
import ChooseForm from "../chooseForm/ChooseForm";
import MainImg from "../mainImg/MainImg";
import ProductName from "../productName/productName";
import ProductPath from "../productPath/productPath";
import Price from "../price/price";
import Flag from "../flag/flag";
import Description from "../description/description";
import InStore from "../inStore/inStore";
import ButtonBuy from "../buttonBy/buttonBy";
import ButtonBookmarks from "../buttonBoorMarks/buttonBookMarks";
import LinkShare from "../linkShare/linkShare";

import Fb_Icon from "../../assets/images/fb_icon.png";
import Twitter_Icon from "../../assets/images/twitter_icon.png";
import Vk_Icon from "../../assets/images/vk_icon.png";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import changeToken from "../../tokenFunctions/functions";

const ProductPage = () => {

    const data = useSelector(state => state.bin.addPageElements);
    const binElements = useSelector(state => state.bin.binElements);
    const addPageElements = useSelector(state => state.bin.addPageElements);

    console.log(addPageElements);

    const http = "http://127.0.0.1:8000/api/v1/";
    let tokenFunc = async () => {

        let accessBearer = localStorage.getItem("access");

        let response = await fetch(`${http}user/all/`, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${accessBearer}`,
            },
        })

        let data = await response.json()

        console.log(data)

    }

    useEffect(() => {
        tokenFunc();
    }, [])

    setInterval(() => {
        changeToken();
        tokenFunc();
    }, 55000)

    return (
        <div>
            <HeaderPrimary></HeaderPrimary>
            <div className={classes.product}>
                <div className='main'>
                    <MainImg link={data.imgSource} />
                    <div className='right_bar'>
                        <ProductName name={data.name} />
                        <ProductPath label="Магазин" type="ЖИДКОСТИ" subtype="SALT" />
                        <Price price={data.price} />
                        <Flag state="Hot" />
                        <Description description={data.equipment} amount='30ml' />
                        <form className="form">
                            <label className='label'>Вкус</label>
                            <ChooseForm name="Kiwi Pomelo" />
                            <ChooseForm name="Conifer Grapefruit" />
                            <ChooseForm name="Sour Forest Berries" />
                            <ChooseForm name="Peach Passion Fruit" />
                            <ChooseForm name="Melon Blueberry" />
                            <ChooseForm name="Mango Peach" />
                            <ChooseForm name="Lychee Lime" />
                            <ChooseForm name="Kiwi Banana" />
                            <ChooseForm name="Currant Mint" />
                            <ChooseForm name="Cowberry Lemon" />
                            <ChooseForm name="Apple Pear" />
                            <ChooseForm name="Pineapple Blackberry" />
                            <ChooseForm name="Mango-Grapefruit" />
                        </form>
                        <InStore quantity={"product.count"} />
                        <ButtonBuy
                            productName={data.name}
                            equipment={data.equipment}
                            images={data.imgSource}
                            specifications={data.specifications}
                            price={data.price}
                            count={data.count}
                            choicesId = {data.choicesId}
                            choicesName = {data.choices}
                            idEl={data.id} />
                        <p className='label'>Сохраните этот товар в закладках</p>
                        <ButtonBookmarks />
                        <p className='label'>Расскажите об этом товаре друзьям:</p>
                        <div className='links'>
                            <LinkShare link={'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvapeskidon.com%2FHOTSPOT-FUEL-SALT-ULTRA-p463062338'} text={'Поделиться'}
                                img={<img src={Fb_Icon} alt='fb icon' height='22px' width='22px' />} />
                            <LinkShare link={'https://twitter.com/intent/tweet/?text=HOTSPOT%20FUEL%20SALT%20ULTRA&url=https%3A%2F%2Fvapeskidon.com%2FHOTSPOT-FUEL-SALT-ULTRA-p463062338'} text={'Твитнуть'}
                                img={<img src={Twitter_Icon} alt='twitter icon' height='22px' width='22px' />} />
                            <LinkShare link={'http://vk.com/share.php?title=HOTSPOT%20FUEL%20SALT%20ULTRA&url=https%3A%2F%2Fvapeskidon.com%2FHOTSPOT-FUEL-SALT-ULTRA-p463062338'} text={'Поделиться'}
                                img={<img src={Vk_Icon} alt='vk icon' height='22px' width='22px' />} />
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection></ContactSection>
        </div>
    )
}

export default ProductPage;