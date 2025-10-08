let numerosImpares = [2, 5, 7, 8, 11];
let Impares = 0;
for (let i = 0; i < numerosImpares.length; i++) {
    if (numerosImpares[i] % 2 !== 0) {
        Impares++;
    }
}
console.log("Cantidad de numeros impares: " + Impares);
