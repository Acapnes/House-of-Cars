
const username = document.querySelector("#username");
const password = document.querySelector("#password");



const dataButton = document.querySelector("#dataButton").addEventListener("click", () => {
    fetch("http://localhost:3000/users").then((e) => e.json()).then((e) => console.log(e));
})
const loginButton = document.querySelector("#loginButton").addEventListener("click", () => {
    fetch("http://localhost:3000/users/login",{
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email: this.username.value,
            password: this.password.value
        })
    }).then((resp) => resp.json()
    ).then((data)=>{
        console.log(data);
       // window.location.href ="/src/index.html";
       // window.localStorage.setItem("username",this.username.value); 
    //window.localStorage.setItem("password",this.password.value); 
    })
})