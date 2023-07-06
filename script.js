// Variable Declaration
let inputPlayerName1 = prompt("Enter the first player's name");
let inputPlayerName2 = prompt("Enter the second player's name");
const playerName1 = document.querySelector('.dice--1 h2');
const playerName2 = document.querySelector('.dice--2 h2');
const diceImage1 = document.querySelector('.dice--1 img');
const diceImage2 = document.querySelector('.dice--2 img');
const winner = document.querySelector('main p');

// Change player name
if (inputPlayerName1 !== '') {
	playerName1.innerHTML = inputPlayerName1;
}

if (inputPlayerName2 !== '') {
	playerName2.innerHTML = inputPlayerName2;
}

if (
	inputPlayerName1 === '' ||
	inputPlayerName1 === null ||
	inputPlayerName2 === '' ||
	inputPlayerName2 === null
) {
	playerName1.innerHTML = 'Player 1';
	playerName2.innerHTML = 'Player 2';
}

// Dice roll
function rollDice() {
	// Variable declaration
	let randomNumber1 = Math.floor(Math.random() * 6 + 1);
	let randomNumber2 = Math.floor(Math.random() * 6 + 1);
	let diceImageUpdate1 = 'images/dice' + randomNumber1 + '.png';
	let diceImageUpdate2 = 'images/dice' + randomNumber2 + '.png';

	// Update dice image	
	diceImage1.setAttribute('src', diceImageUpdate1);
	diceImage2.setAttribute('src', diceImageUpdate2);

	// Winner of the game
	if (randomNumber1 > randomNumber2) {
		winner.innerHTML =
			'<strong>The winner is:</strong><br>' + playerName1.textContent;
	} else if (randomNumber1 < randomNumber2) {
		winner.innerHTML =
			'<strong>The winner is:</strong><br>' + playerName2.textContent;
	} else {
		winner.innerHTML = '<strong>The result is a draw</strong>';
	}
}

function newGame() {
    location.reload();
}