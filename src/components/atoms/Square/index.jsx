import React, {Component} from 'react';
import { Rect } from "react-konva";

class Square extends Component{
  render() {
    const { color, position} = this.props;
    const size = process.env.REACT_APP_SQUARE_SIZE;
    return (
      <Rect
        x={position.x}
        y={position.y}
        width={64}
        height={64}
        shadowBlur={5}
        fill={color}
        opacity={0.6}
      />
    );
  }
}

export default Square;
