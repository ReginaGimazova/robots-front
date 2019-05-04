import React, {Component} from 'react';
import {Group} from 'react-konva';
import Square from '../../atoms/Square';
import GameIcon from '../../atoms/GameIcon';
import data from '../../../map';

const locations = [
  {
    position: data['data']['desert'].position,
    name: data['data']['desert']['nameOfLocation']
  },

  {
    position: data['data']['electric_ground'].position,
    name: data['data']['electric_ground']['nameOfLocation']
  },

  {
    position: data['data']['jungle'].position,
    name: data['data']['jungle']['nameOfLocation']
  },
];

const loots = data['data']['loots'];

const locationSizeInPixels = process.env.REACT_APP_SQUARE_SIZE * data['data']['squares-location'];

class LocationField extends Component {
  
  renderPositions = (position, numOfSquares) => {
    const size = process.env.REACT_APP_SQUARE_SIZE;
    let x = position[0];
    let y = position[1];
    const positions = [];
    let color= '#F0F0F0';
  
    for (let i = 1; i <= numOfSquares; i ++) {
      let yOfPartOfLocation = y + i * size;
      for (let j = 1; j <= numOfSquares; j ++) {
        let xOfPartOfLocation = x + j * size;
        
        let typeOfLocation = this.checkLocations(xOfPartOfLocation, yOfPartOfLocation);
        let lootName = this.checkIconPosition(xOfPartOfLocation, yOfPartOfLocation);
        
        switch (typeOfLocation) {
          case 'jungle':
            color = "#4d8e52";
            break;
          case 'electric':
            color = "#6a497c";
            break;
          case 'desert':
            color = "#f7b44a";
            break;
          case 'empty':
            color = '#F0F0F0';
        }
        
        positions.push(
          <Square position={{x: xOfPartOfLocation, y: yOfPartOfLocation}} color={color} />
        )
        
        if (lootName !== ''){
          positions.push(
            <GameIcon position={{x: xOfPartOfLocation, y: yOfPartOfLocation}} name={lootName}/>
          )
        }
        
      }
    }
    return positions;
  };
  
  
  checkLocations = (x, y) => {
    
    let typeOfLocation = '';
    
    let xStartOfDesert = locations[0].position[0];
    let xEndOfDesert = locations[0].position[0] + locationSizeInPixels;
    let yStartOfDesert = locations[0].position[1];
    let yEndOfDesert = locations[0].position[1] + locationSizeInPixels;
  
    let xStartOfElectric = locations[1].position[0];
    let xEndOfElectric = locations[1].position[0] + locationSizeInPixels;
    let yStartOfElectric = locations[1].position[1];
    let yEndOfElectric = locations[1].position[1] + locationSizeInPixels;
  
    let xStartOfJungle = locations[2].position[0];
    let xEndOFJungle = locations[2].position[0] + locationSizeInPixels;
    let yStartOfJungle = locations[2].position[1];
    let yEndOfJungle = locations[2].position[1] + locationSizeInPixels;
    
    if (x >= xStartOfDesert && x <= xEndOfDesert && y >= yStartOfDesert &&  y <= yEndOfDesert){
      typeOfLocation = 'desert';
    }
    
    else if (x >= xStartOfJungle && x <= xEndOFJungle && y >= yStartOfJungle && y <= yEndOfJungle){
      typeOfLocation = 'jungle';
    }
    
    else if (x >= xStartOfElectric && x <= xEndOfElectric && y>= yStartOfElectric && y <= yEndOfElectric) {
      typeOfLocation = 'electric';
    }
    else {
      typeOfLocation = 'empty';
    }
  
    return typeOfLocation;
  };
  
  checkIconPosition = (x, y) => {
    let lootName = '';
    for (let loot of loots) {
      if (x === loot.position[0] && y === loot.position[1]){
        lootName = loot['name'];
      }
    }
    return lootName;
  };
  
  render() {
    const { position, numOfSquares} = this.props;
    const fieldSize = process.env.REACT_APP_SQUARE_SIZE * numOfSquares;
    return (
      <Group
        width={fieldSize}
        height={fieldSize}
      >
        {this.renderPositions(position, numOfSquares)}
      </Group>

    )
  }

}

export default LocationField