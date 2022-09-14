// // playerChoices = []
// // computerChoices = []
// // Function that fires off when you click start or when the player
//  hits a right answer that simply randomly adds one of the four colors to 
//  the computerChoices
// // Then when the player clicks one of them, you just check if that
//  matches the computer's choice
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');
const computerChoices = [];
let playerChoices = [];
const counter = document.getElementById('counter')
const start = document.querySelector('.start')
let correctChoice;
const choices = [
    green, red, yellow, blue
];

start.addEventListener('click', (event) =>{
    play();
    let on = true;
});

function play () {
    win = false;
    flash = 0;
    intervalId = 0;
    turn = 1;
    counter.innerHTML= 1;
    correctChoice = true;
    for(i=0; i<10; i++){
        computerChoices.push(Math.floor(Math.random() *4) +1);
    }
    //console.log(computerChoices)
    computerTurn = true;
    intervalId = setInterval(gameTurn, 800);
}
function gameTurn(){
    on = false
    if(flash == turn){
        clearInterval(intervalId);
        computerTurn = false;
        resetLight();
        on = true;
    }
    if(computerTurn){
        resetLight();
            if(computerChoices[flash] ==1){
                green.classList.add('active')
            }
            if(computerChoices[flash] ==2){
                red.classList.add('active')
            }
            if(computerChoices[flash] ==3){
                yellow.classList.add('active')
            }
            if(computerChoices[flash] ==4){
                blue.classList.add('active')
            }
            flash++
            
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
    if(playerChoices.length ==10 && correctChoice){
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
        intervalId = setInterval(gameTurn, 800);
    }
}

green.addEventListener('click', () =>{
    if(on){
        playerChoices.push(1);
        checkAnswers();
    }
});

red.addEventListener('click', () =>{
    if(on){
    playerChoices.push(2);
    checkAnswers();
    }
});

yellow.addEventListener('click', () =>{
    if(on){
    playerChoices.push(3);
    checkAnswers();
    }
});

blue.addEventListener('click', () => {
    if(on){
    playerChoices.push(4);
    checkAnswers();
    }
});

function winGame(){
    counter.innerHTML = 'YOU WIN!'
    win = true;
} 
