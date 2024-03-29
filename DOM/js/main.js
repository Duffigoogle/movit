//grab the mobile nav element
let mobileNavElem = document.getElementById("mobile-nav");


// hamburger display function

function displayMobileNav() {
    // console.log("PROF!!!!!");
    mobileNavElem.classList.toggle("show");
}


// Grab form elements
const formElem = document.getElementById('location-form');
const inputElem = document.getElementById('location-input');
const weatherInfoElem = document.getElementById('weather-info');




function fetchAPI() {
    const name = inputElem.value.trim();
     // const APIKey = 'YOUR-API-KEY';
     fetch(`https://restcountries.com/v3.1/name/${name}`)
     .then(response => response.json())
     .then(data => {
       console.log(data);
     })
     .catch(error => {
       console.log(error);
     });
}

// formElem.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = inputElem.value.trim();
    
//     // variable called API Key
//     // const APIKey = 'YOUR-API-KEY';
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         // renderWeatherData(data);
//       })
//       .catch(error => {
//         console.log(error);
//         weatherInfoElem.innerHTML = '<p class="text-danger">Please try again!</p>';
//       });

//     inputElem.value = '';
//   });


//   function renderWeatherData(data) {
//     const country = data.location;
//     const currentWeather = data.current;

//     const html = `
//       <h2 class="text-center">${location.name}, ${location.country}</h2>
//       <div class="text-center">
//         <img src="${currentWeather.weather_icons[0]}" alt="${currentWeather.weather_descriptions[0]}" class="weather-icon">
//         <p>${currentWeather.weather_descriptions[0]}</p>
//         <p>Temperature: ${currentWeather.temperature}°C</p>
//         <p>Feels Like: ${currentWeather.feelslike}°C</p>
//         <p>Wind Speed: ${currentWeather.wind_speed} km/s</p>
//         <p>Humidity: ${currentWeather.humidity}%</p>
//         <p>UV Index: ${currentWeather.uv_index}</p>
//         <p>Observation Time: ${currentWeather.observation_time}</p>
//       </div>
//     `;

//     weatherInfo.innerHTML = html;
//   }


// Render featured collection

// grab the collection div



// fetching
async function fetchData(apiURL) {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    
    if(!data) {
      return;
    }
    const collectionElem = document.getElementById("collection");
    
    data.map((item) => {
      let cardDiv = document.createElement("div");
      cardDiv.className = "w-[300px] border p-1 rounded-xl cursor-pointer hover:shadow-2xl mt-4";
      cardDiv.innerHTML = 
      `
      <img src=${item.imgSrc} alt="" class="rounded-xl">
      <p class="text-xs text-gray-500">${item.category}</p>
      <h4 class="font-bold">${item.productName}</h4>
      <i class="fa fa-star text-orange-400" aria-hidden="true"></i>
      <i class="fa fa-star text-orange-400" aria-hidden="true"></i>
      <i class="fa fa-star text-orange-400" aria-hidden="true"></i>
      <i class="fa fa-star text-orange-400" aria-hidden="true"></i>
      <i class="fa fa-star text-orange-400" aria-hidden="true"></i>
      <div class="flex justify-between items-center">
          <p class="font-bold text-green-800">$${item.price}</p>
          <a href="#" class="border p-2 bg-green-200 rounded-full">
              <i class="fa fa-shopping-cart text-green-800" aria-hidden="true"></i>
          </a>
      </div>
      `
      collectionElem.appendChild(cardDiv);
    })
  } catch (error) {
    console.error("Error loading JSON file", error)
  }
}

fetchData("../asset/data/collection.json");




// fetching
async function fetchShopData() {
  try {
    const response = await fetch("../asset/data/shop.json");
    const data3 = await response.json();
    console.log(data3);
    
    if(!data3) {
      return;
    }
    const collectionElem = document.getElementById("shop");
    
    data3.map((item) => {
      let cardDiv = document.createElement("div");
      cardDiv.className = "w-[300px] border p-1 rounded-xl cursor-pointer hover:shadow-2xl mt-4";
      cardDiv.innerHTML = 
      `
      <img src=${item.imgSrc} alt="" class="rounded-xl">
      <p class="text-xs text-gray-500">${item.category}</p>
      <h4 class="font-bold">${item.productName}</h4>
      <i class="fa fa-star text-orange-400" aria-hidden="true"></i>
      <i class="fa fa-star text-orange-400" aria-hidden="true"></i>
      <i class="fa fa-star text-orange-400" aria-hidden="true"></i>
      <i class="fa fa-star text-orange-400" aria-hidden="true"></i>
      <i class="fa fa-star text-orange-400" aria-hidden="true"></i>
      <div class="flex justify-between items-center">
          <p class="font-bold text-green-800">$${item.price}</p>
          <a href="#" class="border p-2 bg-green-200 rounded-full">
              <i class="fa fa-shopping-cart text-green-800" aria-hidden="true"></i>
          </a>
      </div>
      `
      collectionElem.appendChild(cardDiv);
    })
  } catch (error) {
    console.error("Error loading JSON file", error)
  }
}
fetchShopData();

// fetching blog data
async function fetchBlogData() {
  try {
    const response = await fetch("../asset/data/blog.json");
    const data2 = await response.json();
    console.log(data2);
    
    if(!data2) {
      return;
    }
    const blogElem = document.getElementById("blog-container");
    
    data2.map((item) => {
      let cardDiv = document.createElement("div");

      cardDiv.innerHTML = 
      `
      <p  class=" text-5xl text-gray-300 ml-[155px] mb-[-5px] font-bold">${item.date}</p>
      <div class="img-div flex items-center mx-40 gap-10">
          <div class="w-[600px] h-[350px] overflow-hidden blog-card">
            <img class="w-full mt-[-140px]" src=${item.imgPath} alt="" >
           </div>
          
           <div class="jersey">
            <h3 class="font-bold text-xl">${item.title}</h3>
        
            <p class="text-xs py-4">${item.excerpt}</p>
        
            <a href="" class="font-bold text-sm">READ MORE......</a>
           </div>
        
        </div>
      `
      blogElem.appendChild(cardDiv);
    })
  } catch (error) {
    console.error("Error loading JSON file", error)
  }
}

fetchBlogData();