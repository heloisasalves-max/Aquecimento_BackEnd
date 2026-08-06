const capitais = ["Brasília", "Salvador", "Manaus", "Recife"];
let manaus = false;

for (let i = 0; i < capitais.length; i++){
    if (capitais[i] === "Manaus") {
        manaus = true;
    }
}

if (manaus === true) {
    console.log("Manaus encontrado!");
}else{
    console.log("Manaus não encontrado.");
}