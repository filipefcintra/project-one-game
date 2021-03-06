let board = new Board()

const cells = document.querySelectorAll("td")
let piece = document.querySelectorAll("p")

// frases de introducao

const intro = "Welcome to Hell de Janeiro! Um lugar adoravel de se viver, mas que precisa de muito jogo de cintura. Voce acha que tem o que eh necessario? Esta preparado para essa aventura?"
const caracter = "Voce eh um cidadao comum de classe media satisfeito com seu emprego. \nTrabalhou duro no ultimo ano e conseguiu fazer uma poupanca de R$10.000.\n Voce eh feliz."
const objetivo = "Seu Objetivo eh chegar ao final sem falir, mas como tudo na vida, isso depende da sua sorte. \nComo ja dizia o grande poeta Marcelo D2..\n'O jogo comecou, aperta o Start'"

// efeitos sonoros

const diceTune = new Audio();
diceTune.src = "./sounds/dice.mp3"
diceTune.volume = 0.3;

const moneyTune = new Audio();
moneyTune.src = "./sounds/caixa.mp3"
moneyTune.volume = 0.3;

// esconder e mostrar botoes
const textContainer = document.getElementById("main-text");
textContainer.innerText = intro;

const buttonsContainer = document.getElementById("buttons-container");
let singleButton = document.getElementById("single-choice-button");
let leftButton = document.getElementById("right-choice-button");
let rigthButton = document.getElementById("left-choice-button");

// function visibilitySingle() {
//     document.getElementById("single-choice-button").style.display = "none"
// }

// function visibilitySingleRevert() {
//     document.getElementById("single-choice-button").style.display = "block"
// }

// function visibilityDouble() {
//     buttonsContainer.innerHTML +=
//     '<button id="right-choice-button" class="choice-buttons"></button>';
//     buttonsContainer.innerHTML +=
//     '<button id="left-choice-button" class="choice-buttons"></button>';
//     document.getElementById("right-choice-button").style.display = "none"
//     document.getElementById("left-choice-button").style.display = "none"
// }

// function visibilityDoubleRevert() {
//     buttonsContainer.innerHTML +=
//     '<button id="right-choice-button" class="choice-buttons"></button>';
//     buttonsContainer.innerHTML +=
//     '<button id="left-choice-button" class="choice-buttons"></button>';
//     document.getElementById("right-choice-button").style.display = "block"
//     document.getElementById("left-choice-button").style.display = "block"
// }


// telas
//function 0 click
function initialScreen() {
    textContainer.innerText = intro;   
}
// 1 click
function pressStartScreen() {
    textContainer.innerText = objetivo;
    singleButton = document.getElementById("single-choice-button")
    singleButton.innerText = "Start"
}
// 2 clicks
function gameStart() {
    board.savingsHTMLNode.innerText = `Poupanca: ${board.savings}`;
    board.healthHTMLNode.innerText = `Saude: ${board.health}`
    textContainer.innerText = caracter;
    singleButton.innerText = "Jogue o dado"
    
}


function gameInitialLoop() {
    // board.playingDice()
    // visibilitySingle()
    // visibilityDoubleRevert()
    board.printCurrentStatus()
    singleButton.parentElement.removeChild(singleButton)
    buttonsContainer.innerHTML +=
    '<button id="right-choice-button" class="choice-buttons"></button>';
    buttonsContainer.innerHTML +=
    '<button id="left-choice-button" class="choice-buttons"></button>';
    leftButton = document.getElementById("right-choice-button");
    rigthButton = document.getElementById("left-choice-button");
    textContainer.innerText = gameArray[board.position - 1][0]
    leftButton.innerText = gameArray[board.position - 1][1]
    rigthButton.innerText = gameArray[board.position - 1][4]
   if (board.savings >= 0 && board.health > 0) {
        leftButton.onclick = () => {
            textContainer.innerText = gameArray[board.position - 1][3]
            board.savings = board.savings + gameArray[board.position - 1][2][0]
            board.health = board.health + gameArray[board.position - 1][2][1]
            board.printCurrentStatus()
            leftButton.parentElement.removeChild(leftButton)
            rigthButton.parentElement.removeChild(rigthButton)
            buttonsContainer.innerHTML +=
            '<button id="single-choice-button" class="choice-buttons"></button>';
            let singleButton = document.getElementById("single-choice-button");
            singleButton.innerText = "Jogue o dado"
            singleButton = document.getElementById("single-choice.button").appendChild(singleButton)
            
            
        };

        rigthButton.onclick = () => {
            textContainer.innerText = gameArray[board.position - 1][6]
            board.savings = board.savings + gameArray[board.position - 1][5][0]
            board.health = board.health + gameArray[board.position - 1][5][1]
            board.printCurrentStatus()
            leftButton.parentElement.removeChild(leftButton)
            rigthButton.parentElement.removeChild(rigthButton)
            buttonsContainer.innerHTML +=
            '<button id="single-choice-button" class="choice-buttons"></button>';
            let singleButton = document.getElementById("single-choice-button");
            singleButton.innerText = "Jogue o dado"
            singleButton = document.getElementById("single-choice.button").appendChild(singleButton)
            
        }
   } else {
       if(board.savings < 0) {
           textContainer.innerText = "Voce Faliu! \nGame Over"
       } if ( board.health <=0) {
           textContainer.innerText = "Voce Morreu \nGame Over"
       }

   }
   
   board.playingDice()
   gameInitialLoop()

}

function gameDice() {
  board.playingDice()
  visibilityDouble()
  visibilitySingleRevert()
}



let clickCounter = 0
singleButton.addEventListener("click", () => {
    if (clickCounter === 0) {
        pressStartScreen()
    } else if (clickCounter === 1) {
        gameStart()
    } else if (clickCounter === 2) {
        gameInitialLoop()
    } else if (clickCounter === 3) {
        gameInitialLoop()
    }

    clickCounter++
})

