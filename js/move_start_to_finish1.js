/*
  INSTRUCTIONS
    - Write all of your code inside the `main` function below.
    - Use this file to build/test your programs.
    - To save your work, when you finish a challenge:
        - Make a copy of this file in this `js/` directory and name it e.g. `all-blue.js`
        - Clean out this `play.js` file so you can start fresh on a new challenge

  RESERVED WORDS (do not use as variable names)
      row, colors, kyrel, initial_state

  AVAILABLE METHODS
      moveRight(), moveLeft(),
      useGreen(), useBlue(), draw(), erase(),
      onGreen(), onBlue()

  You can also configure the initial state of the row using the following key:
    '.' => empty
    'b' => blue
    'g' => green
*/

var initial_state =  ['g', '.', '.', '.', '.'];

function main() {

  //////////////////////////////////
  ////                          ////
  //// v YOUR CODE BELOW HERE v ////
  ////                          ////
  //////////////////////////////////
  if (initial_state[0] === 'b') {
    erase();
    moveRight()+=4;
    draw();
  } else if (initial_state[0] === 'g') {
    erase();
    moveRight()+=4;
    useGreen();
    draw();
  } else {
    moveRight()+=5;
    
  }



  //////////////////////////////////
  ////                          ////
  //// ^ YOUR CODE ABOVE HERE ^ ////
  ////                          ////
  //////////////////////////////////

} // <--- be careful not to delete or comment-out this closing bracket!
