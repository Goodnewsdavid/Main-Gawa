const hotels = [
  {
    name: "Firenze Apartments Lekki",
    review: "8.1",
    rating: "4",
    image: "images/hotelimg/hotel-img-1.webp",
    price: "70,0000",
    country: "Nigeria",
  },
  {
    name: "Titanic Ocean",
    review: "8.1",
    rating: "5",
    image: "images/hotelimg/hotel-img-2.webp",
    price: "105,0000",
    country: "United State Of America",
  },
  {
    name: "Radisson Blu Lagos Ikeja",
    review: "8.1",
    rating: "3",
    image: "images/hotelimg/RadissonBlue.jpg",
    price: "45,000",
    country: "Dubai",
  },
  {
    name: "Lagos Continental Hotel",
    review: "8.1",
    rating: "4",
    image: "images/hotelimg/lagos-Continental.webp",
    price: "80,000",
    country: "Greece",
  },
  {
    name: "Four Points by Sheraton Lagos ",
    review: "8.1",
    rating: "5",
    image: "images/hotelimg/fourPoint.webp",
    price: "200,000",
    country: "Scotland",
  },
  {
    name: "Lagos Marriott Hotel Ikeja",
    review: "8.1",
    rating: "5",
    image: "images/hotelimg/Lagos-Marriott-Hotel.webp",
    price: "80,000",
    country: "France",
  },
  {
    name: "White Emirates Hotel and Apartment",
    review: "8.1",
    rating: "3",
    image: "images/hotelimg/White-Emirates-Hotel-and-Apartment.webp",
    price: "55,000",
    country: "London",
  },
  {
    name: "Lagos Oriental Hotel",
    review: "8.1",
    rating: "4",
    image: "images/hotelimg/Lagos-Oriental-Hotel.webp",
    price: "80,000",
    country: "Portugal",
  },
  {
    name: "Gemstone homes and comfort",
    review: "8.1",
    rating: "5",
    image: "images/hotelimg/Gemstone-homes-and-comfort.webp",
    price: "20,000",
    country: "Italy",
  },
  {
    name: "MITOS LUXURY SUITES (BODE THOMAS)",
    review: "8.1",
    rating: "4",
    image: "images/hotelimg/mitos.webp",
    price: "40,000",
    country: "Canada",
  },
  {
    name: "Legend Hotel Lagos Airport",
    review: "8.1",
    rating: "2",
    image: "images/hotelimg/legend.webp",
    price: "30,000",
    country: "Mexico",
  },
  {
    name: "Urban Height",
    review: "8.1",
    rating: "4",
    image: "images/hotelimg/urban-Height.webp",
    price: "80,0000",
    country: "Qatar",
  },
];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const locations = urlParams.get("location");
const price = urlParams.get("price");
if (locations) {
  let filteredHotels;
   filteredHotels = hotels.filter(
    (list) => list.country.toLowerCase() === locations.toLowerCase()
  );
  
+


  
  filteredHotels.forEach((list) => {
    $(".offers_grid").append(`<div class="offers_item rating_${list.rating}">
        <div class="row">
            <div class="col-lg-1 temp_col"></div>
            <div class="col-lg-3 col-1680-4">
                <div class="offers_image_container">
                    <!-- Image by https://unsplash.com/@kensuarez -->
                    <div class="offers_image_background"
                        style="background-image:url(${list.image})"></div>
                    <div class="offer_name"><a href="single_listing.html">${list.name}</a></div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="offers_content">
                    <div class="offers_price">${list.price}<span>per night</span></div>
                    <div class="rating_r rating_r_4 offers_rating" data-rating="4">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
                        Lorem ipsum dolor sit amet.</p>
                    <div class="offers_icons">
                        <ul class="offers_icons_list">
                            <li class="offers_icons_item"><img src="images/post.png" alt="">
                            </li>
                            <li class="offers_icons_item"><img src="images/compass.png" alt="">
                            </li>
                            <li class="offers_icons_item"><img src="images/bicycle.png" alt="">
                            </li>
                            <li class="offers_icons_item"><img src="images/sailboat.png" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="button book_button"><a
                            href="#">book<span></span><span></span><span></span></a></div>
                    <div class="offer_reviews">
                        <div class="offer_reviews_content">
                            <div class="offer_reviews_title">very good</div>
                            <div class="offer_reviews_subtitle">100 reviews</div>
                        </div>
                        <div class="offer_reviews_rating text-center">8.1</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
  });
  
  
}else if(price){
  
  const minimmumPrice = price.split("-")[0].trim();
    const maximumPrice = price.split("-")[1].trim();
  filteredHotels = hotels.filter(
    (list) =>list.price >= minimmumPrice && list.price <= maximumPrice
  );

  filteredHotels.forEach((list) => {
    $(".offers_grid").append(`<div class="offers_item rating_${list.rating}">
        <div class="row">
            <div class="col-lg-1 temp_col"></div>
            <div class="col-lg-3 col-1680-4">
                <div class="offers_image_container">
                    <!-- Image by https://unsplash.com/@kensuarez -->
                    <div class="offers_image_background"
                        style="background-image:url(${list.image})"></div>
                    <div class="offer_name"><a href="single_listing.html">${list.name}</a></div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="offers_content">
                    <div class="offers_price">${list.price}<span>per night</span></div>
                    <div class="rating_r rating_r_4 offers_rating" data-rating="4">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
                        Lorem ipsum dolor sit amet.</p>
                    <div class="offers_icons">
                        <ul class="offers_icons_list">
                            <li class="offers_icons_item"><img src="images/post.png" alt="">
                            </li>
                            <li class="offers_icons_item"><img src="images/compass.png" alt="">
                            </li>
                            <li class="offers_icons_item"><img src="images/bicycle.png" alt="">
                            </li>
                            <li class="offers_icons_item"><img src="images/sailboat.png" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="button book_button"><a
                            href="#">book<span></span><span></span><span></span></a></div>
                    <div class="offer_reviews">
                        <div class="offer_reviews_content">
                            <div class="offer_reviews_title">very good</div>
                            <div class="offer_reviews_subtitle">100 reviews</div>
                        </div>
                        <div class="offer_reviews_rating text-center">8.1</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
  });
} else {
  hotels.forEach((list) => {
    $(".offers_grid").append(`<div class="offers_item rating_${list.rating}">
        <div class="row">
            <div class="col-lg-1 temp_col"></div>
            <div class="col-lg-3 col-1680-4">
                <div class="offers_image_container">
                    <!-- Image by https://unsplash.com/@kensuarez -->
                    <div class="offers_image_background"
                        style="background-image:url(${list.image})"></div>
                    <div class="offer_name"><a href="single_listing.html">${list.name}</a></div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="offers_content">
                    <div class="offers_price">${list.price}<span>per night</span></div>
                    <div class="rating_r rating_r_4 offers_rating" data-rating="4">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <p class="offers_text">Suspendisse potenti. In faucibus massa. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.
                        Lorem ipsum dolor sit amet.</p>
                    <div class="offers_icons">
                        <ul class="offers_icons_list">
                            <li class="offers_icons_item"><img src="images/post.png" alt="">
                            </li>
                            <li class="offers_icons_item"><img src="images/compass.png" alt="">
                            </li>
                            <li class="offers_icons_item"><img src="images/bicycle.png" alt="">
                            </li>
                            <li class="offers_icons_item"><img src="images/sailboat.png" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="button book_button"><a
                            href="#">book<span></span><span></span><span></span></a></div>
                    <div class="offer_reviews">
                        <div class="offer_reviews_content">
                            <div class="offer_reviews_title">very good</div>
                            <div class="offer_reviews_subtitle">100 reviews</div>
                        </div>
                        <div class="offer_reviews_rating text-center">8.1</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
  });
}






const countries = hotels.map((list) => list.country);
countries.map((list) => {
  $(".dropdown_item_select").append(`<option>${list}</option>`);
});

$(".dropdown_item_select").on("change", () => {
  const selectedCountry = $(".dropdown_item_select").find(":selected").val();
  window.location = `offers.html?location=${selectedCountry}`;
});


$(".pricing-tag").append(`
  <option>20,000 - 50,000</option>
  <option>50,000 - 65,000</option>
  <option>70,000 - 80,000</option>
  <option>80,000 - 90,000</option>`);

$(".pricing-tag").on("change", () => {
  const selectedPrice = $(".pricing-tag").find(":selected").val();
  window.location = `offers.html?price=${selectedPrice}`;

});




