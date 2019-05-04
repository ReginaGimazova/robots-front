import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Header from "../../molecules/Header";
import styles from './MenuPage.module.css'

const MenuPage = () => (
    <div className={styles.template}>
        <Header/>
        <div className={styles.menu__container}>
            <h1 className={styles.menu__title}>
                МЕНЮ
            </h1>
            <div className={styles.menu}>
                <Link to='/game' className={styles.menu__item}>Начать игру</Link>
                <Link to='#' className={styles.menu__item}>Создать робота</Link>
                <Link to='#' className={styles.menu__item}>Помощь</Link>
            </div>
        </div>
    </div>
);

export default MenuPage;
