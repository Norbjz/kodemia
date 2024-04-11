/*
1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando únicamente primer nombre, apellido paterno y apellido materno
    input => Israel Salinas Martínez
    output => I. S. M.
    
2.- Necesitamos una ruleta de nombres, es decir, de una lista de nombres, debemos poder obtener algún nombre al azar. El nombre seleccionado debe ser eliminado de la lista original para poder volver a usar la ruleta.
    Cuando ya no haya nombres, debe avisar que ya no hay nombres en la lista.
*/

//1
let nombre = 'Guillermo Norberto Ramos Jiménez'

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

console.log(iniciales(nombre))

//2