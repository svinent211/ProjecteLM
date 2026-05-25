//Guardar informació del restaurant al localStorage
let dadesAguardar = {
    diesTancat: [1],
    horaObertura: "13:00",
    horaTancament: "23:00",
    maxPersones: 18
}
localStorage.setItem("dades", JSON.stringify(dadesAguardar));