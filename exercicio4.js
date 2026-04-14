let nota1 = 6;
let nota2 = 7;
let nota3 = 8;
let nota4 = 5;

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Média:", media);

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}