

const addButton = document.querySelector("#addButton");
const updateButton = document.querySelector("#updateButton");
const deleteButton = document.querySelector("#deleteButton");
const searchButton = document.querySelector("#searchButton");
const navbarButton = document.querySelector("#navbarButton");

const body = document.querySelector("#body")

navbarButton.addEventListener("click",(e)=>{
    body.className += " bg-[url('/images/banner-image-1-1920x700.jpg')] backdrop-blur-sm bg-white/30";
})