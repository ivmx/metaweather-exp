const service = require('./weather.service');
const model = require('./weather.model');
const axios = require('axios');

function findItem(req, res, next, city) {
	const item = service.findWeather(id);
	if (!item) {
		return res.status(404).json({
			message: 'invalid item',
			errors: { id: 'is unknown' },
		});
	}
	req.item = item;
	next();
}

async function getWeatherInfo(woeid){
    const resWeather = await axios.get(`https://www.metaweather.com/api/location/${woeid}/`);
    return resWeather.data;
}

async function getCity(req, res, next) {
    try {
        var arr = [];
        const resCity = await axios.get('https://www.metaweather.com/api/location/search', { params: { query: req.params.city } });
        for (const [index, value] of resCity.data.entries()) {
            const valueWeatherInfo = await axios.get(`https://www.metaweather.com/api/location/${value.woeid}/`);
                         item = model.getWeather(value, valueWeatherInfo.data);
                         arr.push(item);
        }

        res.json(arr);
      } catch (err) {
        next(err);
      }
}


module.exports = {
	findItem,
	getCity
};
