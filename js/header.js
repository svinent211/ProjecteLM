const btnMenu = document.getElementById("btnMenu");
const navMenu = document.querySelector(".menu");
const btnClose = document.getElementById("btnMenu-close")


btnMenu.addEventListener("click", () => {
    navMenu.classList.add("display-block");
    btnClose.classList.remove("display-none")
});

btnClose.addEventListener("click", () => {
    navMenu.classList.remove("display-block")
    btnClose.classList.add("display-none")
});

const aHome = document.querySelector("#aHome");
const aReserves = document.querySelector("#aReserves");
const aSNosaltres = document.querySelector("#aSobreNosaltres");
const aCarta = document.querySelector("#aCarta");
const aContacte = document.querySelector("#aContacte");

aHome.addEventListener("click", ()=>{
    window.location.href= "/Projecte/index.html";
});
aReserves.addEventListener("click", ()=>{
    window.location.href= "/Projecte/reserves.html";
});
aSNosaltres.addEventListener("click", ()=> {
    window.location.href= "/Projecte/sobreNosaltres.html";
});
aCarta.addEventListener("click", ()=> {
    window.location.href = "/Projecte/carta.html";
});
aContacte.addEventListener("click", ()=> {
    window.location.href= "/Projecte/contacte.html";
});

//Treu /Projecte/nompagina.html
let url = window.location.pathname;
//Elimina /Projecte/
let pagina = url.substring(url.lastIndexOf('/')+ 1);

switch (pagina) {
    case "index.html":
        aHome.classList.add("pagina_activa");
        break;
    case "reserves.html":
        aReserves.classList.add("pagina_activa");
        break;
    case "sobreNosaltres.html":
        aSNosaltres.classList.add("pagina_activa");
        break;
    case "carta.html":
        aCarta.classList.add("pagina_activa");
        break;
    case "contacte.html":
        aContacte.classList.add("pagina_activa");
        break;
}
