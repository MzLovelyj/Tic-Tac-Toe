$(document).ready(function() {

    var turn = "X";
    //Array stores values that will check later for a a winner
    //9 spots for the board.
    var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    var computersTurn = "O";
    //Keeps track if it is the CPU  turn
    var gameOn = false;

    //this keeps track of the CPU turn. No loop.
    var count = 0;
    var usercount = 0;


    //change players turn to X and CPU to O
    $('#turnX').click(function() {
        turn = "O";
        computersTurn = "X";
        $("#turnX").removeClass("btn-primary");
        $("#turnO").addClass("btn-primary");
        reset();
    });

    $('#turnO').click(function() {
        turn = "X";
        computersTurn = "O";
        $("#turnO").removeClass("btn-primary");
        $("#turnX").addClass("btn-primary");
        reset();
    });


    function computerTurn() {
      //this will break the while loop
        var taken = false;

        while (taken === false && count !== 5) {
            //computers turn

            var cMove = (Math.random() * 10).toFixed();
            //did *10 since 9 moves total
            //design of ai to defend
            //Make the chances
            // aiturn(turns,turn);
            if ((turns[0] == turn && turns[1] == turn && turns[2] == '#') || (turns[5] == turn && turns[8] == turn && turns[2] == '#') || (turns[4] == turn && turns[6] == turn && turns[2] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 2;

            } else if ((turns[1] == turn && turns[2] == turn && turns[0] == '#') || (turns[3] == turn && turns[6] == turn && turns[0] == '#') || (turns[4] == turn && turns[8] == turn && turns[0] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 0;

            } else if ((turns[3] == turn && turns[0] == turn && turns[6] == '#') || (turns[7] == turn && turns[8] == turn && turns[6] == '#') || (turns[4] == turn && turns[2] == turn && turns[6] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 6;

            } else if ((turns[2] == turn && turns[5] == turn && turns[8] == '#') || (turns[6] == turn && turns[7] == turn && turns[8] == '#') || (turns[0] == turn && turns[4] == turn && turns[8] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 8;

            } else if ((turns[0] == turn && turns[2] == turn && turns[1] == '#') || (turns[4] == turn && turns[7] == turn && turns[1] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 1;

            } else if ((turns[4] == turn && turns[5] == turn && turns[3] == '#') || (turns[0] == turn && turns[6] == turn && turns[3] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 3;

            } else if ((turns[1] == turn && turns[4] == turn && turns[7] == '#') || (turns[6] == turn && turns[8] == turn && turns[7] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 7;

            } else if ((turns[3] == turn && turns[4] == turn && turns[5] == '#') || (turns[2] == turn && turns[8] == turn && turns[5] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 5;

            } else if ((turns[0] == turn && turns[8] == turn && turns[4] == '#') || (turns[1] == turn && turns[7] == turn && turns[4] == '#') || (turns[2] == turn && turns[6] == turn && turns[4] == '#') || (turns[5] == turn && turns[3] == turn && turns[4] == '#') || (turns[8] == turn && turns[0] == turn && turns[4] == '#') || (turns[7] == turn && turns[1] == turn && turns[4] == '#') || (turns[6] == turn && turns[2] == turn && turns[4] == '#') || (turns[3] == turn && turns[5] == turn && turns[4] == '#') || (turns[0] == turn && turns[4] == '#') || (turns[1] == turn && turns[4] == '#') || (turns[2] == turn && turns[4] == '#') || (turns[3] == turn && turns[4] == '#') || (turns[5] == turn && turns[4] == '#') || (turns[6] == turn && turns[4] == '#') || (turns[7] == turn && turns[4] == '#') || (turns[8] == turn && turns[4] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 4;

            }




            //design of ai to defend ends
            //design of ai to win start------------------------------------------------------
            if ((turns[0] == computersTurn && turns[1] == computersTurn && turns[2] == '#') || (turns[5] == computersTurn && turns[8] == computersTurn && turns[2] == '#') || (turns[4] == computersTurn && turns[6] == computersTurn && turns[2] == '#')) {


                cMove = 2;

            } else if ((turns[1] == computersTurn && turns[2] == computersTurn && turns[0] == '#') || (turns[3] == computersTurn && turns[6] == computersTurn && turns[0] == '#') || (turns[4] == computersTurn && turns[8] == computersTurn && turns[0] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 0;

            } else if ((turns[3] == computersTurn && turns[0] == computersTurn && turns[6] == '#') || (turns[7] == computersTurn && turns[8] == computersTurn && turns[6] == '#') || (turns[4] == computersTurn && turns[2] == computersTurn && turns[6] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 6;

            } else if ((turns[2] == computersTurn && turns[5] == computersTurn && turns[8] == '#') || (turns[6] == computersTurn && turns[7] == computersTurn && turns[8] == '#') || (turns[0] == computersTurn && turns[4] == computersTurn && turns[8] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 8;

            } else if ((turns[0] == computersTurn && turns[2] == computersTurn && turns[1] == '#') || (turns[4] == computersTurn && turns[7] == computersTurn && turns[1] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 1;

            } else if ((turns[4] == computersTurn && turns[5] == computersTurn && turns[3] == '#') || (turns[0] == computersTurn && turns[6] == computersTurn && turns[3] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 3;

            } else if ((turns[1] == computersTurn && turns[4] == computersTurn && turns[7] == '#') || (turns[6] == computersTurn && turns[8] == computersTurn && turns[7] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 7;

            } else if ((turns[3] == computersTurn && turns[4] == computersTurn && turns[5] == '#') || (turns[2] == computersTurn && turns[8] == computersTurn && turns[5] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 5;

            } else if ((turns[0] == computersTurn && turns[8] == computersTurn && turns[4] == '#') || (turns[1] == computersTurn && turns[7] == computersTurn && turns[4] == '#') || (turns[2] == computersTurn && turns[6] == computersTurn && turns[4] == '#') || (turns[5] == computersTurn && turns[3] == computersTurn && turns[4] == '#') || (turns[8] == computersTurn && turns[0] == computersTurn && turns[4] == '#') || (turns[7] == computersTurn && turns[1] == computersTurn && turns[4] == '#') || (turns[6] == computersTurn && turns[2] == computersTurn && turns[4] == '#') || (turns[3] == computersTurn && turns[5] == computersTurn && turns[4] == '#') || (turns[0] == computersTurn && turns[4] == '#') || (turns[1] == computersTurn && turns[4] == '#') || (turns[2] == computersTurn && turns[4] == '#') || (turns[3] == computersTurn && turns[4] == '#') || (turns[5] == computersTurn && turns[4] == '#') || (turns[6] == computersTurn && turns[4] == '#') || (turns[7] == computersTurn && turns[4] == '#') || (turns[8] == computersTurn && turns[4] == '#')) {
                //  console.log("turns: "+turns[0]+"turn : "+turn+"-turns[2]: "+turns[2]);

                cMove = 4;

            }
            //design of ai to win end//

            var move = $("#" + cMove).text();
            if (move === "#") {
                $("#" + cMove).text(computersTurn);
                taken = true;
                turns[cMove] = computersTurn;
            }
        }
    }

    function playerTurn(turn, id) {
        var spotTaken = $("#" + id).text();
        if (spotTaken === "#") {
            count++;
            turns[id] = turn;
            $("#" + id).text(turn);


            winCondition(turns, turn);
            if (gameOn === false) {
                if (count == 5) {
                    alert("Hey its a TIE!");
                }

                computerTurn();
                winCondition(turns, computersTurn);
                console.log(count);
            }

        }
    }


    function winCondition(turnArray, currentTurn) {
        if (turnArray[0] == currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
            gameOn = true;
            console.log("turnArray: " + turnArray + " -currentTurn: " + currentTurn);
            reset();
            alert("Player" +" " + currentTurn + " " + "wins!");
        } else if (turnArray[3] == currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
            gameOn = true;
            reset();
            alert("Player" +" " + currentTurn + " " + "wins!");
        } else if (turnArray[6] == currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            reset();
            alert("Player" +" " + currentTurn + " " + "wins!");
        } else if (turnArray[1] == currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
            gameOn = true;
            reset();
            alert("Player" +" " + currentTurn + " " + "wins!");
        } else if (turnArray[2] == currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            reset();
            alert("Player" +" " + currentTurn + " " + "wins!");
        } else if (turnArray[0] == currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
            gameOn = true;
            reset();
            alert("Player" +" " + currentTurn + " " + "wins!");
        } else if (turnArray[2] == currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
            gameOn = true;
            reset();
            alert("Player" +" " + currentTurn + " " + "wins!");
        } else if (turnArray[0] == currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
            gameOn = true;
            reset();
            alert("Player" +" " + currentTurn + " " + "wins!");
        } else if (turnArray[2] == currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
            gameOn = true;
            reset();
            alert("Player" +" " + currentTurn + " " + "wins!");
        } else {
            gameOn = false;
        }
    }

    $(".tic").click(function() {
        var slot = $(this).attr('id');
        usercount = slot;
        playerTurn(turn, slot);
    });

//reset after win or lost
    function reset() {
        turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
        count = 0;
        $(".tic").text("#");
        gameOn = false;
    }

//Reset  button
      $('#startfirst').click(function(){
      reset();
        $('#result').hide();
    });

});
