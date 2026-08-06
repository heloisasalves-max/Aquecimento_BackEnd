//Maior Número
const numero = [12, 67, 34, 89, 21];
let maior = 0
for (let i = 0; i < numero.length; i++){
    if (numero[i] > maior) {
        maior = numero[i];
    }
}
    console.log(maior);