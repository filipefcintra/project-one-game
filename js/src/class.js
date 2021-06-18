
class Board {
    constructor() {
        this.savingsHTMLNode = document.getElementById("savings");
        this.savings = 10000;
        this.position = 1
        this.dice = 0
    }

    rollDice() {
        this.dice = 1 + Math.floor(Math.random() * 6) 
        return this.dice
    }

    formatSavings() {
        return this.savings.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})
    }

    printCurrentStatus() {
        this.savingsHTMLNode.innerText = `Poupanca: ${this.formatSavings()}`;
    }
    playing() {
        this.printCurrentStatus()
        this.rollDice()
        const oldPosition = this.position
        this.position += this.dice
        if(this.position < gameArray.length && this.savings >= 0) {
            document.getElementById(String(oldPosition)).classList.toggle("piece")
            document.getElementById(String(oldPosition)).classList.toggle("newpiece")
            document.getElementById(String(this.position)).classList.toggle("newpiece")
            document.getElementById(String(this.position)).classList.toggle("piece")
            const textContainer = document.getElementById("main-text")
            textContainer.innerText = `Voce tirou ${this.dice}\n ${gameArray[this.position - 1][0]}\n\n${gameArray[this.position - 1][2]}`;
            setTimeout(() => {
                moneyTune.play()
            },2000)
            singleButton.innerText = "Jogue o dado"
            this.savings = this.savings + gameArray[this.position - 1][1][0]
            if(this.savings < 0) {
                const textContainer = document.getElementById("main-text")
                textContainer.innerText = "Suas economias acabaram. \n \n \n Game Over!"
                visibility()

            }
        } else {
            this.isBoardOver()
        } 
        this.printCurrentStatus()
        
    
    }   


    isBoardOver() {
        if(this.savings >= 0) {
            const textContainer = document.getElementById("main-text")
            textContainer.innerText = "Voce Venceu! Conseguiu sobreviver a loucura carioca sem falir! \n Parabens!!!"
            visibility()
        } else {
            const textContainer = document.getElementById("main-text")
            textContainer.innerText = "Voce faliu!"
            singleButton.innerText = "Finalizar"
            
            }
    }
    
};