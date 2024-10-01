function fibo(numero) {
    let a = 0, b = 1;
    
    if (numero === a || numero === b) {
        return true;
    }

    let proximo = a + b;

    while (proximo <= numero) {
        if (proximo === numero) {
            return true;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }

    return false;
}

let number = 21;

if (fibo(number)) {
    console.log(`${number} está na sequência de Fibonacci.`);
} else {
    console.log(`${number} não está na sequência de Fibonacci.`);
}
