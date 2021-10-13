

// We could use graphql instead
const getWeather = function (basic, info) {
//    The current temperature as  `current_temp`.
//    - The city as  `city_name`.
//    - A property called `the_temp_color_value` based on the following criteria:
//                        - `the_temp` values < -1C should be coded  `#6699ff`
//                        - `the_temp` values > 23C should be coded `#cc0000`
//    - A property called `weather_icon_url` that is an URL to the MetaWeather “Weather States” icon applicable to the current weather in the response.
//                        - example: `https://www.metaweather.com/static/img/weather/png/h.png`
    let the_temp = info.consolidated_weather[0].the_temp;
    let state_abbr = info.consolidated_weather[0].weather_state_abbr;
    let temp_color_value = "";
    if(the_temp < -1) {
        temp_color_value = "#6699ff";
    }
    if(the_temp > 23) {
        temp_color_value = "#cc0000";
    }

    weather_icon = `https://www.metaweather.com/static/img/weather/png/${state_abbr}.png`;

    return {
        current_temp: info.consolidated_weather[0].the_temp,
        city_name: basic.title,
        the_temp_color_value: temp_color_value,
        weather_icon_url: weather_icon
    }
};

module.exports = { getWeather };
