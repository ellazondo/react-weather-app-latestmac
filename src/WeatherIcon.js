
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon (props) {

    const codeMapping = {
        "01d" : "CLEAR_DAY",
        "01n" : "CLEAR_NIGHT",
        "02d" : "PARTYLY_CLOUDY_DAY",
        "02n" : "PARTLY_CLOUDY_NIGHT",
        "013d" : "CLOUDY",
        "03n" : "CLOUDY",
        "04d" : "RAIN",
        "04n" : "RAIN",
        "09d" : "RAIN",
        "09n" : "RAIN",
        "10d" : "RAIN",
        "10n" : "RAIN",
        "11d" : "RAIN",
        "11n" : "RAIN",
        "13d" : "SNOW",
        "13n" : "SNOW",
        "50d" : "FOG",
        "50n" : "FOG",
    };

    return (
            <ReactAnimatedWeather
                icon= {codeMapping[props.code]}
                color= "#CCCCFF"
                size={60}
                animate={true}
            />
        );

    
    

}