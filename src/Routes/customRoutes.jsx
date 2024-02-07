import { Routes ,Route} from "react-router-dom";
import { Weather } from "../components/Weather.jsx";
import { Notfound } from "../components/Notfound.jsx";

export function Customroutes(){

return (
    <>
    <Routes>
<Route path="/" element={<Weather/>}></Route>
<Route path="/notfound" element={<Notfound/>}></Route>

    </Routes>
    </>
)

}