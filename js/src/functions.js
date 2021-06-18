const board = new Board()

const cells = document.querySelectorAll("td")
let piece = document.querySelectorAll("p")


const intro = "Welcome to Hell de Janeiro! Um lugar adorável de se viver, mas que precisa de muito jogo de cintura. Você acha que tem o que é necessário? Está preparado para essa aventura?"
const caracter = "Você é um cidadão comum, de classe média, satisfeito com seu emprego. \nTrabalhou duro no último ano e conseguiu fazer uma poupança de R$10.000."

const backgroundTune = new Audio();
backgroundTune.src = "./sounds/play2.mp3";
backgroundTune.volume = 0.01;

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
    backgroundTune.play()
    textContainer.innerText = intro;
    
}

function pressStartScreen() {
    backgroundTune.play();
    textContainer.innerText = "Seu objetivo é chegar no final do mês sem falir, mas como tudo na vida, isso depende da sua sorte. \nComo já dizia o grande 'poeta' Marcelo D2..\n'O jogo começou, aperta o Start'.";
    singleButton = document.getElementById("single-choice-button")
    singleButton.innerText = "Start"
}

function gameStart() {
    backgroundTune.play();
    board.savingsHTMLNode.innerText = `Poupança : ${board.formatSavings()}`;
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

