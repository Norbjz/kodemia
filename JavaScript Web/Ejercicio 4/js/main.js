/*
  1.- Activar el formulario, de tal forma que al dar click en el botón "crear usuario" se genere un objeto con la siguiente forma:
  person = {
    name:"...",
    email:"...",
    password:"..."
  }
  2.- Agregar a la funcionalidad, una lista "persons", de tal forma que al dar click en el boton, la persona creada en el paso anterior, se agregue a esa lista "persons"

  persons = []
  person -> persons

  3.- Agregar la funcionalidad para que cada que agregue una persona nueva, esta se vea reflejada junto con las anteriores en la interfaz de usuario
  */

let createPersonButton = document.getElementById("create-person");

let persons = [];

createPersonButton.addEventListener("click", (event) => {
  event.preventDefault();
  let fields = document.querySelectorAll("#person-form input");

  let personObject = {};

  fields.forEach((field) => {
    let property = field.name;

    let value = field.value;

    personObject[property] = value;
  });

  persons = [...persons, personObject];

  printPersonsList(persons, "persons-list");
});

const createPersonItem = (personObject) => {
  let { fullname, email } = personObject;
  let personListItem = document.createElement("li");
  personListItem.classList.add("list-group-item");
  let personNameText = document.createTextNode(`${fullname}: ${email}`);
  personListItem.append(personNameText);
  return personListItem;
};

const printPersonsList = (dataArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);

  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }

  dataArray.forEach((person) => wrapper.append(createPersonItem(person)));
};
