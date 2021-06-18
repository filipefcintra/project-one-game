class Board {
  constructor() {
      this.savingsHTMLNode = document.getElementById("savings");
      this.healthHTMLNode = document.getElementById("health");
      this.savings = 10000;
      this.health = 100;
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

  visibilitySingle() {
    document.getElementById("single-choice-button").style.display = "none"
}


  printCurrentStatus() {
      this.savingsHTMLNode.innerText = `Poupanca: ${this.formatSavings()}`;
      this.healthHTMLNode.innerText = `Saude: ${this.health}`;
  }
  playingDice() {
      this.rollDice()
      const oldPosition = this.position
      this.position += this.dice
      document.getElementById(String(oldPosition)).classList.toggle("piece")
      document.getElementById(String(oldPosition)).classList.toggle("newpiece")
      document.getElementById(String(this.position)).classList.toggle("newpiece")
      document.getElementById(String(this.position)).classList.toggle("piece")
      
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
