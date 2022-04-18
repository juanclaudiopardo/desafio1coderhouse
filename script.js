//Ciclo For
const numero = parseInt(prompt("Ingrese la cantidad de holas que quiere ver por consola:"));
for (let i = 0; i < numero; i++) {
  console.log("Hola!!");
}
//Dados(ciclo Whileg)
let dado = Math.trunc(Math.random() * 6) + 1;

while (dado !== 6) {
  console.log(`Te salio ${dado}`);
  dado = Math.trunc(Math.random() * 6) + 1;
  if (dado === 6) console.log("Se termina el juego");
}
