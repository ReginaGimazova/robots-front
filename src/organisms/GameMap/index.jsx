import React, {Component} from 'react';
import LocationField from '../../molecules/LocationField';
import styles from './GameMap.module.css';
import {Layer, Stage} from "react-konva";

const position = [
  {
    x: 900,
    y: 900,
  },
  
  {
    x: 1950,
    y: 1600,
  },
  
  {
    x: 900,
    y: 1900
  }
];

class GameMap extends Component {
  state = {
    stageScale: 1,
    stageX: 0,
    stageY: 0
  };
  
  
  handleWheel = e => {
    e.evt.preventDefault();
    
    const scaleBy = 1.01;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    };
    
    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
    
    stage.scale({x: newScale, y: newScale});
    
    this.setState({
      stageScale: newScale,
      stageX:
          -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      stageY:
          -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    });
  };
  
  render(){
    const mapSize = process.env.REACT_APP_SQUARE_SIZE * process.env.REACT_APP_SQUARES_IN_MAP;
    
    return (
        <div className={styles.gameMap}>
          <div className={styles.scrollContainer} id='scroll-container'>
            <div className={styles.containerWrapper} id='container'>
              <Stage
                  width={mapSize}
                  height={mapSize}
                  onWheel={this.handleWheel}
                  scaleY={1}
                  scaleX={1}
              >
                <Layer
                  width={mapSize}
                  height={mapSize}
                >
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
