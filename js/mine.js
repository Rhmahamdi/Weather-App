let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let today =document.getElementById("today");
let search =document.querySelector(".search");

var week=["Sunday","Monday","TuesDay","Wednesday","Thursday","Friday","Saturday"];
var year =["January","February","March","April","May","June","July","August","September","October","November","December"]


let newday =new Date()
day1.innerHTML=`${week[newday.getDay()]}`
 today.innerHTML=`${newday.getDate() }${ year[newday.getMonth()]}`
 

console.log(newday.getDay()+2)
if ([newday.getDay()]==6){
    day2.innerHTML=`${week[0]}`
    day3.innerHTML=`${week[1]}`
}
else{
    day2.innerHTML=`${week[newday.getDay()+1]}`
    day3.innerHTML=`${week[newday.getDay()+2]}`
}

 
 let countryy="cairo"

 async function forecast(countryy){
     let myData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9dc4125a13eb42419e5123257211309&q=${countryy}&days=3`);
     myData = await myData.json()
        
    document.querySelector(".country").innerHTML=`${myData.location.name}`
    document.querySelector(".degree").innerHTML=`${myData.current.temp_c}<span>&#176;</span>`
    document.querySelector(".img1").innerHTML=` <img src=" https:${myData.current.condition.icon}">`
    document.querySelector(".weatherstatus").innerHTML=`${myData.current.condition.text}`



    document.querySelector(".img2").innerHTML=` <img src=" https:${myData.forecast.forecastday[1].day.condition.icon}">`
    document.querySelector(".degree1").innerHTML=`${myData.forecast.forecastday[1].day.maxtemp_c}<span>&#176;</span>`
    document.querySelector(".degree2").innerHTML=`${myData.forecast.forecastday[1].day.mintemp_c}<span>&#176;</span>`
    document.querySelector(".weatherstatus2").innerHTML=`${myData.forecast.forecastday[1].day.condition.text}`



    
    document.querySelector(".img3").innerHTML=` <img src=" https:${myData.forecast.forecastday[2].day.condition.icon}">`
    document.querySelector(".degree4").innerHTML=`${myData.forecast.forecastday[2].day.maxtemp_c}<span>&#176;</span>`
    document.querySelector(".degree5").innerHTML=`${myData.forecast.forecastday[2].day.mintemp_c}<span>&#176;</span>`
    document.querySelector(".weatherstatus3").innerHTML=`${myData.forecast.forecastday[2].day.condition.text}`

 }

 forecast("cairo")


 var btn = document.querySelector(".btn1");
 btn.addEventListener("click" ,searchh)

  async function searchh(searchValue){
     searchValue = search.value.toLowerCase();

     let myData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=9dc4125a13eb42419e5123257211309&q=${searchValue}&days=3`);
     myData = await myData.json();     
         forecast(searchValue)

 }