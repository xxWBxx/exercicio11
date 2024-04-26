function verificarPrimo(numero) {
    
    if (numero < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    
    return true;
}

const numero = parseInt(prompt("Digite um número para verificar se é primo: "));

if (verificarPrimo(numero)) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}