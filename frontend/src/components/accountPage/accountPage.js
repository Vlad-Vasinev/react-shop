import React, { useEffect, useState } from "react";

import classes from './accountPage.module.css';

import userProfileImg from '../../assets/images/headerBg.PNG';
import changeToken from "../../tokenFunctions/functions";

const AccountPage = () => {

    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [userid, setUserId] = useState("");

    const [newEmail, setNewEmail] = useState("");
    const [newFirstname, setNewFirstname] = useState("");
    const [newLastname, setNewLastname] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newUserid, setNewUserId] = useState("");

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

        setEmail(data[0].email);
        setFirstname(data[0].first_name);
        setLastname(data[0].last_name);
        setUsername(data[0].username);
        setUserId(data[0].id);

    }

    useEffect(() => {
        tokenFunc();
    })

    setInterval(() => {
        changeToken();
        tokenFunc();
    }, 55000)

    let changeUserData = async (e) => {

        e.preventDefault();
        let accessBearer = localStorage.getItem("access");

        var userNewData = {
            email: newEmail,
            username: newUsername,
            first_name: newFirstname,
            last_name: newLastname,
        }

        let fetchResponse = await fetch(`${http}update_profile/${userid}/`, {
            method: "PUT",
            body: JSON.stringify(userNewData),
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${accessBearer}`,
            },
        })
        let res = await fetchResponse.json();
        console.log(res);

        tokenFunc();

    }

    function changeData(e) {
        changeUserData(e);
    }

    function nameFunc(e) {
        setNewFirstname(e.target.value);
    }
    function surnameFunc(e) {
        setNewLastname(e.target.value);
    }
    function nickFunc(e) {
        setNewUsername(e.target.value);
    }
    function mailFunc(e) {
        setNewEmail(e.target.value);
    }

    return (
        <div className="container">
            <div className={classes.accountWrapper}>
                <div className={classes.accountInner}>
                    <button className={classes.editProfile}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path
                                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z" />
                        </svg>
                    </button>
                    <div className={classes.accountImg}>
                        <img src={userProfileImg} alt="картинка пользователя" />
                    </div>
                    <div className={classes.accountFields}>
                        <div className={classes.accountField}>
                            Имя: <span className={classes.accountFieldContent}> {firstname} </span>
                        </div>
                        <div className={classes.accountField}>
                            Фамилия: <span className={classes.accountFieldContent}> {lastname} </span>
                        </div>
                        <div className={classes.accountField}>
                            Ник: <span className={classes.accountFieldContent}> {username} </span>
                        </div>
                        <div className={classes.accountField}>
                            Электронный адрес: <span className={classes.accountFieldContent}> {email} </span>
                        </div>
                    </div>
                </div>
                <div className={classes.changeProfile}>
                    <form
                        style={{ paddingTop: "0" }}
                        className="entryForm">
                        <div className={classes.cardInner}>
                            <label className="cardLabel"> Имя </label>
                            <input placeholder="Иван"
                                type="text"
                                id="name"
                                value={newFirstname}
                                onChange={nameFunc}
                                className="cardInput">
                            </input>
                            <label className="cardLabel"> Фамилия </label>
                            <input placeholder="Сидоров"
                                type="text"
                                id="surname"
                                value={newLastname}
                                onChange={surnameFunc}
                                className="cardInput">
                            </input>
                            <label className="cardLabel"> Ник </label>
                            <input placeholder="nickname"
                                type="text"
                                id="nick"
                                value={newUsername}
                                onChange={nickFunc}
                                className="cardInput">
                            </input>
                            <label className="cardLabel"> Электронная почта </label>
                            <input placeholder="22@mail.ru"
                                type="email"
                                id="mail"
                                value={newEmail}
                                onChange={mailFunc}
                                className="cardInput">
                            </input>
                        </div>
                        <button
                            style={{ marginLeft: "0" }}
                            onClick={changeData}
                            className="primaryBtn" id="login-btn"> Изменить данные </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AccountPage;

//{username} {email} {password} {last_name} {first_name}

/*
        // let email = localStorage.getItem("email");
    // let username = localStorage.getItem("username");
    // let first_name = localStorage.getItem("first_name");
    // let last_name = localStorage.getItem("last_name");
    // let password = localStorage.getItem("password");
*/
{/* <div className={classes.accountField}>
                            Пароль: <span className={classes.accountFieldContent}> {password} </span>
                        </div> */}