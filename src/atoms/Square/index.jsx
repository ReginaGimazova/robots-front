import React, {Component} from 'react';
import { Rect } from "react-konva";

class Square extends Component{
  render() {
    const {typeOfLocation, color, position} = this.props;
    const size = process.env.REACT_APP_SQUARE_SIZE;
    console.log (size);
    return (
      <Rect
        x={position.x} y={position.y}
        width={size}
        height={size}
        shadowBlur={5}
        fill={color}
        opacity={0.6}
      />
    );
  }
}

export default Square;
