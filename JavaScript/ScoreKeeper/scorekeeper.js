var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var reset = document.querySelector("#reset");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var playUntil = document.querySelector("#playTil");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;
var winningScore = 5;

var gameInput = document.querySelector("input");

player1.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			gameOver = true;
			p1Display.classList.add("winner");
		}
		p1Display.textContent = p1Score;
	}
});

player2.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
			p2Display.classList.add("winner");
		}
		p2Display.textContent = p2Score;
	}
});

reset.addEventListener("click",function(){
	resetFunc();
});

function resetFunc(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	gameOver = !gameOver;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

gameInput.addEventListener("change",function(){
	playUntil.textContent = this.value;
	winningScore = Number(this.value);
	resetFunc();
});

