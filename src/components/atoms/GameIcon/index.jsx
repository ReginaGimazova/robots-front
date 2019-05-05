import React, {Component} from 'react';
import { Rect } from "react-konva";

class GameIcon extends Component{
    
    constructor(props){
        super(props);
        
        const image = new Image();
        
        image.onload = () => {
            this.setState({
                fillPatternImage: image
            });
        };
        
        image.src = props.enabled ? require(`../../../images/${props.name}.png`) : require(`../../../images/${props.name}_disabled.png`);
        image.width = 32;
        image.height = 32;
        
        this.state = {
            fillPatternImage: null
        };
    }
    
    render() {
        const { position} = this.props;
        const size = process.env.REACT_APP_SQUARE_SIZE;
        return (
            <Rect
                x={position.x}
                y={position.y}
                width={size}
                height={size}
                fillPatternImage={this.state.fillPatternImage}
            />
        
        );
    }
}

export default GameIcon;
