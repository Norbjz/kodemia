//Crear una lista de koders, usando el siguiente array:

let koders = [
  {
    name: "Israel",
    lastname: "Salinas Martínez",
  },
  {
    name: "Norberto",
    lastname: "Jiménez",
  },
];

const lista = document.createElement("ul");

koders.forEach((koder) => {
  const elementoLista = document.createElement("li");

  elementoLista.textContent = `${koder.name} ${koder.lastname}`;

  lista.append(elementoLista);
});

document.body.append(lista);
