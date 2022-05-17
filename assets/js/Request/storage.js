
document.querySelector(".tiles").addEventListener("click", (e) => {
    const parentSelector = e.target.parentElement.parentElement;
    const childSelector = parentSelector.querySelectorAll("p")[0];
    const spanSelector = childSelector.querySelectorAll("span");
    const spanArray = [...spanSelector];
    console.log(spanSelector);
    /// Values captured
    spanArray.map((index, i) => {
        //  console.log(index.innerHTML);

        /// Add to localstorage
        switch (i) {
            case 0:
                window.localStorage.setItem("carId", index.innerHTML);
                break;
            case 1:
                window.localStorage.setItem("carName", index.innerHTML);
                break;
            case 2:
                window.localStorage.setItem("carAge", index.innerHTML);
                break;
            default:
                alert("Wrong something in switch/case.");
        }
    });
    window.location.href = "./details/car-details.html";
})