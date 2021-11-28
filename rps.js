const options = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

result = document.querySelector('#result');
choices = document.querySelectorAll('button');
playerScoreText = document.querySelector('#playerscore');
computerScoreText = document.querySelector('#computerscore');
winnerText = document.querySelector('#winner');

choices.forEach(choice => {
	choice.addEventListener('click', function() {
		playerPlay = this.id;
		result.innerText = playRound(playerPlay, computerPlay());
		playerScoreText.innerText = playerScore;
		computerScoreText.innerText = computerScore;
		if (playerScore == 5 || computerScore == 5) {
			let winner = (playerScore > computerScore) ? "Player" : "Computer";
			winnerText.innerText = winner + " wins!";
			playerScore = 0;
			computerScore = 0;
		}
		else {
			winnerText.innerText = "";
		}
	});
});

function computerPlay() {
	return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
	for (let i = 0; i < options.length; i++) {
		if (playerSelection.toLowerCase() == options[i].toLowerCase()) {
			playerSelection = options[i];
			break;
		}
	}
	let result = options.indexOf(playerSelection) - options.indexOf(computerSelection)
	if (!result) {
		return `Tie! You both chose ${playerSelection}`;
	}
	else if (result == -1 || result == 2) {
		computerScore++;
		return `You Lose! ${computerSelection} beats ${playerSelection}`;
	}
	else {
		playerScore++;
		return `You Win! ${playerSelection} beats ${computerSelection}`;
	}
}

/*function game() {
	for (let i = 0; i < 5; i++) {
		let playerPlay = prompt("Choose Rock, Paper, or Scissors")
		console.log(playRound(playerPlay, computerPlay()))
	}
}*/