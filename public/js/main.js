const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value; 
    if(cityVal === ""){
        city_name.innerText = 'plz write the name before search';
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ba17394b8bc8008152f073613e298ecc`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            //condition to  check sunny or cloudy
            if(tempMood == "clear"){
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
            temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }
           
        }catch{
        city_name.innerText = 'plz write the city name properly';    
        }
    }

}

submitBtn.addEventListener('click', getInfo);