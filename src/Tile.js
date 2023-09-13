import React, { Component } from "react";

import roverLeft from "./img/rovers/left.png";
import roverRight from "./img/rovers/right.png";
import roverUp from "./img/rovers/up.png";
import roverDown from "./img/rovers/down.png";
import obstacle from "./img/rovers/obstacle.png";
import point1 from "./img/rovers/point1.png";
import highlight from "./img/rovers/highlight.png";


const tileBackgrounds = {
  rover: [
    `url(${roverUp})`,
    `url(${roverRight})`,
    `url(${roverDown})`,
    `url(${roverLeft})`,
  ],
  point1: `url(${point1})`,
  obstacle: `url(${obstacle})`,
  highlight: `url(${highlight})`,
  tile: `#fff`
};

class Tile extends Component {
  render() {
    var classString = `tile ${this.props.hasRover ? "rover" : ""}`;
    let background = tileBackgrounds.tile;
    if( this.props.hasObstacle) {
      background = tileBackgrounds.obstacle
    }
    else if( this.props.hasPoint1) {
      background = tileBackgrounds.point1
    }
    else if( this.props.hasHighlight) {
      background = tileBackgrounds.highlight
    }
    
    else if (this.props.hasRover) {
      background = tileBackgrounds.rover[this.props.direction];
    }
    

    return (
      <td className={classString} style={{ background: background }}>
        {}
      </td>
    );
  }
}

export default Tile;