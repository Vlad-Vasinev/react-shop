import React, { useState, useEffect } from "react";

import classes from './addressPage.module.css';

import changeToken from "../../tokenFunctions/functions";
import { Await } from "react-router-dom";
import { useSelector } from "react-redux";

const AddressPage = () => {

    const http = "http://127.0.0.1:8000/api/v1/";

    const [countryUser, setCountryUser] = useState("");
    const [regionUser, setRegionUser] = useState("");
    const [cityUser, setCityUser] = useState("");
    const [streetUser, setStreetUser] = useState("");
    const [phoneUser, setPhoneUser] = useState("");
    const [postalCodeUser, setPostalCodeUser] = useState("");

    const binElements = useSelector(state => state.bin.binElements);
    console.log(binElements);

    let tokenFunc = async () => {

        let accessBearer = localStorage.getItem("access");

        let response = await fetch(`${http}user/all/`, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${accessBearer}`,
            },
        })

        let data = await response.json();

        // console.log(data)

    }

    useEffect(() => {
        tokenFunc();
    }, [])

    let orderItemCreate = async (orderId, getChoicesId, getCountOfProduct) => {

        console.log("countOfFunction");
        console.log(getChoicesId);

        let access = localStorage.getItem("access");

        let orderItem = {
            order: orderId,
            choices: getChoicesId,
            quantity: getCountOfProduct,
        }

        let response = await fetch(`${http}orderitem/create/`, {
            method: "POST",
            body: JSON.stringify(orderItem),
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${access}`,
            }
        })

        let res = await response.json();

        console.log(res);

    }

    let orderCreate = async (addressId) => {

        console.log(binElements.length);

        let order = {
            "paid": false,
            "adress": addressId
        }

        let access = localStorage.getItem("access");

        let response = await fetch(`${http}order/create/`, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${access}`,
            }
        })

        let data = await response.json();

        binElements.forEach(element => {
            orderItemCreate(data.id, element.choicesId, element.countOfProduct);
        });

        console.log(data);

    }

    let postAddress = async () => {

        let addressData = {
            country: countryUser,
            region: regionUser,
            city: cityUser,
            street: streetUser,
            phone: phoneUser,
            postal_code: postalCodeUser,
        }

        let access = localStorage.getItem("access");

        let response = await fetch(`${http}adress/create/`, {
            method: "POST",
            body: JSON.stringify(addressData), //JSON.stringify(addressData),
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${access}`,
            }
        })

        // console.log(response.ok);

        let res = await response.json();

        orderCreate(res.id)

    }

    setInterval(() => {
        changeToken();
        tokenFunc();
    }, 55000)

    function nextFunc(e) {
        e.preventDefault();
        postAddress();
    }

    function countryFunc(e) {
        setCountryUser(e.target.value);
    }
    function regionFunc(e) {
        setRegionUser(e.target.value);
    }
    function cityFunc(e) {
        setCityUser(e.target.value);
    }
    function streetFunc(e) {
        setStreetUser(e.target.value);
    }
    function phoneFunc(e) {
        setPhoneUser(e.target.value);
    }
    function postalCodeFunc(e) {
        setPostalCodeUser(e.target.value);
    }

    return (
        <div>
            <form className="entryForm">
                <div >
                    <label className="cardLabel"> Страна </label>
                    <input placeholder="Россия"
                        type="text"
                        id="country"
                        value={countryUser}
                        onChange={countryFunc}
                        className="cardInput">
                    </input>
                    <label className="cardLabel"> Регион </label>
                    <input placeholder="Московская область"
                        type="text"
                        id="region"
                        value={regionUser}
                        onChange={regionFunc}
                        className="cardInput">
                    </input>
                    <label className="cardLabel"> Город </label>
                    <input placeholder="Москва"
                        type="text"
                        id="city"
                        value={cityUser}
                        onChange={cityFunc}
                        className="cardInput">
                    </input>
                    <label className="cardLabel"> Улица </label>
                    <input placeholder="Улица победителей"
                        // required
                        type="text"
                        id="street"
                        value={streetUser}
                        onChange={streetFunc}
                        className="cardInput">
                    </input>
                    <label className="cardLabel"> Номер телефона </label>
                    <input placeholder="+7 900 555 75 75"
                        // required
                        type="tel"
                        id="phone"
                        value={phoneUser}
                        onChange={phoneFunc}
                        className="cardInput">
                    </input>
                    <label className="cardLabel"> Почтовый индекс </label>
                    <input placeholder="22@mail.ru"
                        // required
                        type="text"
                        id="post_code"
                        value={postalCodeUser}
                        onChange={postalCodeFunc}
                        className="cardInput">
                    </input>
                </div>
                <button
                    onClick={nextFunc}
                    style={{ marginLeft: "0" }}
                    className="primaryBtn"> Далее </button>
            </form>
        </div>
    )
}

export default AddressPage;