import React, {Component} from 'react';
import styles from './GameMenu.module.css';
import List from '../../molecules/List';
import data from '../../../map.json'

const health = data['data']['health'];
const loots = data['data']['loots'];
const hits = data['data']['hits'];

class GameMenu extends Component {
   
    render() {
        return(
            <menu>
                <h2>Players</h2>
                <List heath={health} loots={loots} hits={hits}/>
            </menu>
        )
    }
}

export default GameMenu
