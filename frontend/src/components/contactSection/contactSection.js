import React from "react";

import classes from './contactSection.module.css';

const ContactSection = () => {
    return (
        <div className={ classes.contactWrapper }>
            <h2 className={ classes.contactTitle }>Связаться с нами</h2>
            <a className={ classes.contactMail } href="mailto:love@iswe.ru">love@iswe.ru</a>
            <h3 className={ classes.contactSecondaryTitle }>Мы в социальных сетях:</h3>
            <div className={ classes.contactSocial }>
                <a className={ classes.contactSocialLink } href="">
                    Арматура
                </a>
                <a className={ classes.contactSocialLink } href=""> Телеграм </a>
            </div>
        </div>
    )
}

export default ContactSection;