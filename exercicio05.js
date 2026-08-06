// Encontrar o Maior Estoque
const estoque = [200, 450, 100, 900, 300];
let maior = 0
for (let i = 0; i < estoque.length; i++){
    if (estoque[i] > maior) {
        maior = estoque[i]
    }
}
    console.log(maior)