import React, { Component } from "react";
import Tile from "./Tile";

class Board extends Component {

isPointInsideArray2(point) {
    const arrayOfArrays = this.props.highlight;  
      for (let i = 0; i < arrayOfArrays.length; i++) {
          if (point[0] === arrayOfArrays[i][0] && point[1] === arrayOfArrays[i][1])  {
            return true;
          }
        }
        return false;
      }   
isPointInsideArray(point) {
const arrayOfArrays = this.props.obstacle;  
  for (let i = 0; i < arrayOfArrays.length; i++) {
      if (point[0] === arrayOfArrays[i][0] && point[1] === arrayOfArrays[i][1])  {
        return true;
      }
    }
    return false;
  }   
isPointInsideArray1(point) {
    const arrayOfArrays = this.props.point1;  
      for (let i = 0; i < arrayOfArrays.length; i++) {
          if (point[0] === arrayOfArrays[i][0] && point[1] === arrayOfArrays[i][1])  {
            return true;
          }
        }
        return false;
      }     

  renderRow(y) {
    var tiles = [];
    for (let x = 0; x < this.props.dimensions[0]; ++x) {
      var hasRover =
        x === this.props.position[0] && y === this.props.position[1];

      tiles.push(
        <Tile
          key={[x, y]}
          value={[x, y]}
          hasRover={hasRover}
          hasObstacle={this.isPointInsideArray([x, y])}
          hasPoint1={this.isPointInsideArray1([x, y])}
          hasHighlight={this.isPointInsideArray2([x, y])}

          direction={this.props.direction}
        />
      );
    }
    return (
      <tr className="row" key={y}>
        {tiles}
      </tr>
    );
  }

  render() {
    var rows = [];
    for (let y = this.props.dimensions[1] - 1; y >= 0; --y) {
      rows.push(this.renderRow(y));
    }
    return <table>{rows}</table>;
    
  }
}

export default Board;