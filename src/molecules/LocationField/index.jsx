import React, {Component} from 'react';
import {Group} from 'react-konva';
import Square from '../../atoms/Square';

class LocationField extends Component {
  
  renderPositions = (x, y, color) => {
    const size = process.env.REACT_APP_SQUARE_SIZE;
    const field_size = process.env.REACT_APP_SQUARE_SIZE * process.env.REACT_APP_SQUARES_IN_FIELD;
    const positions = [];
    const x0 = x - field_size / 2;
    const y0 = y - field_size / 2;
    for (let i = 1; i <= 40; i ++) {
      let yOfPartOfLocation = y0 + i * size/2;
      for (let j = 1; j <= 40; j ++) {
        let xOfPartOfLocation = x0 + j * size/2;
        
        positions.push(
            <Square position={{x: xOfPartOfLocation, y: yOfPartOfLocation }} color={color} width={size} height={size} />
        );
      }
    }
    return positions;
  };

  render() {
    
    const {typeOfLocation, color, position} = this.props;
    const field_size = process.env.REACT_APP_SQUARE_SIZE * process.env.REACT_APP_SQUARES_IN_FIELD;
    return (
      <Group
        x={ position.x }
        y={ position.y }
        width={field_size}
        height={field_size}
      >
        {this.renderPositions(position.x, position.y, color)}
      </Group>

    )
  }

}

export default LocationField
