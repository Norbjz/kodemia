const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      pais: "México",
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
      pais: "México",
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
      pais: "Colombia",
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
      pais: "Ecuador",
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];

//#region Ejercicio 1
//  1.- Necesito conocer la edad promedio de todos los perros.

const averageAge = (canes) => {
    let ages = 0;
  canes.forEach((can) => {
      ages += can.edad;
    });
    return ages/canes.length;
  };
  
  console.log( "Respuesta 1:");
  console.log(averageAge(canes));

  //Con reduce

  const averageAgeRedu = (canes) => canes.reduce((suma, dog) => suma + dog.edad, 0 ) / canes.length;


  console.log( "Respuesta 1 usando Reduce:");
  console.log(averageAgeRedu(canes));

//#region Ejercicio 2
//  2.- Necesito obtener una lista de perros basados en el pais al que pertenecen.

const getDogCountry = (canes) => {
    let newDataCountries = canes.reduce((template, dog)=> {

        if (dog.pais === "México"){
            return ({...template, Mexico:[...template.Mexico, dog]});
        } else if (dog.pais === "Colombia") {
            return ({...template, Colombia:[...template.Colombia, dog]});
        } else if (dog.pais === "Ecuador") {
            return ({...template, Ecuador:[...template.Ecuador, dog]});
        }

    }, ({Mexico: [], Colombia: [], Ecuador: [], Canada: [], Italia: [] })
    )
    
    const { Mexico, Colombia, Ecuador, Canada, Italia } = newDataCountries;

    [Mexico, Colombia, Ecuador, Canada, Italia].forEach(pais => {
        if (pais.length === 0) pais.push("No hay perritos de este pais");
    });

    return newDataCountries;
}

    console.log( "\nRespuesta 2:");
    console.log(getDogCountry(canes));


//#region Ejercicio 3
//  3.- Necesito una lista de los codigos postales de los perros.

const getZipCode = (canes) => canes.map((can) => can.direccion.codigoPostal);

console.log( "\nRespuesta 3:");
console.log(getZipCode(canes));


//#region Ejercicio 4
//  4.- Necesito una lista de la lista de paises a los que pertenecen los perros sin repetidos.

const getCountryList = (canes) => {
  let lista = []

  canes.forEach((can) => {
if (!lista.includes(can.pais))
    lista.push(can.pais)
  })

  return lista
}

console.log( "\nRespuesta 4:");
console.log(getCountryList(canes));
