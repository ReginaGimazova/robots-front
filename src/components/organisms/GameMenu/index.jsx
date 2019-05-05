import React, {Component} from 'react';
import styles from './GameMenu.module.css';
import data from '../../../map'

class GameMenu extends Component {
    
    renderLoots = () => {
        const loots = data['data']['loots'];
        let lootName = '';
        let lootArray = [];
        for (let loot of loots) {
            lootName = loot['name'];
            let src = require(`../../../images/${lootName}.png`);
            lootArray.push(
                <li>
                    <img src={src} alt='loot'/>
                </li>
            )
            
        }
        return lootArray;
    };
    
    renderHits = () => {
        const hits = data['data']['hits'];
        let hitName = '';
        let hitArray = [];
        for (let hit of hits) {
            hitName = hit['name'];
            let src = require(`../../../images/${hitName}.png`);
            hitArray.push(
                <li>
                    <img src={src} alt='hit'/>
                </li>
            )
        }
        return hitArray
    };
    
    renderHealth = () => {
        const health = data['data']['health'];
        let hearts = [];
        const src = require('../../../images/health.png');
        const srcDisabled = require('../../../images/health_disabled.png');
        for (let i = 1; i <= 5; i ++){
            hearts.push(
                i <= health && (
                    <li>
                        <img src={src} alt='health'/>
                    </li>
                ),
                
                i > health && (
                    <li>
                        <img src={srcDisabled} alt='health'/>
                        
                    </li>
                )
            )
        }
        return hearts
    };
    
    render() {
        return(
            <div className={styles.features__container}>
                <section>
                    <h2>Здоровье</h2>
                    <ul className={styles.list}>
                        {this.renderHealth()}
                    </ul>
                </section>
                <section>
                    <h2>Предметы</h2>
                    <ul className={styles.list}>
                        {this.renderLoots()}
                    </ul>
                </section>
                <section>
                    <h2>Ловушки</h2>
                    <ul className={styles.list}>
                        {this.renderHits()}
                    </ul>
                </section>
            </div>
        )
    }
}

export default GameMenu
