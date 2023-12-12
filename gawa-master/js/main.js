const hotels = [
  {
    name: "Adun Suites Hotel",
    review: "8.1",
    rating: "4",
    image: "images/hotelimg/Adun-suites.webp",
    price: "12,000",
    country: "illupeju",
  },
  {
    name: "Creme suites hotel",
    review: "8.1",
    rating: "5",
    image: "images/hotelimg/Creme-suites-hotel.jpg",
    price: "15,000",
    country: "Onipanu",
  },
  {
    name: "Radisson Blu Lagos Ikeja",
    review: "8.1",
    rating: "3",
    image: "images/hotelimg/RadissonBlue.jpg",
    price: "45,000",
    country: "Ikeja",
  },
  {
    name: "King's celiahotel",
    review: "8.1",
    rating: "4",
    image: "images/hotelimg/Kings-celiahotel.jpg",
    price: "18,000",
    country: "Yaba",
  },
  {
    name: "Paradise Hotel",
    review: "8.1",
    rating: "5",
    image: "images/hotelimg/paradise-Hotel.jpg",
    price: "20,000",
    country: "Obanikoro",
  },
  {
    name: "De-next hotel",
    review: "8.1",
    rating: "5",
    image: "images/hotelimg/De-next-hotel.jpg",
    price: "12,000",
    country: "Mushin",
  },
  {
    name: "Peace Land Hotel",
    review: "8.1",
    rating: "3",
    image: "images/hotelimg/Peace-Land-Hotel.jpg",
    price: "15,000",
    country: "Anthony",
  },
  {
    name: "Lagos Oriental Hotel",
    review: "8.1",
    rating: "4",
    image: "images/hotelimg/Lagos-Oriental-Hotel.webp",
    price: "80,000",
    country: "Oshodi",
  },
  {
    name: "The Cocoon Hotel",
    review: "8.1",
    rating: "5",
    image: "images/hotelimg/Th-Cocoon-hotel.png",
    price: "20,000",
    country: "MaryLand",
  },
  {
    name: "The AHI Residence",
    review: "8.1",
    rating: "4",
    image: "images/hotelimg/The-AHI-Residence.webp",
    price: "40,000",
    country: "Shomolu",
  },
  {
    name: "Legend Hotel Lagos Airport",
    review: "8.1",
    rating: "2",
    image: "images/hotelimg/legend.webp",
    price: "30,000",
    country: "Bariga",
  },
  {
    name: "Vintage Suites.jpeg",
    review: "8.1",
    rating: "4",
    image: "images/hotelimg/Vintage-Suites.jpeg",
    price: "60,000",
    country: "Surulere",
  },
];

const flight = [
  {
    name: "air line flight",
    review: "8.1",
    rating: "5",
    image: "images/Coming-Soon.png",
    price: "20,000",
    state: "lagos",
  },
  {
    name: "first flight",
    review: "8.1",
    rating: "2",
    image: "images/Coming-Soon.png",
    price: "10,000",
    state: "Abuja",
  },
  {
    name: "second flight",
    review: "8.1",
    rating: "3",
    image: "images/Coming-Soon.png",
    price: "20,000",
    state: "ilorin",
  },
  {
    name: "Thired flight",
    review: "8.1",
    rating: "4",
    image: "images/Coming-Soon.png",
    price: "70,000",
    state: "Ibadan",
  },
];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const locations = urlParams.get("location");
const price = urlParams.get("price");
// const country = urlParams.get("country");
if (locations) {
  let filteredHotels;
  filteredHotels = hotels.filter(
    (list) => list.country.toLowerCase() === locations.toLowerCase()
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
                    <div class="offers_price">₦${list.price}<span>per night</span></div>
                    <div class="rating_r rating_r_4 offers_rating" data-rating="4">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <p class="offers_text"></p>
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
} else if (price) {
  const minimmumPrice = price.split("-")[0].trim();
  const maximumPrice = price.split("-")[1].trim();
  filteredHotels = hotels.filter(
    (list) => list.price >= minimmumPrice && list.price <= maximumPrice
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
                    <div class="offers_price">₦${list.price}<span>per night</span></div>
                    <div class="rating_r rating_r_4 offers_rating" data-rating="4">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    // <p class="offers_text"></p>
                    
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
                    <div class="offers_price">₦${list.price}<span>per night</span></div>
                    <div class="rating_r rating_r_4 offers_rating" data-rating="4">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <p class="offers_text"></p>
                    
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

if (locations) {
  let filteredFlight;
  filteredFlight = flight.filter(
    (list) => list.state.toLowerCase() === locations.toLowerCase()
  );

  filteredFlight.forEach((list) => {
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
                <div class="offers_price">₦${list.price}<span></span></div>
                <div class="rating_r rating_r_4 offers_rating" data-rating="4">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
              
                
                <div class="button book_button book"><a
                        href="" >book<span></span><span></span><span></span></a></div>
                <div class="offer_reviews">
                    <div class="offer_reviews_content">
                        <div class="offer_reviews_title">very good</div>
                        <div class="offer_reviews_subtitle">10 reviews</div>
                    </div>
                    <div class="offer_reviews_rating text-center">8.1</div>
                </div>
            </div>
        </div>
    </div>
</div>`);
  });
} else {
  flight.forEach((list) => {
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
                    <div class="offers_price">${list.price}<span></span></div>
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
  let selectedCountry = $(".dropdown_item_select").find(":selected").val();
  window.location = `offers.html?location=${selectedCountry}`;

   
});

if(locations !== null ) {
  const selectedValue = $(".dropdown_item_select").find(":selected").val();

  // Now you can use the selectedValue variable as needed
  console.log("Selected Value:", selectedValue);
  
}



const flights = flight.map((list) => list.state);
flights.map((list) => {
  $(".dropdown_item_select2").append(`<option>${list}</option>`);
});

$(".dropdown_item_select2").on("change", () => {
  const selectedState = $(".dropdown_item_select2").find(":selected").val();
  window.location = `offers.html?location=${selectedState}`;
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
