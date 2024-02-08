import { Routes ,Route} from "react-router-dom";
import { Weather } from "../components/Weather.jsx";
import { Notfound } from "../components/Notfound.jsx";
import { ForecastWeather } from "../components/forecastweather.jsx";

export function Customroutes(){

return (
    <>
    <Routes>
<Route path="/" element={<Weather/>}></Route>
<Route path="/forecast" element={<ForecastWeather/>}></Route>
<Route path="/notfound" element={<Notfound/>}></Route>

    </Routes>
    </>
)

}