import React, { useEffect, useState } from "react";

import classes from './loginPage.module.css'

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const [access, setAccess] = useState("");
    // const [refreshUser, setrefreshUser] = useState("");
    const http = "http://127.0.0.1:8000/api/v1/";

    let tokenFunc = async (accessVariable) => {

        let response = await fetch(`${http}user/all/`, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${accessVariable}`,
            },
        })

        let data = await response.json();

    }

    function entryFunc(e) {
        e.preventDefault();
        var params = new FormData();
        params.set('email', email);
        params.set('password', password);

        fetch(`${http}token/`, {
            method: 'POST',
            body: params,
        })
            .then((res) => {
                console.log(res.ok);
                if (res.ok === true) {
                    document.location.href = "http://localhost:3000/accountPage";
                    return res.json();
                }
            })
            .then((data) => {
                console.log(data)
                localStorage.setItem("access", data.access);
                localStorage.setItem("refresh", data.refresh);

                let accessVar = localStorage.getItem("access");

                tokenFunc(accessVar);
                // document.location.href = "http://localhost:3000/accountPage";
            })

    }

    function getEmail(e) {
        setEmail(e.target.value);
    }
    function getPassword(e) {
        setPassword(e.target.value);
    }

    return (
        <div className="container">
            <div className={classes.loginPrimary}>
                <h1 className={classes.primaryTitle}> Вход в аккаунт </h1>
                <form id="authorization" >
                    <div className={classes.card}>
                        <div>
                            <label
                                style={{ maxWidth: "360px", margin: "0 auto 18px" }}
                                className="cardLabel"> Почта </label>
                            <input
                                style={{ margin: "0 auto 40px" }}
                                onChange={getEmail}
                                value={email}
                                autoComplete="off"
                                required type="email" name="username" placeholder="name@domain.com" id="email"
                                className="cardInput" />
                            <div>
                                <label
                                    style={{ maxWidth: "360px", margin: "0 auto 18px" }}
                                    className="cardLabel"> Пароль </label>
                                <input
                                    style={{ margin: "0 auto 40px" }}
                                    onChange={getPassword}
                                    value={password}
                                    autoComplete="off"
                                    pattern="[0-9a-fA-F]{4,10}"
                                    title="Введите пароль состоящий минимум из 4 символов, но не более 10"
                                    minLength="4" maxLength="10" id="pass" required name="password" type="password"
                                    placeholder=".........." className="cardInput" />
                            </div>
                        </div>
                        <button
                            onClick={entryFunc}
                            className="primaryBtn" id="login-btn"> Войти </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;

////////////////////////////////////////////////////////////// async function
    // let entryFunc = async (e) => {

    //     e.preventDefault();
    //     var params = new FormData();
    //     params.set('email', email);
    //     params.set('password', password);

    //     const http = "http://127.0.0.1:8000/api/v1/";
    //     let response = await fetch(`${http}token/`, {
    //         method: 'POST',
    //         body: params,
    //     })

    //     let data = await response.json()
    //     setAccess(data.access);
    //     console.log(data)

    // }
////////////////////////////////////////////////////////////// async function


        // let changeToken = async () => {

    //     var refresh = new FormData();
    //     refresh.set('refresh', refreshUser);

    //     let response = await fetch(`${http}token/refresh/`, {
    //         method: 'POST',
    //         body: [`${refresh}`],
    //     })

    //     let data = await response.json();
    //     setAccess(data);
    //     console.log(data);

    // }

        // .then(res => {
        //     console.log(res);
        // })

        // if (data.ok === false) {
        //     alert('Введён неверный логин или пароль');
        //     return document.location.href = "../../loginPage.html";
        //   }
        //   if (data.ok === true) {
        //     return document.location.href = "../../addCase.html";
        //   }


                // var userNewData = {
        //     email: email,
        //     password: password,
        // };
        //JSON.stringify(userNewData)//JSON.stringify(userNewData)