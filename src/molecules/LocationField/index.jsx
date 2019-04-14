import React, {Component} from 'react';
import {Group} from 'react-konva';
import Square from '../../atoms/Square';
import data from '../../map';

class LocationField extends Component {
  
  renderPositions = (x, y, color) => {
    const size = process.env.REACT_APP_SQUARE_SIZE;
    const positions = [];
    const numSquaresInField = data['data']['squares-location'];
    for (let i = 1; i <= numSquaresInField; i ++) {
      let yOfPartOfLocation = y + i * size/2;
      for (let j = 1; j <= numSquaresInField; j ++) {
        let xOfPartOfLocation = x + j * size/2;
        
        positions.push(
            <Square position={{x: xOfPartOfLocation, y: yOfPartOfLocation }} color={color} width={size} height={size} />
        );
      }
    }
    return positions;
  };

  render() {
    
    const {typeOfLocation, color, position} = this.props;
    const numSquaresInField = data['data']['squares-location'];
    const fieldSize = process.env.REACT_APP_SQUARE_SIZE * numSquaresInField;
    return (
      <Group
        width={fieldSize}
        height={fieldSize}
      >
        {this.renderPositions(position[0], position[1], color)}
      </Group>

    )
  }

}

export default LocationField
