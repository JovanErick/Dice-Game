let inputPlayerName1 = prompt("Enter the first player's name");
let inputPlayerName2 = prompt("Enter the second player's name");
const playerName1 = document.querySelector('.dice--1 h2');
const playerName2 = document.querySelector('.dice--2 h2');
const diceImage1 = document.querySelector('.dice--1 img');
const diceImage2 = document.querySelector('.dice--2 img');
const winner = document.querySelector('main p');

if (inputPlayerName1 !== '') {
	playerName1.innerHTML = inputPlayerName1;
}

if (inputPlayerName2 !== '') {
	playerName2.innerHTML = inputPlayerName2;
}

if (inputPlayerName1 === '' || inputPlayerName1 === null) {
	playerName1.innerHTML = 'Player 1';
	playerName2.innerHTML = 'Player 2';
}

if (inputPlayerName2 === '' || inputPlayerName2 === null) {
	playerName1.innerHTML = 'Player 1';
	playerName2.innerHTML = 'Player 2';
}

function rollDice() {
	let randomNumber1 = Math.floor(Math.random() * 6 + 1);
	let randomNumber2 = Math.floor(Math.random() * 6 + 1);

	if (randomNumber1 === 1) {
		diceImage1.setAttribute('src', 'images/dice1.png');
	}
	if (randomNumber1 === 2) {
		diceImage1.setAttribute('src', 'images/dice2.png');
	}
	if (randomNumber1 === 3) {
		diceImage1.setAttribute('src', 'images/dice3.png');
	}
	if (randomNumber1 === 4) {
		diceImage1.setAttribute('src', 'images/dice4.png');
	}
	if (randomNumber1 === 5) {
		diceImage1.setAttribute('src', 'images/dice5.png');
	}
	if (randomNumber1 === 6) {
		diceImage1.setAttribute('src', 'images/dice6.png');
	}

	if (randomNumber2 === 1) {
		diceImage2.setAttribute('src', 'images/dice1.png');
	}
	if (randomNumber2 === 2) {
		diceImage2.setAttribute('src', 'images/dice2.png');
	}
	if (randomNumber2 === 3) {
		diceImage2.setAttribute('src', 'images/dice3.png');
	}
	if (randomNumber2 === 4) {
		diceImage2.setAttribute('src', 'images/dice4.png');
	}
	if (randomNumber2 === 5) {
		diceImage2.setAttribute('src', 'images/dice5.png');
	}
	if (randomNumber2 === 6) {
		diceImage2.setAttribute('src', 'images/dice6.png');
	}

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
