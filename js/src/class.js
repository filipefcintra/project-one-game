
class board {
    constructor() {
        this.savingsHTMLNode = document.getElementById("savings");
        this.healthHTMLNode = document.getElementById("health");
        this.savings = 20000;
        this.health = 100;
        this.position = 0
        this.dice = 0
    }

    rollDice() {
        this.dice = 1 + Math.floor(Math.random() * 6) 
        return this.dice
    }

    printCurrentStatus() {
        this.savingsHTMLNode.innerText = `Poupanca: ${this.savings}`;
        this.healthHTMLNode.innerText = `Vida: ${this.health}`;
        this.position
    }
    playing() {
        this.printCurrentStatus()
        this.rollDice
        this.position += this.dice
        textContainer.innerText = gameArray[this.position + 1][0]
        textContainer.innerText = gameArray[this.position + 1][3]
        this.savings = this.savings + gameArray[this.position + 1][1][1]
        this.health = this.health + gameArray[this.position + 1][1][2]
        singleButton.innerText = "Jogue o dado"


    }

    isBoardOver() {
        if(this.savings < 0 || this.health <= 0) {
            gameOver()

        }

    }
}
