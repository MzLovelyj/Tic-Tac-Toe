////// Varriables ///////
var human = "X";
var comp = "O";
var winner = false;
var moveCount = 0;


////// Checking Moves ////////
function checkChoice() {
  if(human == "O")

  {
    comp= "O";
    compMove();

    return false;
  } else if (human == "X")
  {
    return true;
  }
}

checkChoice();



// //// Once a user has won this will clear the Board. /////
function clearBoard() {
  for(var i = 1; i < 10; i++) {
    document.getElementById(i).innerHTML = "";
    moveCount = 0;
    winner = true;
  }
  if(comp == "X")
  {
    compMove();
  }
}

/////// Possible wins on the board-table /////////
function checkWin(table) {
  var winComb = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                 [3, 6, 9], [2, 5, 8], [1, 4, 7],
                 [1, 5, 9], [3, 5, 7]];

  function lookAt(square) {
    if(document.getElementById(square[0]).innerHTML == table &&
       document.getElementById(square[1]).innerHTML == table &&
       document.getElementById(square[2]).innerHTML == table)
    {
      return true;
    } else {

      return false;
    }

  }

  for(var i = 0; i < winComb.length; i++)
  {
    if (lookAt(winComb[i]) !== false)
    {
      winner = true;
      alert("Hey we got a winner!! The winner is" + " " + table);
      clearBoard();
    }
  }

}

//////////Checking for Draw//////
function checkDraw() {
  var count = 9;

  for (var i = 1; i < 10; i++)
  {
    if (document.getElementById(i).innerHTML !== "")
    {
      count -= 1;
    }

    if (count === 0 && winner === false)
    {
      alert("It's a draw!");
      clearBoard();
    }
  }

}

////////// AI Moves //////////
function compMove() {
  var move = Math.round(Math.random() * (9 - 1) + 1);
  var max = 5;

  if(comp == "O")
  

  {
    max = 4;
  }

  do {
    move = Math.round(Math.random() * (9 - 1) + 1);
  } while (((document.getElementById(move).innerHTML == "O") ||
           (document.getElementById(move).innerHTML == "X")) && moveCount < max);

           if(moveCount < max)

           {
             document.getElementById(move).innerHTML = comp;
           }

  moveCount += 1;

}

///// function to notify user that the box is already in use. //////
function square(id) {
  if(document.getElementById(id).innerHTML == "X" || document.getElementById(id).innerHTML == "O")
  {
    alert("That square has been taken.");
  } else {
    document.getElementById(id).innerHTML = human;
    compMove();
  }
  checkWin("O");
  checkWin("X");
  checkDraw();
}
