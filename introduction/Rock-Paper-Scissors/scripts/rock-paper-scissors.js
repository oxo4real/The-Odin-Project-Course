document.addEventListener("DOMContentLoaded", function() {
	const choices = ["rock", "paper", "scissors"];

	let humanScore = 0;
	let computerScore = 0;

	function getComputerChoice() {
		let choice_index = Math.floor(Math.random() * 3);
		return (choices[choice_index]);
	}

	function getHumanChoice() {
		let choice = String(prompt("What will you play?").toLowerCase());
		if (!choices.includes(choice)) {
			do {
				choice = String(prompt("Please enter a valid move (either Rock or Paper or Scissors)").toLowerCase());
			}
			while (!choices.includes(choice));
		}
		return (choice);
	}

	let header = document.querySelector("#header");
	let robotchoice = document.querySelector("#robotchoice");
	let humanchoice = document.querySelector("#humanchoice");

	function playRound(hchoice, rchoice) {
		const hc_index = choices.indexOf(hchoice);
		const cc_index = choices.indexOf(rchoice);

		if (hc_index === 0 && cc_index === 2) {
			humanScore += 1;
			header.innerHTML = "You Win!";
		} else if (cc_index === 0 && hc_index === 2) {
			computerScore += 1;
			header.innerHTML = "You Lose";
		} else if (hc_index > cc_index) {
			humanScore += 1;
			header.innerHTML = "You Win!";
		} else if (hc_index < cc_index) {
			computerScore += 1;
			header.innerHTML = "You Lose";
		} else {
			header.innerHTML = "Tie!";
		}

		if (rchoice == "rock") {
			robotchoice.innerHTML ='<i class="fa-regular fa-hand-back-fist"></i>';
		} else if (rchoice == "paper") {
			robotchoice.innerHTML = '<i class="fa-regular fa-hand"></i>';
		} else {
			robotchoice.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
		}

		if (hchoice == "rock") {
			humanchoice.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
		} else if (hchoice == "paper") {
			humanchoice.innerHTML = '<i class="fa-regular fa-hand"></i>';
		} else {
			humanchoice.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
		}

		let choicess = document.querySelector("#choices");
		choicess.innerHTML = '<button id="replay" onclick="location.reload()">Replay</button>';
	}

	let rock = document.querySelector("#rock");
	let paper = document.querySelector("#paper");
	let scissors = document.querySelector("#scissors");

	rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
	paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
	scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
})
