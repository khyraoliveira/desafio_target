function contadorA(x) {
    let contador = 0;
    
    let minusculo = x.toLowerCase();

    for (let i = 0; i < minusculo.length; i++) {
        if (minusculo[i] === 'a') {
            contador++;
        }
    }

    return contador;
}

let minhaString = "Paralelepipedo";

let contador = contadorA(minhaString);

if (contador > 0) {
    console.log(`Esse é o número de letras 'a' na string: ${contador}.`);
} else {
    console.log("A letra 'a' não aparece na string.");
}
