
const uname = document.querySelector("#uname");
const surname = document.querySelector("#surname");
const username = document.querySelector("#username");
const password = document.querySelector("#password");


const loginButton = document.querySelector("#registerButton").addEventListener("click", (e) => {
    e.preventDefault();
    if (this.uname.value == " " || this.surname.value === "" || this.username.value === "" || this.password.value === "") {
        alert("Lütfen gerekli alanları doldurunuz.");
    } else {
        fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                surname: this.surname.value,
                username: this.username.value,
                password: this.password.value
            })
        }).then((resp) => resp.json()
        ).then((data) => {

            // window.location.href ="/src/index.html";
            // window.localStorage.setItem("username",this.username.value); 
            //window.localStorage.setItem("password",this.password.value); 
        })
    }

})