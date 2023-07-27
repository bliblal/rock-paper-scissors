let computer=0, player=0;

function getComputerChoice(){
    const choices=["Rock","Paper","Scissors"];
    let rand_index=Math.floor(Math.random() * (3 - 0) );
    return choices[rand_index];
    
}

function round(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();

    if (computerSelection===playerSelection){
        const rountext= 'Draw! Choose again';
        return rountext;
    }

    switch(playerSelection){
        case 'rock':
            if (computerSelection==='paper'){
                computer++;
                const rountext= 'Paper beats Rock, you Lose!';
                return rountext;
            }
            else if (computerSelection==='scissors'){
                player++;
                const rountext= 'Rock beats Scissors, you Win!';
                return rountext;
            }
            break;

        case 'paper':
            if (computerSelection==='rock'){
                player++;
                const rountext=  'Paper beats Rock, you Win!';
                return rountext;
            }
            else if (computerSelection==='scissors'){
                computer++;
                const rountext=  'Scissors beat Paper, you Lose!';
                return rountext;
            }
            break;

        case 'scissors':
            if (computerSelection==='paper'){
                player++;
                const rountext= 'Scissors beats Paper, you Win!';
                return rountext;
            }
            else if (computerSelection==='rock'){
                computer++;
                const rountext= 'Rock beats Scissors, you Lose!';
                return rountext;
            }

            break;
    }
}

function winner(computer, player){
    if(computer>=player){
        return 'Computer Wins!';
    }
    else if (computer<=player){
        return 'Player Wins!';
    }

    
}


function playRound(e){
    const playerSelection=e.target.classList[1];
    computerSelection=getComputerChoice();
    round_text=round(playerSelection,computerSelection);
    const roundscore=document.querySelector('.roundresults');
    const playerSelecDisplay=document.querySelector('.playerSelection');
    const computerSelecDisplay= document.querySelector('.computerSelection');
    playerSelecDisplay.textContent=`Player Choice: ${playerSelection}`;
    computerSelecDisplay.textContent=`Computer Choice: ${computerSelection}`;
    resultDisplay=document.querySelector('.resultsDisplay');
    resultDisplay.textContent=round_text;

    const playerScore=document.querySelector('.Player');
    playerScore.textContent=`Player: ${player}`;
    const computerScore=document.querySelector('.Computer');
    computerScore.textContent=`Computer: ${computer}`;
    if (computer>=5 || player>=5){
        winner=winner(computer,player);
        const game=document.querySelector('.game');
        game.classList.toggle('inactive');
        const winscreen=document.querySelector('.win');
        const wintext=document.querySelector('.wintext');
        wintext.textContent=`${winner}`;
        winscreen.classList.toggle('inactive');


    }    


}


const buttons= document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playRound) );
