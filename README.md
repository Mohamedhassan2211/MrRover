##Mars Rover

Problem Description
You are part of the team that explores Mars by sending remotely controlled vehicles to the surface of
the planet. Develop an API that translates the commands sent from earth to instructions that are
understood by the rover.
mien the rover touches down on Mars, it is initialised with it's current coordinates and the direction
it is facing. These could be any coordinates, supplied as arguments (x, y, direction) e.g. (4,
2, EAST).
Approach
You should tackle this problem as you would any real world requirement that would be shipped as
part of a real product. You should showcase how you work and the way you decompose a problem
into smaller pieces.
###Part I
The rover is given a command string which contains multiple commands. This string must then be
broken into each individual command and that command then executed. The valid commands are:
``` 
F -> Move forward on current heading 
B -> Move Backwards on current heading
L -> Rotate Ey SO degrees
R -> Rotate right By SO degrees
```
* An example command might be ELFFFRFLE
* Once the full command string has been followed, the rover reports it's current coordinates
and heading in the format (6, 4) NORTH
* As Mars is a globe, there is no Edge of the world' to fall off, negative coordinates are valid.

###solution: 1

The Rover moves in all directions on the x and y axes, whatever movement the user wants, whether it is forward, backward, right, or left.

<img src="src\img\rovers\Screenshot 2023-09-17 153420.png">

###Part II
Previous missions have had to be aborted due to obstacles that caused damage to the rover. Given a
set of coordinates for all the known obstacles in the format:
[3, 51,
mien the rover would enter a coordinate '.sith an obstacle, instead stop at the coordinate
immediately before and report position, heading and Stopped due to collision, e.g. ( 3, 4) WEST
STOPPED

###solution: 2
When the vehicle encounters any obstacle, it searches for any other path and cannot pass through the obstacle
<img src="src\img\rovers\Screenshot 2023-09-17 155012.png">

###Part III
Given the rover's current position and heading, plus the knoml obstacles, calculate a command
string for the rover that will safely move it to a given coordinate avoiding all obstacles.

###Solution: 3

The desired coordinate point is reached and the path is determined
<img src="src\img\rovers\Screenshot 2023-09-20 114943.png">

the link to run project is 
<a herf="">


