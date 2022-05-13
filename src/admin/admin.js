

const addButton = document.querySelector("#addButton");
const updateButton = document.querySelector("#updateButton");
const deleteButton = document.querySelector("#deleteButton");
const searchButton = document.querySelector("#searchButton");
const navbarButton = document.querySelector("#navbarButton");

const body = document.querySelector("#body");


document.querySelector(".tiles").addEventListener("click", (e) => {
    
    const parentSelector = e.target.parentElement.parentElement;
    const childSelector = parentSelector.querySelectorAll("p")[0];
    const spanSelector = childSelector.querySelectorAll("span");
    const spanArray = [...spanSelector];
    
    const firstInputs = document.querySelectorAll("#inputs");
    const inputArray =[...firstInputs];

    inputArray.map((index,i)=>{
        switch(i){
            case 0:
                index.firstElementChild.value = window.localStorage.getItem("carId"); 
                index.firstElementChild.nextElementSibling.value = window.localStorage.getItem("carName"); 
                index.firstElementChild.nextElementSibling.nextElementSibling.value = window.localStorage.getItem("carAge"); 
                break; 
            case 1:
                index.firstElementChild.value = window.localStorage.getItem("carId"); 
                index.firstElementChild.nextElementSibling.value = window.localStorage.getItem("carName"); 
                index.firstElementChild.nextElementSibling.nextElementSibling.value = window.localStorage.getItem("carAge"); 
                break;
            case 2:
                index.firstElementChild.value = window.localStorage.getItem("carId"); 
                index.firstElementChild.nextElementSibling.value = window.localStorage.getItem("carName"); 
                index.firstElementChild.nextElementSibling.nextElementSibling.value = window.localStorage.getItem("carAge"); 
                break;
            default:
                alert("Wrong something in switch/case.");
        }
    })


    // /// Values captured
    // spanArray.map((index,i) => {
    //     console.log(index.innerHTML);

        
    // });

    ///window.location.href = "./details/car-details.html";
})