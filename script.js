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
const start = document.querySelector('.start');
let correctChoice;
const level = document.querySelector('.level');
const modal = document.getElementById('modal');
const beginnerButton = document.querySelector('.beginner');
const intermediateButton = document.querySelector('.intermediate');
const hardButton = document.querySelector('.hard');
let beginner = false;
let intermediate = false;
let hard = false;

// const choices = [
//     green, red, yellow, blue
// ];

start.addEventListener('click', () =>{
    play();
    
});

function play () {
    win = false;
    flash = 0;
    intervalId = 0;
    turn = 1;
    counter.innerHTML= 1;
    correctChoice = true;
    for(i=0; i<20; i++){
        computerChoices.push(Math.ceil(Math.random() *4));
    }
    //console.log(computerChoices)
    computerTurn = true;
    intervalId = setInterval(gameTurn, 1000);
}
function gameTurn(){
    if(flash == turn){
        clearInterval(intervalId);
        computerTurn = false;
        resetLight();
    }
    // if(beginnerButton.clicked = true){
    //     beginner = true;
    // }else if(intermediateButton.clicked = true){
    //     intermediate = true;
    // }
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
    // if(beginner = true &&  playerChoices.length ==5 && correctChoice){
    //     winGame()
    // }else if(intermediate = true &&  playerChoices.length ==10 && correctChoice){
    //    winGame()
    // }else if(hard = true &&  playerChoices.length ==20 && correctChoice){
    //     winGame()
    // }
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
    console.log('beginner button')
    beginner = true;
    closeModal();
})

intermediateButton.addEventListener('click', () =>{
    intermediate = true;
    closeModal();
})

hardButton.addEventListener('click', () =>{
    hard = true;
    closeModal();
})

green.addEventListener('click', () =>{
        playerChoices.push(1);
        checkAnswers();
    
});

red.addEventListener('click', () =>{
    playerChoices.push(2);
    checkAnswers();
    
});

yellow.addEventListener('click', () =>{
    playerChoices.push(3);
    checkAnswers();
    
});

blue.addEventListener('click', () => {
    playerChoices.push(4);
    checkAnswers();
    
});



function winGame(){
    counter.innerHTML = 'YOU WIN!'
    win = true;
}
