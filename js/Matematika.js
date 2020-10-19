class Matematika {
    constructor(pirmas, antras) {
        this.number1 = pirmas;
        this.number2 = antras;
    }

    ivardink() {
        return `Mano atmintyje yra ${this.number1}.`;
    }

    printSuma() {
        const suma = Matematika.suma(this.number1, this.number2);

        return `Suma ${this.number1} ir ${this.number2} yra ${suma}`;
    }

    static suma(a, b) {
        return a + b;
    }

    static kvadratu(x) {
        return x * x;
    }
}

export { Matematika }