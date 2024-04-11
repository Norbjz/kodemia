/*
1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando únicamente primer nombre, apellido paterno y apellido materno
    input => Israel Salinas Martínez
    output => I. S. M.
    
2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, debemos poder obtener algún nombre al azar. El nombre seleccionado debe ser eliminado de la lista original para poder volver a usar la ruleta.
    Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.
*/

//1
let nombre = 'Jorge Daniel Pérez Sarmiento'

const iniciales = (nombre) => {
    const arrNombre = separarPalabras(nombre)
    let inicialNombre = []
    let inicialNombre2 = []

    for (let i = 0; i < arrNombre.length; i++) { 
        inicialNombre.push(arrNombre[i][0] + '.')        
      }

    if (inicialNombre.length > 3) {
        inicialNombre2.push(inicialNombre[0])
        inicialNombre2.push(inicialNombre[inicialNombre.length-2])
        inicialNombre2.push(inicialNombre[inicialNombre.length-1])
        return inicialNombre2.join().replaceAll(',', ' ')
      } else {
        return inicialNombre.join().replaceAll(',', ' ')
      }

      
}

const separarPalabras = (nombre) => nombre.split(' ');

console.log( "Respuesta 1:");
console.log(iniciales(nombre))

//2
let listaNombres = ['Claudia', 'Juan', 'Pedro', 'Blanca', 'Andrea']

const eliminarNombre = (arr) => {
    const nombreBorrar = ruleta(arr)

    for (let i = 0; i < arr.length; i++) { 
        if (nombreBorrar == arr[i]) {
            arr.splice(i,1)
        }
      }
      return arr
}

const ruleta = (arr) => arr[Math.ceil(Math.random()*arr.length-1)]

const correrRuleta = (arr) => {
    let nuevoArr = new Array(...arr)
    let resultado = ['La ruleta inicia con ' + nuevoArr.join().replaceAll(',', ', ')]
    let ultimo = []

    for (let i = 0; i < arr.length; i++) { 
        eliminarNombre(nuevoArr)
 
        if (nuevoArr.length == 0) {
            resultado.push('\nEliminamos a ' + ultimo + ' y ya no hay más nombres a eliminar.')
        } else {
            resultado.push('\nEl resultado #' + (i+1) + ' de la ruleta es ' + nuevoArr.join().replaceAll(',', ', ')+"..") 
        }

        if (nuevoArr.length == 1) {
            ultimo.push(nuevoArr.join())
        }
      }

      return resultado.join().replaceAll('.,', '')
}


console.log( "\nRespuesta 2:");
console.log(correrRuleta(listaNombres))
