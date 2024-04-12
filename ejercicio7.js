const users = [
    {
      name: "Alice",
      lastname: "Johnson",
      age: 28,
      gender: "Female",
      country: "USA",
    },
    {
      name: "Bob",
      lastname: "Smith",
      age: 32,
      gender: "Male",
      country: "Canada",
    },
    {
      name: "Carlos",
      lastname: "Gomez",
      age: 24,
      gender: "Male",
      country: "Mexico",
    },
    {
      name: "Daniela",
      lastname: "Martinez",
      age: 30,
      gender: "Female",
      country: "Colombia",
    },
    {
      name: "Erik",
      lastname: "Svensson",
      age: 29,
      gender: "Male",
      country: "Sweden",
    },
    {
      name: "Fiona",
      lastname: "O'Donnell",
      age: 35,
      gender: "Female",
      country: "Ireland",
    },
    {
      name: "Gautam",
      lastname: "Patel",
      age: 27,
      gender: "Male",
      country: "India",
    },
    {
      name: "Hana",
      lastname: "Kim",
      age: 22,
      gender: "Female",
      country: "South Korea",
    },
    {
      name: "Ivan",
      lastname: "Petrov",
      age: 34,
      gender: "Male",
      country: "Russia",
    },
    {
      name: "Julia",
      lastname: "Santos",
      age: 25,
      gender: "Female",
      country: "Brazil",
    },
  ];
  
  /*
      1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
      2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
      3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
      4.- Necesitamos saber la edad promedio de los usuarios
      5.- Necesitamos saber la mayor edad
      6.- Necesitamos saber la menor edad
  */

      //1

      const fullNames = (list) => {
        let firstLastName = [];

        for (let i = 0; i < list.length; i++) { 
            firstLastName.push(list[i].name + ' ' + list[i].lastname)
          }

          return firstLastName.join().replaceAll(',', ' \n')
      }

      console.log( "Respuesta 1:");
      console.log(fullNames(users))

      //2

      const males = (list) => {
        let allMales = [];

        for (let i = 0; i < list.length; i++) { 

            if (list[i].gender == "Male"){
                allMales.push(list[i])
            }
          }

          return allMales

      }

      console.log( "\nRespuesta 2:");
      console.log(males(users))

      //3

      const females = (list) => {
        let allFemales = [];

        for (let i = 0; i < list.length; i++) { 

            if (list[i].gender == "Female"){
                allFemales.push(list[i])
            }
          }

          return allFemales

      }

      console.log( "\nRespuesta 3:");
      console.log(females(users))

      //4

      const averageAges = (list) => {
        let ages = 0

        for (let i = 0; i < list.length; i++) { 
           ages += list[i].age
          }

          return ages/list.length

      }

      console.log( "\nRespuesta 4:");
      console.log(averageAges(users))

      //5

      const maxAge = (list) => {
        let max = 0

        for (let i = 0; i < list.length; i++) { 
            
            if(list[i].age > max)
            max = list[i].age
           }

           return max
      }

      console.log( "\nRespuesta 5:");
      console.log(maxAge(users))

      //6

      const minAge = (list) => {
        let min = list[0].age

        for (let i = 0; i < list.length; i++) { 
            
            if(list[i].age < min)
            min = list[i].age
           }

           return min
      }

      console.log( "\nRespuesta 6:");
      console.log(minAge(users))

    