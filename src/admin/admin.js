

const addButton = document.querySelector("#addButton");
const updateButton = document.querySelector("#updateButton");
const deleteButton = document.querySelector("#deleteButton");
const searchButton = document.querySelector("#searchButton");
const navbarButton = document.querySelector("#navbarButton");

const body = document.querySelector("#body");

// var carId,carName,carAge,carValue,carStyle;

addButton.addEventListener("click", async (e) => {
    e.preventDefault();
    await fetch("https://e2bf-46-106-12-145.ngrok.io/connect_database/routes/car/create.php?marka=son&model=a180&fiyat=300000&yakit=dizel&modelYili=2015&kilometre=100&imageLink=sddsdsdsd", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    }).then(resp => resp.json()).catch(e => console(new Error(e)));
})

document.querySelector(".tiles").addEventListener("click", (e) => {

    /// Spans captured
    const parentSelector = e.target.parentElement.parentElement;
    const childSelector = parentSelector.querySelectorAll("p")[0];
    const spanSelector = childSelector.querySelectorAll("span");
    const spanArray = [...spanSelector];

    let carKm,carMotor,carVites;

    let carMarka = parentSelector.querySelector("h3").innerHTML;
    let carPower = parentSelector.querySelector("div").firstElementChild.innerHTML;
    let fuelType = parentSelector.querySelector("div").firstElementChild.nextElementSibling.innerHTML;
    let carAge = parentSelector.querySelector("div").firstElementChild.nextElementSibling.nextElementSibling.innerHTML;
    let carValue = parentSelector.querySelector("strong").innerHTML;
    
    /// Values captured
    spanArray.map((index, i) => {
        switch (i) {
            case 0:
                carKm = index.innerHTML;
                break;
            case 1:
                carMotor = index.innerHTML;
                break;
            case 2:
                carVites = index.innerHTML;
                break;
            default:
                alert("Wrong something in switch/case.");
        }
    });

    

    const firstInputs = document.querySelectorAll("#inputs");
    const inputArray = [...firstInputs];

    inputArray.map((index, i) => {
        switch (i) {
            case 0:
                index.firstElementChild.value = carKm;
                index.firstElementChild.nextElementSibling.value = carMotor;
                index.firstElementChild.nextElementSibling.nextElementSibling.value = carVites;
                break;
            case 1:
                index.firstElementChild.value = carMarka;
                index.firstElementChild.nextElementSibling.value = carPower;
                index.firstElementChild.nextElementSibling.nextElementSibling.value = fuelType;
                break;
            case 2:
                index.firstElementChild.value = carValue;
                index.firstElementChild.nextElementSibling.value = carAge;
                break;
            default:
                alert("Wrong something in switch/case.");
        }
    })


})


// document.querySelector(".tiles").addEventListener("click", () => {

// })