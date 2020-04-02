const axios = require('axios');

let getLugarLtdLong = async(dir) => {

    let encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: { 'x-rapidapi-key': 'f8ebe67f67msh19da96cf8102c0fp1acd8cjsn94111623aa42' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(` No hay resultaos para ${ dir } ...`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLtdLong
}