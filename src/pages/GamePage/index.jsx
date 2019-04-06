import React, {Component} from 'react';
import GameMap from "../../organisms/GameMap";
import GameMenu from '../../organisms/GameMenu';
import styles from './GamePage.module.css'

const GamePage = () => (
    <div className={styles.pageBody}>
        <GameMenu/>
        <div className={styles.mapContainer}>
            <GameMap/>
        </div>
    </div>
);

export default GamePage;
