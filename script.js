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
        return 'Draw! Choose again';
    }

    switch(playerSelection){
        case 'rock':
            if (computerSelection==='paper'){
                computer++;
                return 'paper beats rock, you lose!';
            }
            else if (computerSelection==='scissors'){
                player++;
                return 'rock beats scissors, you win!';
            }
            break;

        case 'paper':
            if (computerSelection==='rock'){
                player++;
                return 'paper beats rock, you win!';
            }
            else if (computerSelection==='scissors'){
                computer++;
                return 'scissors beat paper, you lose!';
            }
            break;

        case 'scissors':
            if (computerSelection==='paper'){
                player++;
                return 'scissors beats paper, you win!';
            }
            else if (computerSelection==='rock'){
                computer++;
                return 'rock beats scissors, you lose!';
            }

            break;
    }
}

function winner(computer, player){
    if(computer>=player){
        return 'computer wins';
    }

    else if (computer<=player){
        return 'player wins';
    }

    else return 'draw!!';
}

function game(){
    for(count =1; count<=5; count++){
        console.log('--------------------------------');
        console.log(`turn:${count}`);
        playerSelection=prompt('enter your choice');
        computerSelection=getComputerChoice();
        console.log(`you picked: ${playerSelection}`);
        console.log(`computer picked: ${computerSelection}`);
        console.log(round(playerSelection,computerSelection));
    }

    

    console.log(`final score:\n computer:${computer} player:${player}\n winner:${winner(computer, player)}`)

}

game();