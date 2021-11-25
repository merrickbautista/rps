const options = ["Rock", "Paper", "Scissors"]

function computerPlay() {
	return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
	for (let i = 0; i < options.length; i++) {
		if (playerSelection.toLowerCase() == options[i].toLowerCase()) {
			playerSelection = options[i]
			break
		}
	}
	let result = options.indexOf(playerSelection) - options.indexOf(computerSelection)
	if (!result) {
		return `Tie! You both chose ${playerSelection}`
	}
	else if (result == -1 || result == 2) {
		return `You Lose! ${computerSelection} beats ${playerSelection}`
	}
	else {
		return `You Win! ${playerSelection} beats ${computerSelection}`
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		let playerPlay = prompt("Choose Rock, Paper, or Scissors")
		console.log(playRound(playerPlay, computerPlay()))
	}
}

game()