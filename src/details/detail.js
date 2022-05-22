



window.addEventListener("load", () => {
    const parentDiv = document.querySelectorAll(".field.quarter");
    const chilDiv = [...parentDiv];
    chilDiv.map((e, i) => {
        const selected = e.lastElementChild;

        switch (i) {
            case 0:
                selected.value = window.localStorage.getItem("carMarka");
                break;
            case 1:
                selected.value = window.localStorage.getItem("carVites");
                break;
            case 2:
                selected.value = window.localStorage.getItem("carValue");
                break;
            case 3:
                selected.value = window.localStorage.getItem("carAge");
                break;
            case 4:
                selected.value = window.localStorage.getItem("carKm");
                break;
            case 5:
                selected.value = window.localStorage.getItem("fuelType");
                break;
            case 6:
                selected.value = window.localStorage.getItem("carMotor");
                break;
            case 7:
                selected.value = window.localStorage.getItem("carPower");
                break;
        }

        console.log(selected.textContent);
    })
})