import React, {Component} from 'react';
import * as Konva from 'konva';
import ReactDom from 'react-dom';
import {Group} from 'react-konva';
import Square from '../../atoms/Square';

class LocationField extends Component {
  
  constructor(props){
    super(props);
    this.group = React.createRef().current;
  }
  
  componentDidMount() {
    this.createLocation()
  }
  
  createLocation = () => {
    const size = process.env.REACT_APP_SQUARE_SIZE;
    const {position} = this.props;
  
    const x0 = 0;
    const y0 = 0;
    for (let i = 1; i <= 40; i ++) {
      for (let j = 1; j <= 40; j ++) {
        let xOfPartOfLocation = x0 + j * size/2;
        let yOfPartOfLocation = y0 + i * size/2;
        console.log(xOfPartOfLocation, yOfPartOfLocation);
        this.group.add(<Square position={{x: xOfPartOfLocation, y: yOfPartOfLocation }} color="#6a497c" />)
      }
    }
  };

  getGroupRef = (node) => {this._groupEl = node};
  render() {
    
    const {typeOfLocation, color, position} = this.props;
    const field_size = process.env.REACT_APP_SQUARE_SIZE * process.env.REACT_APP_SQUARES_IN_FIELD;
    return (
      <Group
        x={ position.x }
        y={ position.y }
        width={field_size}
        height={field_size}
        ref={this.group}
      />

    )
  }

}

export default LocationField
