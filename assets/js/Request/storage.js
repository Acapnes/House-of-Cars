
document.querySelector(".tiles").addEventListener("click", (e) => {
    const parentSelector = e.target.parentElement.parentElement;
    const childSelector = parentSelector.querySelectorAll("p")[0];
    const spanSelector = childSelector.querySelectorAll("span");
    const spanArray = [...spanSelector];
    console.log(spanSelector);

    carMarka = parentSelector.querySelector("h3").innerHTML;
    carPower = parentSelector.querySelector("div").firstElementChild.innerHTML;
    fuelType = parentSelector.querySelector("div").firstElementChild.nextElementSibling.innerHTML;
    carAge = parentSelector.querySelector("div").firstElementChild.nextElementSibling.nextElementSibling.innerHTML;
    carValue = parentSelector.querySelector("strong").innerHTML;


    /// Values captured
    spanArray.map((index, i) => {
        //  console.log(index.innerHTML);

        /// Add to localstorage
        switch (i) {
            case 0:
                window.localStorage.setItem("carKm", index.innerHTML);
                break;
            case 1:
                window.localStorage.setItem("carMotor", index.innerHTML);
                break;
            case 2:
                window.localStorage.setItem("carVites", index.innerHTML);
                break;
            default:
                alert("Wrong something in switch/case.");
        }
    });

    window.localStorage.setItem("carMarka", carMarka);
    window.localStorage.setItem("carPower", carPower);
    window.localStorage.setItem("fuelType", fuelType);
    window.localStorage.setItem("carAge", carAge);
    window.localStorage.setItem("carValue", carValue);


    window.location.href = "./details/car-details.html";
})