import React, {Component} from 'react';
import styles from './GameMenu.module.css';
import List from '../../molecules/List';

class GameMenu extends Component {
    players = [
        {
            id: 0,
            name: 'Player1'
        },
        {
            id: 1,
            name: 'Player2'
        },
        {
            id: 3,
            name: 'Player3'
        },
        {
            id: 4,
            name: 'Player4'
        }
    ];
    render() {
        return(
            <menu>
                <h2>Players</h2>
                <List players={this.players}/>
            </menu>
        )
    }
}

export default GameMenu
