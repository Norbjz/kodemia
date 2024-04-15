const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Bella",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];

  /*
    1.- Necesitamos obtener una lista con los objetos de todos los canes, pero su edad debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
    2.- Necesitamos conocer la cantidad de canes que ya estan vacunados
    3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro, en el siguiente formato:
        "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "
    4.- Necesitamos saber la edad promedio en años humanos de los canes de la lista
    5.- Necesitamos una nueva lista con todos los objetos de los canes, pero cambiando el valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a "Si", si el valor viene en false, cambiarlo a "No")
    6.- Necesitamos una nueva lista con únicamente el nombre de cada can
*/

//#region Ejercicio 1

const ageInHuman = (perritos) => perritos.map((canes) => ({...canes, edad: canes.edad *= 7}))

console.log( "Respuesta 1:");
console.log(ageInHuman(canes));


//#region Ejercicio 2

const ifVacuna = (perritos) => { 
  let vacunados = [];

  perritos.forEach((canes) => {
    if (canes.vacunado) {
      vacunados.push(canes)
    }
    
  }); 
  return vacunados.length };

console.log( "\nRespuesta 2:");
console.log(ifVacuna(canes));

//#region Ejercicio 3

const createDogInfo = (perritos) => {
  let {calle, numero, colonia, codigoPostal} = perritos.direccion
  let infoPerritos = [`${'Nombre: '}${perritos.nombre} ${'Calle: '}${calle} ${'#'}${numero} ${'Colonia: '}${colonia} ${'Código Postal: '}${codigoPostal}`];
  return infoPerritos;
};

const getPerritosInfo = (canes) => {
  let infoPerritos = [];
  canes.forEach((can) => {
    infoPerritos.push(createDogInfo(can));
  })
  return infoPerritos
};

console.log( "\nRespuesta 3:");
console.log(getPerritosInfo(canes));

//#region Ejercicio 4
const transformAge = (can) => can.edad * 7;


const averagePerritos = (canes) => {
  let ages = 0;
canes.forEach((can) => {
    ages += transformAge(can);
  });
  return ages/canes.length
};

console.log( "\nRespuesta 4:");
console.log(averagePerritos(canes))

//#region Ejercicio 5

const vacunado = (perritos) => perritos.map((canes) => ({ ...canes, vacunado: canes.vacunado ? "si" : "no" }));

console.log( "\nRespuesta 5:");
console.log(vacunado(canes))

//#region Ejercicio 6

const canesNames = (perritos) => perritos.map((canes) => canes.nombre);

console.log( "\nRespuesta 5:");
console.log(canesNames(canes));
