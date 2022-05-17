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
    fetch("http://localhost:3000/products")
        .then(response => {
            return response.json()
        }).then(data => {
            // console.log(data);
            for (i = 0; i < 9; i++) {
                tiles.innerHTML += `
                <article style="background-image: url(&quot;/images/blog-${i+1}-720x480.jpg&quot;);">
                    <span class="image">
                        <img src="/images/product-1-720x480.jpg" alt="">
                    </span>
                    <header class="major">
                        <p>
                            <i class="fa fa-dashboard"></i><span>${data[i].id}</span>
                            <i class="fa fa-cube"></i><span>${data[i].categoryId}</span>
                            <i class="fa fa-cog"></i><span>Manual</span>
                        </p>
                        <h3>${data[i].productName}</h3>
                        <p><del>$11199.00</del> <strong id="carvalue">${data[i].quantityPerUnit}</strong></p>
                        <div><span id="carType">${data[i].unitsInStock} </span> <span id="fuelType">Benzin </span><span id="wheels">Orta Boy</span></div>
                        <h3 id="km">${data[i].unitsInStock}.000 km</h3>
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