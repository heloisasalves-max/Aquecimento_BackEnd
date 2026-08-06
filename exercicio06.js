// Separando Faixa Etária
const idades = [12, 18, 25, 40, 16, 22];
console.log("Menores de idade: ")
for (i = 0; i < idades.length; i++) {
    if (idades[i] < 18) {
        console.log(idades[i]);
    }
}

console.log()

console.log("Maiores de idade: ")
for (i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        console.log(idades[i]);
    }
}

