
const uname = document.querySelector("#uname");
const surname = document.querySelector("#surname");
const username = document.querySelector("#username");
const password = document.querySelector("#password");


const loginButton = document.querySelector("#registerButton").addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`https://example.com?name=${uname.value}&lastName=${surname.value}&password=${password.value}&userName=${username.value}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
        }).then((resp) => console.log(resp));
    // if (this.uname.value == " " || this.surname.value === "" || this.username.value === "" || this.password.value === "") {
    //     alert("Lütfen gerekli alanları doldurunuz.");
    // } else {
        
    // }

})