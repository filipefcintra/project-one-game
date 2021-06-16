const board = new Board()

const gameBoard = [
    5, 6, 7, null, 17, 18, 19, null, 29,
    4, null, 8, null, 16, null, 20, null, 28,
    3, null, 9, null, 15, null, 21, null, 27,
    2, null, 10, null, 14, null, 22, null, 26,
    1, null, 11, 12, 13, null, 23, 24, 25]

const cells = document.querySelectorAll("td")
let piece = document.querySelectorAll("p")


const intro = "Welcome to Hell de Janeiro! Um lugar adoravel de se viver, mas que precisa de muito jogo de cintura. Voce acha que tem o que eh necessario? Esta preparado para essa aventura?"

const caracter = "Voce eh um cidadao comum de classe media satisfeito com seu emprego. \nTrabalhou duro no ultimo ano e conseguiu fazer uma poupanca de R$10.000.\n Voce eh feliz."

// const backgroundTune = new Audio();
// backgroundTune.src = "./sounds/play1.mp3";
// backgroundTune.volume = 0.04;

const diceTune = new Audio();
diceTune.src = "./sounds/dice.mp3"
diceTune.volume = 0.3;

const moneyTune = new Audio();
moneyTune.src = "./sounds/caixa.mp3"
moneyTune.volume = 0.3;


const textContainer = document.getElementById("main-text");
textContainer.innerText = intro;

const buttonsContainer = document.getElementById("buttons-container");
let singleButton = document.getElementById("single-choice-button");

function visibility() {
    document.getElementById("single-choice-button").style.display = "none"
}


function initialScreen() {
    // backgroundTune.play("../sounds/play1.mp3");
    textContainer.innerText = intro;
    
}

function pressStartScreen() {
    // backgroundTune.play();
    textContainer.innerText = "Seu Objetivo eh chegar ao final sem falir, mas como tudo na vida, isso depende da sua sorte. \nComo ja dizia o grande poeta Marcelo D2..\n'O jogo comecou, aperta o Start'";
    singleButton = document.getElementById("single-choice-button")
    singleButton.innerText = "Start"
}

function gameStart() {
    // backgroundTune.play();
    board.savingsHTMLNode.innerText = `Poupanca: ${board.formatSavings()}`;
    board.savings
    textContainer.innerText = caracter;
    singleButton.innerText = "Jogue o dado";
    
}

function gameLoop() {
    board.playing();
};

let clickCounter = 0
singleButton.addEventListener("click", () => {
    if (clickCounter === 0) {
        pressStartScreen()
    } else if (clickCounter === 1) {
        gameStart()
    } else {
        gameLoop();
        diceTune.play()
    }

    clickCounter++
})

