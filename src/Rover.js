import React, { Component } from "react";

import "./Rover.css";

import Board from "./Board";
import Button from "./Button";

const roverTurnOptions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

function calculateMove(move, bordDim) {
  return ((move % bordDim) + bordDim) % bordDim;
}


class Rover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputString: "",
      history: [
        {
          move: null,
          position: props.start,
          direction: 0
        },
      ],
      obstacle: [],
      point1: [],
      stepNumber: 0
    };
  }

  queueMove(i) {
    this.setState({
      inputString: this.state.inputString.concat(i)
    });
  }

  checkForMove() {
    return this.state.history.length <= this.state.inputString.length;
  }

  executeNextMove() {
    if (this.checkForMove()) {
      this.move(this.state.inputString[this.state.stepNumber++]);
    } else {
      clearInterval(this.state.intervalId);
    }
  }
  point1() {
    let input = document.getElementById("123");
    // console.log([input.value.split(" ")[0], input.value.split(" ")[1]]);

    if ((this.state.history[0].position[0] != input.value.split(" ")[0]) || (this.state.history[0].position[1] != input.value.split(" ")[1])) {
      this.setState({
        point1: [...this.state.obstacle, [parseInt(input.value.split(" ")[0]), parseInt(input.value.split(" ")[1])]],
      })
    }
  }

  search() {
    let history = this.state.history;
    let currentState = history[history.length - 1];

    var moveDir = [1, 1]
    let pos
    var props = this.props;
    pos = currentState.position.map(function (p, idx) {
      return calculateMove(
        p + roverTurnOptions[currentState.direction][idx] * moveDir[idx],
        props.dimensions[idx]
      );
    });
    let once = true
    let dir=(this.state.position=[0,7]);
    if(pos[0]!=dir[0] || pos[1]!= dir[1]){
      if(this.state.point1.some((i) => i[0] === pos[0] && i[1] === pos[1])){
        this.setState({
          history: [{ move: "F", position: currentState.position, direction: currentState.direction }]
        });
      }else{
        this.setState({
          history: [{ move: "R", position: pos, direction: currentState.direction }]
        });
      }
      }
      else if(dir[1] == 7 && once){
        once = false
        if(this.state.point1.some((i) => i[0] === pos[0] && i[1] === pos[1])){
          this.setState({
            history: [{ move: "F", position: currentState.position, direction: currentState.direction }]
          });
        }else{
          this.setState({
            history: [{ move: "R", position: pos, direction: currentState.direction }]
          });
        }
      }
      else if(pos[0] === dir[0] && pos[1] === dir[1]){
        let newDirection = calculateMove(
          currentState.direction + (moveDir=== "R" ? -1 : 1),
          4
        );
        this.setState({
          history:[{move:"F",position: currentState.position,direction: newDirection}]
        });
      }
      
      


  }

// while(this.state.point1[0] !== pos[0]){
//       if(this.state.point1.some((i) => i[0] === pos[0] && i[1] === pos[1])){
//         this.setState({
//           history: [{ move: "F", position: currentState.position, direction: currentState.direction }]
//         });
//       }
//       else
//       this.setState({
//         history: [{ move: "F", position: pos, direction: currentState.direction }]
//       }
//       );
//       //pos=this.state.history[0].position;
//   }

      // if(this.state.point1[0] === pos[0] && this.state.point1[1] === pos[1]){
      //   this.setState({
      //     history: [{ move: "F", position: currentState.position, direction: currentState.direction }]
      //   });
      // }
      // else {

      // pos =currentState.position.map(function (p, idx) {
      //   return calculateMove(
      //     p + roverTurnOptions[currentState.direction][idx] * moveDir[idx],
      //     props.dimensions[idx]
      //   );
      // });
       





        // if(this.state.point1.some((i) => i[0] === pos[0] && i[1] === pos[1])){
        //   this.setState({
        //       history: [{ move: "F", position: currentState.position, direction: currentState.direction }]
        //   })
        // }else{
        //   this.setState({
        //       history: [{ move: "F", position: [0, 1], direction: currentState.direction }]
        //   })
        //   if(this.state.point1.some((i) => i[0] === position[0, 2] )){
        //     this.setState({
        //         history: [{ move: "F", position: [0, 1], direction: currentState.direction }]
        //     })
        //   }
        //   else{
        //     this.setState({
        //         history: [{ move: "F", position: [0, 2], direction: currentState.direction }]
        //     })
        //     }
        //    }
        


  //   let count =0
    
  //   while(this.state.point1[0] !== pos[0] && this.state.point1[1] !== pos[1]) {
  //     if(this.state.point1[0] === pos[0] && this.state.point1[1] === pos[1]){
  //       this.setState({
  //         history: [{ move: "F", position: currentState.position, direction: currentState.direction }]
  //       });
  //     }
  //     else {
  //       console.log([{ move: "F", position: [0, 1 + (count)], direction: currentState.direction }])
  //       this.setState({
  //         history: [{ move: "F", position: [0, 1 +pos[0]], direction: currentState.direction }]
  //       });
        

  //       //pos=this.state.history[0].position;
  //       count ++
  //       pos[0]=count;
  //     if(count >= 5)  
  //       break
  //   }  
    
  // };

    // let count = 0
    // while (this.state.point1.some((i) => i[1] != pos[1])) {
    //   console.log("test search", this.state.point1 , " <<<<< ",this.state.point1.some((i) => i[1] != pos[1]))
    //   //   this.setState({
    //   //   history: [{move:"F", position : pos , direction: currentState.direction}]
    //   // });   
    //   console.log(this.state.point1.some((i) => i[0] === pos[0] && i[1] === pos[1]))
    //   if (this.state.point1.some((i) => i[0] === pos[0] && i[1] === pos[1])) {
    //     this.setState({
    //       history: [{ move: "F", position: currentState.position, direction: currentState.direction }]
    //     });

    //   } else {
    //     console.log([{ move: "F", position: [0, 1 + (count / 2)], direction: currentState.direction }])
    //     this.setState({
    //       history: [{ move: "F", position: [0, 1 + count], direction: currentState.direction }]
    //     });
    //     count++
    //     history = this.state.history;
    //     currentState = history[history.length - 1];
    //     pos = currentState.position.map(function (p, idx) {
    //       return calculateMove(
    //         p + roverTurnOptions[currentState.direction][idx] * moveDir[idx],
    //         props.dimensions[idx]
    //       );
    //     });
    //     // this.setState({
    //     //   history: [{ move: "F", position: pos, direction: currentState.direction }]
    //     // })
    //     if (count > 5)
    //       break

    //   }
    // }



    // const history = this.state.history;
    // const currentState = history[history.length - 1];
    // var moveDir = [1, 1] ;
    // var props = this.props;
    // const pos = currentState.position.map(function(p, idx) {
    //   return calculateMove(
    //     p + roverTurnOptions[currentState.direction][idx] * moveDir[idx],
    //     props.dimensions[idx]
    //   );
    // });
    // this.setState({
    //   history: history.concat([
    //     {
    //       move: move,
    //       position: pos,
    //       direction: currentState.direction
    //     }
    //   ])
    // });

  obstacle() {
    let input = document.getElementById("234");
    // console.log([input.value.split(" ")[0], input.value.split(" ")[1]]); 
    // console.log(x,y)
    // console.log(this.state)
    if ((this.state.history[0].position[0] != input.value.split(" ")[0]) || (this.state.history[0].position[1] != input.value.split(" ")[1])) {
      this.setState({
        obstacle: [...this.state.obstacle, [parseInt(input.value.split(" ")[0]), parseInt(input.value.split(" ")[1])]],
      })
    }

    // this.setState({
    //   obstacle: [ ...this.state.obstacle, [parseInt(input.value.split(" ")[0]), parseInt(input.value.split(" ")[1])]],
    // })
  }
  readmessage(message) {
    return console.log(message);
  }

  move(move) {
    const history = this.state.history;
    const currentState = history[history.length - 1];

    if (move === "F" || move === "B") {
      var moveDir = move === "F" ? [1, 1] : [-1, -1];

      var props = this.props;

      const pos = currentState.position.map(function (p, idx) {
        return calculateMove(
          p + roverTurnOptions[currentState.direction][idx] * moveDir[idx],
          props.dimensions[idx]
        );
      });

      if (this.state.obstacle.some((i) => i[0] === pos[0] && i[1] === pos[1])) {
        this.setState({
          history: history.concat([
            {
              move: move,
              position: currentState.position,
              direction: currentState.direction
            }
          ])
        });
      }
      else if (this.state.point1.some((i) => i[0] === pos[0] && i[1] === pos[1])) {
        this.setState({
          history: history.concat([
            {
              move: move,
              position: currentState.position,
              direction: currentState.direction
            }
          ])
        });
      }
      else {
        this.setState({
          history: history.concat([
            {
              move: move,
              position: pos,
              direction: currentState.direction
            }
          ])
        });
      }
    }
    else if (move === "L" || move === "R") {
      let newDirection = calculateMove(
        currentState.direction + (move === "R" ? 1 : -1),
        4
      );
      this.setState({
        history: history.concat([
          {
            move: move,
            position: currentState.position,
            direction: newDirection
          }
        ])
      });
    }
  }


  goto(step) {
    this.setState({
      stepNumber: step
    });
  }


  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    return (
      <div className="rover">
        <div className="container">
          <div className="header">
            <h1>MrRover</h1>
          </div>
          <div className="board">

            <Board
              obstacle={this.state.obstacle}
              point1={this.state.point1}
              dimensions={this.props.dimensions}
              position={current.position}
              direction={current.direction}
            />
            <div className="board-1">
              <br></br>
              <div>{this.readmessage}</div>
              <label className="label">pleace enter the cordinte of obstacle(x,y)</label>
              <br></br>

              <input type="text" id="234" />
              <button onClick={() => this.obstacle()}>
                add obstacle
              </button>
            </div>
            <div className="board-1">
              <br></br>
              <label className="label">pleace enter the cordinte of mark(x,y)</label>
              <br></br>
              <input type="text" id="123" />
              <button
                onClick={() => this.point1()}>
                add point
              </button>
            </div>
            <div className="board-1">
              <button
                className="input"
                // disabled={!this.checkForMove()}
                onClick={() => this.search("f")}>
                Search
              </button>
            </div>
          </div>
          <div className="controls">
            <br></br>
            {<div>Commands: {this.state.inputString}</div>}
            <br></br>

            <Button action="L" onClick={i => this.queueMove(i)} />
            <Button action="R" onClick={i => this.queueMove(i)} />
            <Button action="F" onClick={i => this.queueMove(i)} />
            <Button action="B" onClick={i => this.queueMove(i)} />

            <Button
              action="RUN"
              disabled={!this.checkForMove()}
              onClick={() => this.executeNextMove()}
            />
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Rover;