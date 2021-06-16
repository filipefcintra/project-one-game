class Kingdom {
    constructor() {
      this.healthHTMLNode = document.getElementById("health");
      this.savingsHTMLNode = document.getElementById("savings");
      this.health = 100;
      this.savings = 10000;
    }
  
    updateKingdom(effect) {
      this.health = Math.min(Math.max(this.health + effect[0], 0), 100);
      this.savings = Math.min(Math.max(this.savings + effect[3], 0), 100);
    }
  
    printCurrentStatus() {
      this.healthHTMLNode.innerText = `Saude: ${this.health}`;
      this.savingsHTMLNode.innerText = `Poupanca: ${this.savings}`;
    }
  
    isKingdomOver() {
      const status = [this.health, this.savings];
      return [status.indexOf(0), status.indexOf(100)];
    }
  }
  