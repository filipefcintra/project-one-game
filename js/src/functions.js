const intro = "Welcome to Hell de Janeiro! Um lugar adoravel de se viver, mas que precisa de muito jogo de cintura. Voce acha que tem o que eh necessario? Esta preparado para essa aventura?"

const caracter = "Voce eh um cidadao comum de classe media feliz com seu emprego. Trabalhou duro no ultimo ano e conseguiu fazer uma poupanca de R$20.000. Sua saude esta 100%! Voce eh feliz."

const backgroundTune = new Audio();
backgroundTune.src = "garota de ipanema instrumental"
backgroundTune.volume = 0.3;

const diceTune = new Audio();
diceTune.src = "som de dados rolando"
diceTune.volume = 0.3;

const sirenTune = new Audio();
sirenTune.src = "som de sirene"
sirenTune.volume = 0.3;

const moneyTune = new Audio();
moneyTune.src = "som de moeda no cofrinho"
moneyTune.volume = 0.3;

const textContainer = document.getElementById("main-text");
textContainer.innerText = intro;

const buttonsContainer = document.getElementById("buttons-container");
let singleButton = document.getElementById("single-choice-button");

// let clickCounter = 0;


function initialScreen() {
    backgroundTune.play();
    textContainer.innerText = intro;
    
}

function pressStartScreen() {
    backgroundTune.play();
    textContainer.innerText = "Como ja dizia o grande poeta Marcelo D2..'O jogo comecou, aperta o Start'. Boa sorte!";
    singleButton = document.getElementById("single-choice-button")
    singleButton.innerText = "Start"
}

function gameStart() {
    backgroundTune.play();
    textContainer.innerText = caracter;
    singleButton.innerText = "Continue";
    //singlebutton...
    this.savings
    this.health
}

function gameLoop() {
    board.playing();
    if(board.isBoardOver()) {
        textContainer.innerText = "Game Over"
    } else {
        gameLoop()
    }
};

function gameOver (death) {
    backgroundTune.pause();
    deathTune.play();
    switch (death) {
        case 0:
            if (board.savings < 0) {
                textContainer.innerText = "Voce esta atolado em dividas!! Voce nao teve jogo de cintura o suficiente para sobreviver a loucura Carioca."
            } 
            break;
        
        case 1:
            if (board.health <= 0) {
                textContainer.innerText = "Seu corpo nao aguentou a loucura do Rio de Janeiro!"
            }
            break;
    }
    buttonsContainer.innerHTML = '<button id="single-choice-button" class="choice-buttons">Tente Novamente</button>';
    singleButton.addEventListener("click", () => {
        textContainer.innerText = '"God Is a DJ, Life is a dancefloor.." E eis que suas economias e saude foram restauradas!';
        continueGame();
    })
}

function continueGame() {
    deathTune.pause();
    backgroundTune.play();
    gameLoop();
}

singleButton.addEventListener("click", () => {
    let clickCounter = 0
    if(clickCounter = 0) {
        initialScreen();
        clickCounter += 1
    } else if (clickCounter = 1) {
        pressStartScreen()
        clickCounter += 1
    } else if (clickCounter = 2) {
        gameStart()
        clickCounter += 1
    } else {
        gameLoop();
    }
})