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