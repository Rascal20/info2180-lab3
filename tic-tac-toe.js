"use strict";

window.onload = function(){
	
	/*loads squares into div containers*/
	const board = document.getElementById('board').childNodes;
	board.forEach(block => {block.className = "square";});
	
	/*array to save state of the game*/
	const gameState = ["","","","","","","","",""];
	console.log("Here");
}