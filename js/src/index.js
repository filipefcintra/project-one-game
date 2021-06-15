

class regularPerson {
    constructor() {
        this.savingsHTMLNode = document.getElementById("savings");
        this.healthHTMLNode = document.getElementById("health");
        this.savings = 20000;
        this.health = 100;
    }

    printCurrentStatus() {
        this.savingsHTMLNode.innerText = `Poupanca: ${this.savings}`;
        this.healthHTMLNode.innerText = `Vida: ${this.health}`;
    }

    isRegularPersonOver() {
        const status = [this.savings, this.health];
        return [status.indexOf(0), status.indexOf(100)];

    }
}