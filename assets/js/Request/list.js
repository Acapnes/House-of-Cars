// Fetch data when window load
window.addEventListener("load", loadEvents);
const listBody = document.querySelector(".tiles");
const carDetailsButton = document.querySelector("#carDetailsButton");

const tiles = document.querySelector(".tiles");
// carDetailsButton.addEventListener("click", function getDetails(e) {
//     /// Detaylar butonuna basıldığında basılan butonun içinde olduğu article bölümündeki arabanın detaylarını php dosyasına postylar ve arabanın idsini getler.
//     /// daha sonra gelen idyi sessionstorage'a kaydeder ve detaylar sayfasına yönlendirilir detaylar sayfasının onloadında ise id sessionstorage'dan çekilir ve id post yapılır.
//     /// yapılan id post ile arabanın detayları get edilir ve ekrana yazdırılır.
// });


function loadEvents() {
    fetching();
}
function visitorCounter() {

}
function fetching() {
    fetch("https://aad1-81-213-45-226.ngrok.io/connect_database/routes/car/read.php")
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(data["cars"].length);
            for (i = 0; i < data["cars"].length; i++) {
                // Background image kodu
                // background-image: url(&quot;/images/blog-a-720x480.jpg&quot;);
                tiles.innerHTML += `
                <article style="">
                    <span class="image">
                        <img src="/images/product-1-720x480.jpg" alt="">
                    </span>
                    <header class="major">
                        <p>
                            <i class="fa fa-dashboard"></i><span>${data["cars"][i].km}km</span>
                            <i class="fa fa-cube"></i><span>${data["cars"][i].model}</span>
                            <i class="fa fa-cog"></i><span>${data["cars"][i].yas}</span>
                        </p>
                        <h3>${data["cars"][i].marka}</h3>
                        <p><del>$11199.00</del> <strong id="carvalue">${data["cars"][i].marka}</strong></p>
                        <div><span id="carType">a</span> <span id="fuelType">${data["cars"][i].yakit}</span><span id="wheels">Orta Boy</span></div>
                        <h3 id="km">${data["cars"][i].km}km</h3>
                        <div class="major-actions">
                            <a class="buttonsmallnext">View Car</a>
                        </div>
                    </header>
                </article>
                `;
            }
        }).catch(err => {
            console.err(err, "Error!");
        })
}