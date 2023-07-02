const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');
const Container = document.querySelector('.OnlyForIndia');

// Render Country 
const renderCountry = function(data){
     const languages = Object.values(data.languages);
     const currencies = Object.values(data.currencies);
     const capital = Object.values(data.capital);
     const TimeZone = Object.values(data.timezones);
     const html = `
       <article class="country">
      <img class="country__img" src= "${data.flags.svg}">
      <div class="country__data">
        <h3 class="country__name"> ${data.name.official}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(1)} million people</p>         
        <p class="country__row"><span>🏛️</span>${capital}</p>
        <p class="country__row"><span>🗣️</span>${languages[0]}</p>
        <p class="country__row"><span>💰</span>${currencies[0].name}</p>
        <p class="country__row"><span>⌚️</span>${TimeZone}</p>
      </div>
     </article>`;
   countriesContainer.insertAdjacentHTML('beforeend',html);
   countriesContainer.style.opacity=1;
};

const getError= function(msg){
     countriesContainer.insertAdjacentText('beforeend',msg);
     countriesContainer.style.opacity=1;
   };
// const getMsg= function(){
//      const msg =`
//      <marquee width="50%" style="font-size: 2rem;">
//     Sorry this is Only For India, CheckOut "GeoLocation Project" to get your country same like this .Thank You ❤️ 
//      </marquee>`;
//      Container.insertAdjacentHTML('beforebegin',msg);
// }
const getCountry=async function(country){
     try{
     const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
     const data = await response.json();
     const [countrydata]= data;
     renderCountry(countrydata);
     }catch(err){
          console.log(err);
          getError(`🫤${err.message}`);
     }
     
}

btn.addEventListener('click',function(){
     getCountry('Bharat');
     // getMsg();
});


/*
const getCountry= function(country){
     fetch(`https://restcountries.com/v3.1/name/${country}`)
     .then((response)=>{
          console.log(response);
          return response.json();
     })
     .then((data)=>{
         const [countrydata]=data;
         console.log(countrydata);
         
         renderCountry(countrydata);

        
     })
};
getCountry('India');
*/
