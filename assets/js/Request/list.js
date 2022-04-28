
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
            
            for (i = 0; i < 10; i++) {
                const newCar = document.createElement("article");
                const newImg = document.createElement("img");
                const newDiv = document.createElement("div");
                const newSpan = document.createElement("span");
                const newHeader = document.createElement("header");
                const newP = document.createElement("p");
                const newBottomP1 = document.createElement("p");
                const newBottomP2 = document.createElement("p");
                const newI1 = document.createElement("i");
                const newI2 = document.createElement("i");
                const newI3 = document.createElement("i");
                const newh3 = document.createElement("h3");
                const newLink = document.createElement("a");

                newh3.appendChild(document.createTextNode("Lorem ipsum dolor sit amet, consectetur"));

                ///Bg-image
                newImg.src = "/images/about-fullscreen-1-1920x700.jpg";
                newImg.alt="";
                newSpan.className = "image";
                newSpan.style.display ="none";

                ///P
                newI1.className = "fa fa-dashboard";
                newI1.style.marginRight = "10px";
                newI1.textContent = "130.000km ";
                newI2.className = "fa fa-cube";
                newI2.textContent = data.data[i]["name"];
                newI2.style.marginRight = "10px";
                newI3.className = "fa fa-cog";
                newI3.textContent = data.data[i]["id"];
                newP.style.marginBottom = "10px";

                newBottomP1.innerHTML = "<del>$11199.00</del>";
                newBottomP1.innerHTML += "<strong> $11179.00</strong>";
                newBottomP1.style.marginBottom="5.6px";

                newBottomP2.textContent = "190 hp / Petrol / 2008 / Used vehicle";
                newBottomP2.style.marginBottom="20px";


                ///Div
                newLink.className = "button small next";
                newLink.href = "car-details.html";
                newLink.textContent = "View Car";
                newDiv.className = "major-actions";

                ///Diğer Eklemeler
                newSpan.appendChild(newImg);
                newDiv.appendChild(newLink);
                newDiv.appendChild(newLink);

                ///Header eklemeleri
                newP.appendChild(newI1);
                newP.appendChild(newI2);
                newP.appendChild(newI3);
                newHeader.appendChild(newP);
                newHeader.appendChild(newh3);
                newHeader.appendChild(newBottomP1);
                newHeader.appendChild(newBottomP2);
                newHeader.appendChild(newDiv);

                ///Araba değişkeni eklemeleri
                newCar.appendChild(newSpan);
                newCar.appendChild(newHeader);

                ///ListBody Eklemeleri
                listBody.appendChild(newCar);
                console.log(newCar);
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