let frase = prompt("Ingresa una frase:");
let letra = prompt("¿Qué letra quieres contar?");
let contador = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i].toLowerCase() === letra.toLowerCase()) {
    contador++;
  }
}
console.log(`La letra '${letra}' aparece ${contador} veces.`);
