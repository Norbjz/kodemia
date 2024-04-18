let data = [
  ["Israel", "Salinas", 34],
  ["Charles", "Silva", 27],
  ["Naomi", "Lopez", 27],
  ["David", "Moranchel", 28],
];

/*
    1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
    2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
    3.- Necesitamos reestructurar la data para que quede de la siguiente forma:

    let restructuredData = [
        {
            name:
            lastname:
            age
        }
    ]
  */
//1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data

const getFullNames = (data) =>
  data.map((names) => {
    let fullName = `${names[0]} ${names[1]}`;
    return fullName;
  });

console.log(getFullNames(data));

//2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista

const getMinMaxAge = (data) =>
  data.reduce(
    (num, person) => {
      if (person[2] >= num.Mayor) num.Mayor = person[2];
      if (person[2] <= num.Menor) num.Menor = person[2];
      return num;
    },
    { Menor: 200, Mayor: 0 }
  );

console.log(getMinMaxAge(data));

//3.- Necesitamos reestructurar la data para que quede de la siguiente forma:
/*     let restructuredData = [
        {
            name:
            lastname:
            age
        }
    ] */

const restructureData = (data) =>
  data.map((person) => {
    return { name: person[0], lastname: person[1], age: person[2] };
  });

console.log(restructureData(data));
