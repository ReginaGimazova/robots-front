import React from 'react';
import styles from './AuthPage.module.css';
import Form from '../../organisms/AuthForm';
import Header from '../../molecules/Header';

const AuthPage = () => (
    <div className={styles.template}>
        <Header/>
        <div className={styles.form__container}>
            <h1>АВТОРИЗАЦИЯ</h1>
            <Form/>
        </div>
    </div>
);

export default AuthPage;
