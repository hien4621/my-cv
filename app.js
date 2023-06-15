let homecontent = document.querySelector("#home");
let resumecontent = document.querySelector("#resume");

let hometab = document.querySelector(".hometab");
let resumetab = document.querySelector(".resumetab");

hometab.addEventListener("click", () => {
    homecontent.classList.add("active");
    resumecontent.classList.remove("active");
}
)
resumetab.addEventListener("click", () => {
    homecontent.classList.remove("active");
    resumecontent.classList.add("active");
}
)