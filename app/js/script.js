const body = document.body;
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll(".has-fade");
const btnHamburger = document.querySelector("#btn-hamburger");

btnHamburger.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElems.forEach(elem => {
            elem.classList.remove("fade-in");
            elem.classList.add("fade-out");
        });
    } else {
        body.classList.add("noscroll");
        header.classList.add("open");
        fadeElems.forEach(elem => {
            elem.classList.remove("fade-out");
            elem.classList.add("fade-in");
        });
    }
});