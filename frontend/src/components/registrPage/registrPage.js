import React, { useState } from "react";

import classes from './registrPage.module.css';
import { useEffect } from 'react';

const RegistrPage = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [nick, setNick] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const effect = (e) => {
        e.preventDefault();

        var userNewData = {
            email: email,
            username: nick,
            first_name: name,
            last_name: surname,
            password: password,
            password2: password2,
        };

        const http = "http://127.0.0.1:8000/api/v1/";

        fetch(`${http}register/`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userNewData)
        }).then(res => {
            if (res.ok === true) {
                document.location.href = "http://localhost:3000";
            }
        }).then(function (data) {
            return console.log(data);
        });

    };

    function nameFunc(e) {
        setName(e.target.value);
    }
    function surnameFunc(e) {
        setSurname(e.target.value);
    }
    function nickFunc(e) {
        setNick(e.target.value);
    }
    function mailFunc(e) {
        setEmail(e.target.value);
    }
    function passwordFunc(e) {
        setPassword(e.target.value);
    }
    function passwordFunc2(e) {
        setPassword2(e.target.value);
    }

    return (
        <div className="container">
            <form className="entryForm">
                <div >
                    <label className="cardLabel"> Имя </label>
                    <input placeholder="Иван"
                        type="text"
                        id="name"
                        onChange={nameFunc}
                        value={name}
                        className="cardInput">
                    </input>
                    <label className="cardLabel"> Фамилия </label>
                    <input placeholder="Сидоров"
                        type="text"
                        id="surname"
                        onChange={surnameFunc}
                        value={surname}
                        className="cardInput">
                    </input>
                    <label className="cardLabel"> Ник </label>
                    <input placeholder="nickname"
                        type="text"
                        id="nick"
                        onChange={nickFunc}
                        value={nick}
                        className="cardInput">
                    </input>
                    <label className="cardLabel"> Электронная почта </label>
                    <input placeholder="22@mail.ru"
                        // required
                        type="email"
                        id="mail"
                        onChange={mailFunc}
                        value={email}
                        className="cardInput">
                    </input>
                    <label className="cardLabel"> Пароль </label>
                    <input placeholder="22@mail.ru"
                        // required
                        type="password"
                        id="pass"
                        onChange={passwordFunc}
                        value={password}
                        className="cardInput">
                    </input>
                    <label className="cardLabel"> Проверка пароля </label>
                    <input placeholder="22@mail.ru"
                        // required
                        type="password"
                        id="pass"
                        onChange={passwordFunc2}
                        value={password2}
                        className="cardInput">
                    </input>
                </div>
                <button
                    onClick={effect}
                    style={{marginLeft: "0"}}
                    className="primaryBtn"> Зарегистрироваться </button>
            </form>
        </div>

    )
}

export default RegistrPage;