/*
1.- Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabra se debe seleccionar por su posicion.
  ( quiero saber la longitud de la segunda palabra)
  si preguntamos por una posicion que no existe en la frase, devolvemos un mensaje que indique el error
2.- De la frase, necesitamos eliminar una palabra con base en su posicion, y recibir una nueva frase sin la palabra borrada
3.- Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra corta es aquella que tiene 3 caracteres o menos, y debemos obtener la nueva frase sin palabras cortas
4.- Se requiere obtener la frase, pero escrita en orden inverso*/

const phrase = "La mejor forma de predecir el futuro es creándolo"

//1
let posicion = 2

const letrasEnPalabra = (texto, indice) =>{
    const arrTexto = separarPalabras(texto)

    if (indice > arrTexto.length) {
        return 'No existe esa posicion en la frase'
    } else {
        return arrTexto[indice]
    }
}

const separarPalabras = (a) => a.split(' ');

const respuesta1 = letrasEnPalabra(phrase, posicion)
console.log("Respuesta 1:");
console.log(respuesta1);

//2

const borrarPalabra = (texto, indice) =>{
    const arrTexto = separarPalabras(texto)
    const borrar = arrTexto[indice]
    let nuevoTexto = []

    for (let i = 0; i < arrTexto.length; i++) { 
        if (arrTexto[i] !== borrar) {
           nuevoTexto.push(arrTexto[i])        
        }
      }

      return nuevoTexto.join().replaceAll(',', ' ')
}

const respuesta2 = borrarPalabra(phrase, posicion)
console.log( "\nRespuesta 2:");
console.log(respuesta2);

//3
const borrarCortas = (texto) =>{
    const arrTexto = separarPalabras(texto)
    let nuevoTexto = []

    for (let i = 0; i < arrTexto.length; i++) { 
        if (arrTexto[i].length >= 3) {
           nuevoTexto.push(arrTexto[i])        
        }
      }

      return nuevoTexto.join().replaceAll(',', ' ')
}

const respuesta3 = borrarCortas(phrase)
console.log( "\nRespuesta 3:");
console.log(respuesta3);

//4
const voltearTexto = (texto) =>{
    const arrTexto = separarPalabras(texto)
    let nuevoTexto = []

    for (let i = 0; i < arrTexto.length; i++) {  
        nuevoTexto.push(arrTexto[i].split('').reverse().join(''))
      }

      return nuevoTexto.join().replaceAll(',', ' ')
}

const respuesta4 = voltearTexto(phrase)
console.log( "\nRespuesta 4:");
console.log(respuesta4);