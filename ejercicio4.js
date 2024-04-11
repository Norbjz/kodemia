/*se requiere: 
1.- Saber cuántos caracteres tiene la frase
2.- Saber cuántas letras tiene la frase
3.- Saber cuántas palabras tiene la frase
4.- Obtener la misma frase pero en mayúsculas
5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
*/

const phrase = "La mejor forma de predecir el futuro es creándolo"

//1
const largo = (a) => a.length

const respuesta1 = largo(phrase)
console.log("Respuesta 1:");
console.log(respuesta1);

//2
const contarEspacios = (a) => {
    const arrayPhrase = a.split('')
    let contador = 0

    for (let i = 0; i < arrayPhrase.length; i++) { 
        if (arrayPhrase[i] == ' ') {
            contador++
        }
      }

    return contador
}

console.log( "\nRespuesta 2:");
console.log(largo(phrase) - contarEspacios(phrase));

//3
console.log("\nRespuesta 3:");
console.log(contarEspacios(phrase) + 1);

//4
const fraseMayuscula = (a) => a.toUpperCase()

const respuesta4 = fraseMayuscula(phrase)
console.log("\nRespuesta 4:");
console.log(respuesta4);

//5
const reemplazoFrase = (a) => a.replaceAll("a", 4)

const respuesta5 = reemplazoFrase(phrase)
console.log("\nRespuesta 5:");
console.log(respuesta5);
