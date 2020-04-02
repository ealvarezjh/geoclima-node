const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=b69446e640a3e3c7d1524c0c0e4be5a7&units=metric`);
    
    return resp.data.main.temp;

}


module.exports = {
    getClima
}