"use strict";
var tracking = 0;
window.onload = ()=>{

    // Select New Game Button, set clicker to restart game.
    var n_Game = document.getElementsByClassName("btn")[0];
    n_Game.addEventListener("click", () => {
        window.location.reload();

    });

    // select statements for the board and inner div statements.
    var board= document.getElementById("board");

    //Loops through div elements, add square styling, hover and click functions to the board

    board.appendChild(document.createElement("div"));
    board.lastElementChild.style.display="none"
    for (let square of board.children) {

        square.classList.add('class','square');
        square.addEventListener("mouseover", function() {this.classList.add("hover");});
        square.addEventListener("mouseout", function() {this.classList.remove("hover");});
        square.setAttribute("onclick", clickSquare());
}
}



function clickSquare(){

     for (let square of board.children) {

        square.onclick = function(){
            // In this game, Player X always goes first
            if (tracking % 2 === 0 && square.innerHTML === "") {
                square.innerHTML = "X";
                square.classList.add("square", "X");
                WinCondition();
                tracking += 1;
            } else if (tracking % 2 === 1 && square.innerHTML === "") {
                square.innerHTML = "O";
                square.classList.add("square", "O");
                WinCondition();
                tracking += 1;
            }

}
 }
}

function WinMsg() {
    //Select game status
    let status = document.getElementById("status");
    let board = document.getElementById("board");


    if (tracking % 2 == 0) {
        status.innerHTML = "Congratulations! X is the Winner!";
        status.classList.add("status", "you-won");
        for (let square of board.children) {
            square.removeAttribute("onClick");


        }

    } else if (tracking % 2 == 1) {
        status.innerHTML = "Congratulations! O is the Winner!";
        status.classList.add("status", "you-won");
        for (let square of board.children) {
            square.removeAttribute("onClick");

        }
    }
}

function WinCondition(){
    let s = document.getElementById("board").children;
    if (s[0].innerHTML === s[1].innerHTML && s[0].innerHTML === s[2].innerHTML && s[1].innerHTML === s[2].innerHTML && s[0].innerHTML !== "" ) {
        WinMsg();
    }else if (s[3].innerHTML === s[4].innerHTML && s[3].innerHTML === s[5].innerHTML && s[4].innerHTML === s[5].innerHTML && s[3].innerHTML !== "" ) {
        WinMsg();
    }else if (s[6].innerHTML === s[7].innerHTML && s[6].innerHTML === s[8].innerHTML && s[7].innerHTML === s[8].innerHTML && s[6].innerHTML !== "" ) {
        WinMsg();
    }else if (s[0].innerHTML === s[4].innerHTML && s[0].innerHTML === s[8].innerHTML && s[4].innerHTML === s[8].innerHTML && s[0].innerHTML !== "" ) {
        WinMsg();
    }else if (s[2].innerHTML === s[4].innerHTML && s[2].innerHTML === s[6].innerHTML && s[4].innerHTML === s[6].innerHTML && s[2].innerHTML !== "" ) {
        WinMsg();
    }else if (s[0].innerHTML === s[3].innerHTML && s[0].innerHTML === s[6].innerHTML && s[3].innerHTML === s[6].innerHTML && s[0].innerHTML !== "" ) {
        WinMsg();
    }else if (s[1].innerHTML === s[4].innerHTML && s[1].innerHTML === s[7].innerHTML && s[4].innerHTML === s[7].innerHTML && s[1].innerHTML !== "" ) {
        WinMsg();
    }else if (s[2].innerHTML === s[5].innerHTML && s[2].innerHTML === s[8].innerHTML && s[5].innerHTML === s[8].innerHTML && s[2].innerHTML !== "" ) {
        WinMsg();
    }
}
