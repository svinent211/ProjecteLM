

//Guardar informació del restaurant al localStorage
localStorage.setItem("diesTancat", [1]);
localStorage.setItem("horaObertura", "13:00");
localStorage.setItem("horaTancament", "23:00");
localStorage.setItem("maxPersones", 18);

const diesTancat = localStorage.getItem("diesTancat");
const horaObertura = localStorage.getItem("horaObertura");
const horaTancament = localStorage.getItem("horaTancament");
const maxPersones = localStorage.getItem("maxPersones");

//Formulari
const formulari = document.querySelector("form");
const inputDate = document.querySelector("#inputDate")
const inputHora = document.querySelector("#inputHora");
const inputNPersones = document.getElementById("inputPersones");

let date = new Date();
console.log(date);
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, "0");
let day = String(date.getDate()).padStart(2, "0");
let hoy = `${year}-${month}-${day}`;

inputDate.addEventListener("change", e=> {

});



inputHora.addEventListener("change", (e)=> {

});

formulari.addEventListener("submit", e=> {
    // e.preventDefault();


});

inputNPersones.max = maxPersones;