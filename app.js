let homecontent = document.querySelector("#home");
let resumecontent = document.querySelector("#resume");
let portfoliocontent = document.querySelector("#portfolio");

let hometab = document.querySelector(".hometab");
let resumetab = document.querySelector(".resumetab");
let portfoliotab = document.querySelector(".portfoliotab");

hometab.addEventListener("click", () => {
    homecontent.classList.add("active");
    resumecontent.classList.remove("active");
    portfoliocontent.classList.remove("active");
}
)
resumetab.addEventListener("click", () => {
    homecontent.classList.remove("active");
    resumecontent.classList.add("active");
    portfoliocontent.classList.remove("active");
}
)
portfoliotab.addEventListener("click", () => {
    homecontent.classList.remove("active");
    resumecontent.classList.remove("active");
    portfoliocontent.classList.add("active");
}
)