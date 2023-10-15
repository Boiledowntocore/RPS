




    function getRandomChoice(options) {
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    }
    
    const choices = ["Rock", "Paper", "Scissor"];
    const computerSelection = getRandomChoice(choices); // Replace with computer's choice (use your logic to generate this)
     const playerSelection = "Paper"; // Replace with the user's input

        
 
        function playRound(playerSelection, computerSelection) {
            if (playerSelection === "Rock" && computerSelection === "Paper") {
                return "You Lose! Paper beats Rock";
            } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
                return "You Win! Rock beats Scissor";
            } else if (playerSelection === "Rock" && computerSelection === "Rock") {
                return "NOBODY WINS";
            } else if (playerSelection === "Paper" && computerSelection === "Rock") {
                return "You Win! Paper beats Rock";
            } else if (playerSelection === "Paper" && computerSelection === "Paper") {
                return "Nobody Wins";
            } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
                return "You lose! Scissor cuts the Paper";
            } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
                return "You Lose! Rock beats Scissor";
            } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
                return "You Win!";
            } else if (playerSelection === "Scissor" && computerSelection === "Scissor") {
                return "Nobody Wins";
            }
        }      
        console.log(playRound(playerSelection, computerSelection));