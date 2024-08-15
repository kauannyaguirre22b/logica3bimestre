const input = require("prompt-sync")()

let numero = Number(input("Digite um número:"))

if (numero > 0) {
    console.log("Não Negativo")
} else if (numero === 0) {
    console.log("Não Negativo")
} else {
    console.log("Negativo")
}