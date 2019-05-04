import React, {Component} from 'react';
import GameMap from "../../organisms/GameMap";
import GameMenu from '../../organisms/GameMenu';
import styles from './GamePage.module.css'
import Header from "../../molecules/Header";

const GamePage = () => (
    <div className={styles.template}>
        <Header/>
        <div className={styles.page__container}>
            <GameMenu/>
            <div className={styles.map__container}>
                <GameMap/>
            </div>
        </div>
    </div>
);

export default GamePage;
