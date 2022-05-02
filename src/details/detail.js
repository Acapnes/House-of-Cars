



window.addEventListener("load", () => {
    const parentDiv = document.querySelectorAll(".field.quarter");
    const chilDiv = [...parentDiv];
    chilDiv.map((e,i) => {
        const selected = e.lastElementChild;

        switch(i){
            case 0:
                selected.value = window.localStorage.getItem("carId");
                break;
            case 1:
                selected.value = window.localStorage.getItem("carName");
                break;
            case 2:
                selected.value = window.localStorage.getItem("carAge");
                break;
        }

        console.log(selected.textContent);
    })
})