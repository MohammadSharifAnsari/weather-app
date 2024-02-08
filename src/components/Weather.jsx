
import { useState } from "react";
import { Search } from "./Search.jsx";
import { CityWeather } from "./waether_info.jsx";
import { useNavigate } from "react-router-dom";
import { ForecastWeather } from "./forecastweather.jsx";

export function Weather(){

    const [searchTerm,setSearchTerm]=useState("");
   const [will,setWill]=useState("");
   const navigate=useNavigate();
    console.log("searchterm>>",searchTerm);
    return (
<>
<Search updateSearchTerm={setSearchTerm} isDisable={will} />

{
(searchTerm.length!=0&&will=="current")?<CityWeather cityName={searchTerm}/>:""
}
{
(searchTerm.length!=0&&will=="forecast")?<ForecastWeather cityName={searchTerm}/>:""
}

{
   searchTerm.length==0?<div className=" flex flex-col items-center justify-center gap-6 mt-8 ">

<div className=" flex items-center justify-center gap-6 mt-8 ">

    <button className=" bg-[#802f96] text-2xl rounded-md p-4 transition-all delay-300 duration-300 ease-in-out hover:bg-[#632b72] font-semibold 
    "
    onClick={()=>{setWill("current")}}
    >current weather</button>
    
    <button className="bg-[#5733a0] text-2xl rounded-md p-4 transition-all delay-300 duration-300 ease-in-out hover:bg-[#4f3583] font-semibold " 
    onClick={()=>{setWill("forecast")}}
    >forecast weather</button>
    </div>

    <div className=" text-xl font-semibold text-[#2C69A5]">
        <span className=" font-bold text-2xl  text-black ">Status</span> : {will}
    </div>

</div>:""}

</>

    )


}