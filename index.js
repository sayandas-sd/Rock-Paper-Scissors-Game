let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
};
/*if(score === null){
    score = {
        win: 0,
        lose: 0,
        tie: 0
    };
}*/
updateElement();
//move calculate
function playerMove(playGame){
    const computerMove = pickComputerMove();
    let result = '';
    if(playGame === 'Scissors'){
        if(computerMove === 'Rock'){
            result = 'you win';
        }else if(computerMove === 'Paper'){
            result = 'you lose';
        }
        else{
            result = 'tie';
        }
    }
    else if(playGame === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'tie';
        }else if(computerMove === 'Paper'){
            result = 'you lose';
        }
        else{
            result = 'you win';
        }
    }
    else if(playGame === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'you lose';
        }else if(computerMove === 'Paper'){
            result = 'tie';
        }
        else{
            result = 'you win';
        }
    }
    //update value
    if(result === 'you win'){
        score.win += 1;
    }else if(result === 'you lose'){
        score.lose +=1;
    }else{
        score.tie += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    //update element in screen
        updateElement();
        
        document.querySelector('.js-result').innerHTML = `${result}`;

        document.querySelector('.js-move').innerHTML = `YOU
<img src="./images/${playGame}.PNG" alt="" class="icon">
<img src="./images/${computerMove}.PNG" alt="" class="icon">
COMPUTER`;

}
//update value in screen
function updateElement(){
    document.querySelector('.js-score').innerHTML = `win: ${score.win},lose: ${score.lose},tie: ${score.tie}`;
}
//computer mover
function pickComputerMove(){
    const randomNumber = Math.random(); 
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber <1/3){
        computerMove = 'Rock';
    }
    else if(randomNumber >= 1/3 && randomNumber <2/3){
        computerMove = 'Paper';    
    }
    else{
        computerMove = 'Scissors';
    }
        return computerMove;
    }