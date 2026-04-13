let vida = 100;
let dano = 35;

let vidaRestante = vida - dano;

console.log("Vida restante: " + vidaRestante);

if (vidaRestante > 0) {
    console.log("O personagem ainda está vivo!");
} else {
    console.log("O personagem foi derrotado!");
}