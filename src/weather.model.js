


const getWeather = function (basic, info) {
//    The current temperature as  `current_temp`.
//    - The city as  `city_name`.
//    - A property called `the_temp_color_value` based on the following criteria:
//                        - `the_temp` values < -1C should be coded  `#6699ff`
//                        - `the_temp` values > 23C should be coded `#cc0000`
//    - A property called `weather_icon_url` that is an URL to the MetaWeather “Weather States” icon applicable to the current weather in the response.
//                        - example: `https://www.metaweather.com/static/img/weather/png/h.png`
    let the_temp = info.consolidated_weather[0].the_temp;
    let temp_color_value = "#cc0000";
    if(the_temp < -1) {
        temp_color_value = "#6699ff";
    }

    return {
        current_temp: info.consolidated_weather[0].the_temp,
        city_name: basic.title,
        the_temp_color_value: "#6699ff",
        weather_icon_url: "https://www.metaweather.com/static/img/weather/png/h.png"
    }
};

module.exports = { getWeather };
