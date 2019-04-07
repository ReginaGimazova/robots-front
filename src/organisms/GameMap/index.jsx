import React, {Component} from 'react';
import LocationField from '../../molecules/LocationField';
import styles from './GameMap.module.css';
import {Layer, Stage} from "react-konva";

const position = [
  {
    x: 500,
    y: 500,
  },

  {
    x: 2100,
    y: 4100,
  },

  {
    x: 4100,
    y: 3100
  }
];

class GameMap extends Component {
  state = {
    x: 0,
    y: 0
  };
  
  stageRef = React.createRef();
  
  componentDidMount() {
   
    const scrollContainer = document.getElementById('scroll-container');
    scrollContainer.addEventListener('scroll', function () {
      let dx = scrollContainer.scrollLeft;
      let dy = scrollContainer.scrollTop;
      const container = document.getElementById('container');
      container.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
    /*  let stage = this.stageRef.current;
      stage.x(-dx);
      stage.y(-dy);
      stage.batchDraw();*/
      
    })
  }

  
  
  render(){
    const map_size = process.env.REACT_APP_SQUARE_SIZE * process.env.REACT_APP_SQUARES_IN_MAP;
    const field_size = process.env.REACT_APP_SQUARE_SIZE * process.env.REACT_APP_SQUARES_IN_FIELD;
    
    return (
      <div className={styles.gameMap}>
        <div className={styles.scrollContainer} id='scroll-container'>
          <div className={styles.containerWrapper} id='container'>
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                ref={this.stageRef}
            >
              <Layer>
                <LocationField
                    typeOfLocation="thunder"
                    color="#6a497c"
                    position={position[0]}
                />
                <LocationField
                    typeOfLocation="jungle"
                    color="#4d8e52"
                    position={position[1]}
                />
                <LocationField
                    typeOfLocation="desert"
                    color="#f7b44a"
                    position={position[2]}
                />
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    )
  }
}

export default GameMap;
