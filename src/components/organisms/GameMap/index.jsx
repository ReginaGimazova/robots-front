import React, {Component} from 'react';
import LocationField from '../../molecules/LocationField';
import styles from './GameMap.module.css';
import {Layer, Stage} from "react-konva";
import data from '../../../map';


const squares_area = data['data']['squares-area'];

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
    const mapSize = process.env.REACT_APP_SQUARE_SIZE * squares_area;
    const position = [0,0];
  
    return (
      <div className={styles.gameMap}>
        <Stage
            width={mapSize}
            height={mapSize}
            x={0}
            y={0}
        >
          <Layer
            width={mapSize}
            height={mapSize}
            x={0}
            y={0}
          >
            <LocationField
              position={position}
              numOfSquares={squares_area}
            />
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default GameMap;
