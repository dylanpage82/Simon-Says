const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const computerChoices = [];
let playerChoices = [];
const counter = document.getElementById('counter')
const start = document.querySelector('.start');
let correctChoice = true;///determines if the players choice = computers choice
const level = document.querySelector('.level');
const modal = document.getElementById('modal');
const beginnerButton = document.querySelector('.beginner');
const intermediateButton = document.querySelector('.intermediate');
const hardButton = document.querySelector('.hard');
let beginner = false;
let intermediate = false;
let hard = false;
let rank = false;
let win = false;
let computerPlays;///number of times the computer turn has ran



function play () {
    computerPlays = 0;
    intervalId = 0;
    turn = 1;
    // counter.innerHTML= 1;
    for(i=0; i<=20; i++){
        computerChoices.push(Math.ceil(Math.random() *4));
    }
    computerTurn = true;
    intervalId=setInterval(gameTurn, 1000)
}
function gameTurn(){
    if(computerPlays == turn){
        clearInterval(intervalId);
        computerTurn = false;
        resetLight();
    }
    if(computerTurn){
        resetLight();
        setTimeout(() => {
            if(computerChoices[computerPlays] ==1){
                green.classList.add('active')
            }
            if(computerChoices[computerPlays] ==2){
                red.classList.add('active')
            }
            if(computerChoices[computerPlays] ==3){
                yellow.classList.add('active')
            }
            if(computerChoices[computerPlays] ==4){
                blue.classList.add('active')
            }
            computerPlays++
        }, 300);
        }
    }
function resetLight(){
    green.classList.remove('active');
    red.classList.remove('active');
    yellow.classList.remove('active');
    blue.classList.remove('active');
    
}
function checkAnswers(){
    if(playerChoices[playerChoices.length -1] !== computerChoices[playerChoices.length -1]){
        correctChoice = false;
    }
    if(beginner === true &&  playerChoices.length ==5 && correctChoice){
        winGame()
    }else if(intermediate === true &&  playerChoices.length ==10 && correctChoice){
       winGame()
    }else if(hard === true &&  playerChoices.length ==20 && correctChoice){
        winGame()
    }
    if(correctChoice == false){
        counter.innerHTML = "YOU LOOSE!";
        setTimeout(() =>{
            location.reload();
        }, 3000);
        
    }
    if(turn == playerChoices.length && correctChoice && !win){
        turn++
        playerChoices = [];
        computerTurn = true;
        flash = 0;
        counter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 1000);
    }
}
function openModal(){
    modal.classList.add('open')
}
function closeModal(){
    modal.classList.remove('open')
}



level.addEventListener('click', () =>{
    openModal();
    
})

beginnerButton.addEventListener('click', () =>{
    beginner = true;
    rank = true;
    closeModal();
})

intermediateButton.addEventListener('click', () =>{
    intermediate = true;
    rank = true;
     closeModal();
})

hardButton.addEventListener('click', () =>{
    hard = true;
    rank = true;
    closeModal();
})

green.addEventListener('click', () =>{
    if(computerTurn === true){
        return;
    }else{
        playerChoices.push(1);
        checkAnswers();
    }
});

red.addEventListener('click', () =>{
    if(computerTurn === true){
        return;
    }else{
    playerChoices.push(2);
    checkAnswers();
    }
});

yellow.addEventListener('click', () =>{
    if(computerTurn ===true){
        return;
    }else{
    playerChoices.push(3);
    checkAnswers();
    }
});

blue.addEventListener('click', () => {
    if(computerTurn ===true){
        return;
    }else{
    playerChoices.push(4);
    checkAnswers();
    }
});

start.addEventListener('click', () =>{
    if(rank != true){
        alert('Please Select a level');
    }else if(rank === true){
    play();
    }
});


function winGame(){
    counter.innerHTML = 'YOU WIN!'
    win = true;
}
