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
            //console.log(data);
            for (i = 0; i < 4; i++) {
                tiles.innerHTML += `
                <article style="background-image: url(&quot;https://cdnepws.azureedge.net/getmedia/52a90001-4daf-4ae7-b685-2d45156e99ae/fiesta_1.png.aspx?width=768&height=432&ext=.png&quot;);">
                    <span class="image">
                        <img src="" alt="">
                    </span>
                    <header class="major">
                        <p>
                            <i class="fa fa-dashboard"></i><span>${i}km</span>
                            <i class="fa fa-cube"></i><span>motor</span>
                            <i class="fa fa-cog"></i><span>vites</span>
                        </p>
                        <h3>marka</h3>
                        <p><del>lessPrice</del> <strong id="carvalue">fiyat</strong></p>
                        <div class="text-3xl"><span id="carPower" >guc</span> <span id="fuelType"> yakit </span><span id="age">yas</span> </span></div>
                        <div class="major-actions">
                            <a class="button next scrolly bg-red-700">View Car</a>
                        </div>
                    </header>
                </article>
                `;
            }
        })
}



// function fetching() {
//     fetch("https://e2bf-46-106-12-145.ngrok.io/connect_database/routes/car/read.php")
//         .then(response => {
//             return response.json()
//         }).then(data => {
//             console.log(data["cars"]);
//             for (i = 0; i < data["cars"].length; i++) {
//                 let lessPrice = data["cars"][i].fiyat - 500;
//                 // Background image kodu
//                 // background-image: url(&quot;/images/blog-a-720x480.jpg&quot;);
//                 // ${data["cars"][i].imageLink}
//                 tiles.innerHTML += `
//                 <article style="background-image: url(&quot;/images/blog-a-720x480.jpg&quot;);">
//                     <span class="image">
//                         <img src="" alt="">
//                     </span>
//                     <header class="major">
//                         <p>
//                             <i class="fa fa-dashboard"></i><span>${data["cars"][i].km}km</span>
//                             <i class="fa fa-cube"></i><span>${data["cars"][i].motor}</span>
//                             <i class="fa fa-cog"></i><span>${data["cars"][i].vites}</span>
//                         </p>
//                         <h3>${data["cars"][i].marka}</h3>
//                         <p><del>${lessPrice}</del> <strong id="carvalue">$${data["cars"][i].fiyat}</strong></p>
//                         <div><span id="carType">a</span> <span id="fuelType">${data["cars"][i].yakit}</span><span id="age">${data["cars"][i].age}</span></div>
//                         <div class="major-actions">
//                             <a class="buttonsmallnext">View Car</a>
//                         </div>
//                     </header>
//                 </article>
//                 `;
//             }
//         }).catch(err => {
//             console.err(err, "Error!");
//         })
// }