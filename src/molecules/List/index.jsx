import React, {Component} from 'react';
import styles from './List.module.css';

class List extends Component {
  render(){
    const {health, loots, traps, players} = this.props;
    return (
      <ul className={styles.list}>
         {players.map((player) =>
            <li className={styles.listItem} key={player.id}>
              {player.name}
            </li>
        )}
      </ul>
    )
  }
};

export default List
