var xTurn = true;
var computer = 'O'; // the computer is X
   var player = 'X'; // you are O
   var numMoves = 0;
   var gameOver = false;
function squareclicked(square)

{
    square.value = 'X';
}


//messages: status
function squareclicked(square) {

    if (gameOver) {
        alert('Excuse me The game is already over!');
        return;
    }
    var status = document.getElementById('status');
    var value = square.value;
    if (value != 'X' && value != 'O') {
        // turns
        if (xTurn) {
            numMoves++;
            square.value = 'X';
            xTurn = false;
            status.innerHTML = ' O \'s turn ';
        } else {
            numMoves++;
            square.value = 'O';
            xTurn = true;
            status.innerHTML = ' X \' s turn ';
        }
        var winner = checkWin();
        if (!winner) {
            //checking  for draw
            if (numMoves == 9) {
                status.innerHTML = 'Tie Game!';
            }
        } else
            gameOver = true;
    } else
        alert('That square has already been played.');
}
//checking squares
function checkWin() {
    var gameOver = false;
    var numMoves = 0;
    var status = document.getElementById('status');
    var val0;
    var val1;
    var val2;

    // check columns
    for (var y = 0; y < 3; y++) {
        val0 = document.getElementById('0_' + y).value;
        val1 = document.getElementById('1_' + y).value;
        val2 = document.getElementById('2_' + y).value;
        if (val0 == 'X' && val1 == 'X' && val2 == 'X') {
            status.innerHTML = 'X WINS!';
            return true;
        } else if (val0 == 'O' && val1 == 'O' && val2 == 'O') {
            status.innerHTML = 'O WINS!';
            return true;
        }
    }

    // check rows
    for (var x = 0; x < 3; x++) {
        val0 = document.getElementById(x + '_0').value;
        val1 = document.getElementById(x + '_1').value;
        val2 = document.getElementById(x + '_2').value;
        if (val0 == 'X' && val1 == 'X' && val2 == 'X') {
            status.innerHTML = 'X WINS!';
            return true;
        } else if (val0 == 'O' && val1 == 'O' && val2 == 'O') {
            status.innerHTML = 'O WINS!';
            return true;
        }
    }

    // check top left to lower right diagonal
    val0 = document.getElementById('0_0').value;
    val1 = document.getElementById('1_1').value;
    val2 = document.getElementById('2_2').value;
    if (val0 == 'X' && val1 == 'X' && val2 == 'X') {
        status.innerHTML = "X WINS!";
        return true;
    } else if (val0 == 'O' && val1 == 'O' && val2 == 'O') {
        status.innerHTML = "O WINS!";
        return true;
    }

    // check lower left to top right diagonal
    val0 = document.getElementById('0_2').value;
    val1 = document.getElementById('1_1').value;
    val2 = document.getElementById('2_0').value;
    if (val0 == 'X' && val1 == 'X' && val2 == 'X') {
        status.innerHTML = "X WINS!";
        return true;
    } else if (val0 == 'O' && val1 == 'O' && val2 == 'O')
    {
        status.innerHTML = "O WINS!";
        return true;
    }

}


// New Game
function newgame() {
    numMoves = 0;
    gameOver = false;
    var status = document.getElementById('status');

    xTurn = true;
    status.innerHTML = 'X\'s turn';

    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            document.getElementById(x + '_' + y).value = ' ';
        }
    }
}
