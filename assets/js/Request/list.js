
// Fetch data when window load
window.addEventListener("load", fetching);
const listBody = document.querySelector(".tiles");
const carDetailsButton = document.querySelector("#carDetailsButton");

carDetailsButton.addEventListener("click",function getDetails(e){
    /// Detaylar butonuna basıldığında basılan butonun içinde olduğu article bölümündeki arabanın detaylarını php dosyasına postylar ve arabanın idsini getler.
    /// daha sonra gelen idyi sessionstorage'a kaydeder ve detaylar sayfasına yönlendirilir detaylar sayfasının onloadında ise id sessionstorage'dan çekilir ve id post yapılır.
    /// yapılan id post ile arabanın detayları get edilir ve ekrana yazdırılır.
});

function fetching() {
    fetch("https://api.coinbase.com/v2/currencies")
        .then(response => {
            return response.json()
        }).then(data => {
            console.log(data.data);
            for (i = 0; i < 10; i++) {
                document.querySelector(".tiles").innerHTML +=`
                <article>
                    <span class="image">
                        <img src="images/product-1-720x480.jpg" alt="" />
                    </span>
                    <header class="major">
                        <p>
                            <i class="fa fa-dashboard"></i>${data.data[i]["id"]};
                            <i class="fa fa-cube"></i> 1800cc&nbsp;&nbsp;
                            <i class="fa fa-cog"></i> Manual
                        </p>
                        <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                        <p><del>$11199.00</del> <strong> $11179.00</strong></p>
                        <p>190 hp / Petrol / 2008 / Used vehicle</p>
                        <div class="major-actions">
                            <a href="car-details.html" class="button small next">View Car</a>
                        </div>
                    </header>
                </article>
                `;
            }
        }).catch(err => {
            console.err(err, "Error!");
        })
}



/*
                <article>
                    <span class="image">
                        <img src="images/product-1-720x480.jpg" alt="" />
                    </span>
                    <header class="major">
                        <p>
                            <i class="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;
                            <i class="fa fa-cube"></i> 1800cc&nbsp;&nbsp;
                            <i class="fa fa-cog"></i> Manual
                        </p>
                        <h3>Lorem ipsum dolor sit amet, consectetur</h3>
                        <p><del>$11199.00</del> <strong> $11179.00</strong></p>
                        <p>190 hp / Petrol / 2008 / Used vehicle</p>
                        <div class="major-actions">
                            <a href="car-details.html" class="button small next">View Car</a>
                        </div>
                    </header>
                </article>
*/