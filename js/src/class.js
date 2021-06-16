
class Board {
    constructor() {
        this.savingsHTMLNode = document.getElementById("savings");
        this.healthHTMLNode = document.getElementById("health");
        this.savings = 10000;
        this.position = 0
        this.dice = 0
    }

    rollDice() {
        this.dice = 1 + Math.floor(Math.random() * 6) 
        return this.dice
    }

    printCurrentStatus() {
        this.savingsHTMLNode.innerText = `Poupanca: R$${this.savings}`;
        // this.healthHTMLNode.innerText = `Vida: ${this.health}`;
        // this.positionHTMLNode.innerText = 
    }
    playing() {
        this.printCurrentStatus()
        this.rollDice()
        this.position += this.dice
        if(this.position < gameArray.length) {
            const textContainer = document.getElementById("main-text")
            textContainer.innerText = gameArray[this.position - 1][0] + "\n"
            this.savings = this.savings + gameArray[this.position - 1][1][0]
            singleButton.innerText = "Jogue o dado"

        }

    }

    isBoardOver() {
        // if(this.savings < 0 || this.health <= 0) 
        if(this.savings < 0) {
            gameOver()

        }

    }
}
