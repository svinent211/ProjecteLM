




let dades = JSON.parse(localStorage.getItem("dades"));

const diesTancat = dades.diesTancat;
const horaObertura = dades.horaObertura;
const horaTancament = dades.horaTancament;
const maxPersones = dades.maxPersones;

//Elements del formulari
const formulari = document.querySelector("form");
const inputNombre = document.querySelector("#inputNombre")
const inputDate = document.querySelector("#inputDate")
const inputHora = document.querySelector("#inputHora");
const inputNPersones = document.querySelector("#inputPersones");
const inputContacte = document.querySelector("#inputContacte")




let dinsHorari = false;
let festiu = false;

//Camp de nombre de persones
inputNPersones.max = maxPersones;
let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, "0");
let day = String(date.getDate()).padStart(2, "0");
let hoy = `${year}-${month}-${day}`;
inputDate.min = hoy;


//Camp de data de reserva
const errorDate = document.getElementById("errorDate");
inputDate.addEventListener("change", e=> {

    let data = inputDate.value;
    let diaSetmana = new Date(data).getDay();
    let festiuLocal = false;
    diesTancat.forEach(element => {
        if (element == diaSetmana) {
            festiuLocal = true;
        }
    });
    if (festiuLocal) {
        errorDate.classList.remove("display-none");
        inputDate.classList.add("input-error");
        inputDate.focus(); //Te deixa el focus on toca

        
    }else {
        inputDate.classList.remove("input-error");
        errorDate.classList.add("display-none");
    }
    festiu = festiuLocal;
});

const errorHora = document.getElementById("errorHora");
inputHora.addEventListener("change", (e)=> {


 if (inputHora.value > horaTancament || inputHora.value < horaObertura) {
        errorHora.classList.remove("display-none");
        dinsHorari = false;
        inputHora.classList.add("input-error");
        inputHora.focus(); //Te deixa el focus on toca
        
    }else {
        inputHora.classList.remove("input-error");
        errorHora.classList.add("display-none");
        dinsHorari = true;
    }
});

let reserves = JSON.parse(localStorage.getItem("reserves")) || []; //Si no existeix al localStorage es deixa un [] buit



formulari.addEventListener("submit", e=> {
    e.preventDefault();

    if (!dinsHorari || festiu) {
    }else {
        if(!(reserves.find(reserva => reserva.data === inputDate.value && reserva.hora === inputHora.value))) {
            reserves.push({
                nom: inputNombre.value,
                data: inputDate.value,
                hora: inputHora.value,
                nPersones: inputNPersones.value,
                contacte: inputContacte.value
            });
            localStorage.setItem("reserves", JSON.stringify(reserves)); 

            let resum = `¡Reserva realitzada correctament!
            Resumen:
            Nom: ${inputNombre.value}
            Data: ${inputDate.value}
            Hora: ${inputHora.value}
            Persones: ${inputNPersones.value}`;
            alert(resum);
            formulari.reset();
        }else {
            alert("La reserva ja existeix");
        }

    }
    

});



