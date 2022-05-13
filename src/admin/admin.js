

const addButton = document.querySelector("#addButton");
const updateButton = document.querySelector("#updateButton");
const deleteButton = document.querySelector("#deleteButton");
const searchButton = document.querySelector("#searchButton");
const navbarButton = document.querySelector("#navbarButton");

const body = document.querySelector("#body");

var carId,carName,carAge,carValue,carStyle;

addButton.addEventListener("click", async (e)=>{
    e.preventDefault();
    await fetch("http://localhost:3000/products", {
        method: "POST",
        body: JSON.stringify({
            id:"23242",
            categoryId:"1",
            productName:"1",
            quantityPerUnit:"1",
            unitPrice:"1",
            unitsInStock:"1"
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(resp => resp.json()).catch(e => alert(new Error(e)));
})

document.querySelector(".tiles").addEventListener("click", (e) => {

    /// Spans captured
    const parentSelector = e.target.parentElement.parentElement;
    const childSelector = parentSelector.querySelectorAll("p")[0];
    const spanSelector = childSelector.querySelectorAll("span");
    const spanArray = [...spanSelector];

    carName = parentSelector.querySelector("h3").innerHTML;
    carValue = document.querySelector("#carvalue").innerHTML;
    carType = document.querySelector("#carType").innerHTML;
    fuelType = document.querySelector("#fuelType").innerHTML;
    wheels = document.querySelector("#wheels").innerHTML;

    /// Values captured
    spanArray.map((index, i) => {
        // console.log(index.innerHTML);

        /// Add to localstorage
        switch (i) {
            case 0:
                carId = index.innerHTML;
                break;  
            case 1:
                carName = index.innerHTML;
                break;
            case 2:
                carAge = index.innerHTML;
                break;
            default:
                alert("Wrong something in switch/case.");
        }
    });
})


document.querySelector(".tiles").addEventListener("click", () => {   
    const firstInputs = document.querySelectorAll("#inputs");
    const inputArray =[...firstInputs];

    inputArray.map((index,i)=>{
        switch(i){
            case 0:
                index.firstElementChild.value = carId;
                index.firstElementChild.nextElementSibling.value = carName;
                index.firstElementChild.nextElementSibling.nextElementSibling.value = carAge;
                break; 
            case 1:
                index.firstElementChild.value = carValue;
                index.firstElementChild.nextElementSibling.value = carType;
                index.firstElementChild.nextElementSibling.nextElementSibling.value = fuelType;
                break;
            case 2:
                index.firstElementChild.value = wheels;
                index.firstElementChild.nextElementSibling.value = window.localStorage.getItem("carName"); 
                index.firstElementChild.nextElementSibling.nextElementSibling.value = window.localStorage.getItem("carAge"); 
                break;
            default:
                alert("Wrong something in switch/case.");
        }
    })
})