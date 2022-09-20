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
let computerTurn=true;
const intermediateButton = document.querySelector('.intermediate');
const hardButton = document.querySelector('.hard');
let beginner = false;
let intermediate = false;
let hard = false;
let rank = false;///level selected (can be any level just a indicator)
let win = false;
let computerPlays = 0;//computer choices array index indicator since i resets
let playerTurn = 1;
let intervalEl = 0;//have to set interval to something so it can be cleared





//iterates a array of 20 numbers and sets game speed
const play = () => {
    
     for(i=0; i<=20; i++){
          computerChoices.push(Math.ceil(Math.random() *4));
     }
    
        intervalEl=setInterval(gameRound, 800)
}
//Determines whose turn it is, if computers turn sets the index of the array to display a certian style
const gameRound = () => {
    
    if(computerPlays == playerTurn){
        clearInterval(intervalEl);
        computerTurn = false;
        resetLight();
    }

    if(computerTurn){
        resetLight();
        setTimeout(() =>{
            
            if(computerChoices[computerPlays] ==1){
                green.classList.add('active')
                const audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
                audio.play();  
            }else if(computerChoices[computerPlays] ==2){
                red.classList.add('active')
                const audio = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound2.mp3`);
                audio.play();   
            }else if(computerChoices[computerPlays] ==3){
                yellow.classList.add('active')
                const audio = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound3.mp3`);
                audio.play();
            }else if(computerChoices[computerPlays] ==4){
                blue.classList.add('active')
                const audio = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound4.mp3`);
                audio.play();
            }
            computerPlays++
       
        }, 500)
    }
}
//Just clears out the lights
const resetLight = ()=>{
    green.classList.remove('active');
    red.classList.remove('active');
    yellow.classList.remove('active');
    blue.classList.remove('active');
    
}

const checkAnswers =() =>{
    //checks to make sure player is still making the write choice
    if(playerChoices[playerChoices.length -1] !== computerChoices[playerChoices.length -1]){
        correctChoice = false;
    }
    //checks to see if player won
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
    //if player is still making correct choices then moves on to the computers turn
    if(playerTurn == playerChoices.length && correctChoice && !win){
        playerTurn++
        playerChoices = [];
        computerTurn = true;
        computerPlays = 0;
        counter.innerHTML = playerTurn;
        intervalEl = setInterval(gameRound, 800);
    }
}

const openModal = ()=>{
    modal.classList.add('open')
}
const closeModal =() =>{
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
    //makes it to were you cant click when its the computers turn
    if(computerTurn === true){
        return;
    }else{
        playerChoices.push(1);
        const audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
        audio.play(); 
        checkAnswers();
    }
});

red.addEventListener('click', () =>{
    if(computerTurn === true){
        return;
    }else{
    playerChoices.push(2);
    let audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    audio.play(); 
    checkAnswers();

    }
});

yellow.addEventListener('click', () =>{
    if(computerTurn ===true){
        return;
    }else{
    playerChoices.push(3);
    let audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
        audio.play(); 
    checkAnswers();
    }
});

blue.addEventListener('click', () => {
    if(computerTurn ===true){
        return;
    }else{
    playerChoices.push(4);
    let audio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
    audio.play(); 
    checkAnswers();
    }
});

start.addEventListener('click', () =>{
    //forces you to select a level before you can play the game
    if(rank != true){
        alert('Please Select a level');
    }else if(rank === true){
    play();
    counter.innerHTML= playerTurn;
    }
});


const winGame = () => {
    counter.innerHTML = 'YOU WIN!'
    win = true;
    setTimeout(() =>{
        location.reload()
    },2000)
}
