import { Routes ,Route} from "react-router-dom";
import { Weather } from "../components/Weather.jsx";
export function Customroutes(){

return (
    <>
    <Routes>
<Route path="/" element={<Weather/>}></Route>

    </Routes>
    </>
)

}