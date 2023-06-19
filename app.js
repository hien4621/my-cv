let homecontent = document.querySelector("#home");
let resumecontent = document.querySelector("#resume");
let portfoliocontent = document.querySelector("#portfolio");
let blogcontent = document.querySelector("#blog");
let contactcontent = document.querySelector("#contact");

let hometab = document.querySelector(".hometab");
let resumetab = document.querySelector(".resumetab");
let portfoliotab = document.querySelector(".portfoliotab");
let blogtab = document.querySelector(".blogtab");
let contacttab = document.querySelector(".contacttab");

hometab.addEventListener("click", () => {
    homecontent.classList.add("active");
    resumecontent.classList.remove("active");
    portfoliocontent.classList.remove("active");
    blogcontent.classList.remove("active");
    contactcontent.classList.remove("active");
}
)
resumetab.addEventListener("click", () => {
    homecontent.classList.remove("active");
    resumecontent.classList.add("active");
    portfoliocontent.classList.remove("active");
    blogcontent.classList.remove("active");
    contactcontent.classList.remove("active");
}
)
portfoliotab.addEventListener("click", () => {
    homecontent.classList.remove("active");
    resumecontent.classList.remove("active");
    portfoliocontent.classList.add("active");
    blogcontent.classList.remove("active");
    contactcontent.classList.remove("active");
}
)
blogtab.addEventListener("click", () => {
    homecontent.classList.remove("active");
    resumecontent.classList.remove("active");
    portfoliocontent.classList.remove("active");
    blogcontent.classList.add("active");
    contactcontent.classList.remove("active");
}
)
contacttab.addEventListener("click", () => {
    homecontent.classList.remove("active");
    resumecontent.classList.remove("active");
    portfoliocontent.classList.remove("active");
    blogcontent.classList.remove("active");
    contactcontent.classList.add("active");
}
)