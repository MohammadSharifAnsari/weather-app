import axios from "axios";
import { key } from "../helper/contants.js";
import { useEffect, useState } from "react";
import { Bars ,BallTriangle,Puff } from 'react-loading-icons'
import { Navigate, useNavigate } from "react-router-dom";

export function CityWeather({cityName}){
    
    const [weather_info,setWeather_info]=useState({
        country:"",
        lat:undefined,
        lon:undefined,
        city:"",
        region:"",
        pressure_mb:undefined,
        pressure_in:undefined,
        icon:"",
        cloud:undefined,
        humadity:undefined,
        last_updated:"",
        temp_c:undefined,
        temp_f:undefined
        
    });
    const [isLoading,setIsLoading]=useState(false);
    const navigate=useNavigate();


    async function getdata(){

        try {
            console.log("cityName>>",cityName);
            setIsLoading(true);
const res=await axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`);
console.log("response>>",res);
setWeather_info({
    country:res?.data?.location?.country,
    lat:res?.data?.location?.lat,
    lon:res?.data?.location?.lon,
    city:res?.data?.location?.name,
    region:res?.data?.location?.region,
    pressure_mb:res?.data?.current?.pressure_mb,
    pressure_in:res?.data?.current?.pressure_in,
    icon:res?.data?.current?.condition?.icon,
    cloud:res?.data?.current?.cloud,
    humadity:res?.data?.current?.humidity,
    last_updated:res?.data?.current?.last_updated,
    temp_c:res?.data?.current?.temp_c,
    temp_f:res?.data?.current?.temp_f
})
setIsLoading(false)
            
        } catch (error) {
            setIsLoading(false);
            console.log("error in weather-info.jsx",error);
            navigate('/notfound');
            
        }

        
    }

    useEffect(()=>{
getdata();
    },[cityName]);
    console.log("weather_info->>>",weather_info);
    return (
        
    <div className=" mt-4 " >
      {isLoading?
      <div className=" flex flex-row gap-3 items-center justify-center ">
        loading
         <Puff stroke="#2C69A5" strokeOpacity={.125} speed={.75} />
      </div>
      :
      <div className=" flex flex-col gap-7 md:gap-3 ">
      
      {/* image at top */}
      <div className=" flex items-center justify-center">

<img src={weather_info.icon} alt="image not load" className=" h-40  " />

      </div>
{/* location info  */}
<div className=" flex flex-col md:flex-row gap-5 items-center justify-evenly  ">

<div >
    <h1 className=" text-xl font-semibold">

<span className=" text-[#2C69A5] text-2xl font-bold">Country </span>: {weather_info?.country}
    </h1>

</div>

<div>
    <h1 className=" text-xl font-semibold">

<span className=" text-[#2C69A5] text-2xl font-bold">State or Region </span>: {weather_info?.region}
    </h1>
</div>
<div>
    <h1 className=" text-xl font-semibold">

<span className=" text-[#2C69A5] text-2xl font-bold">City</span>: {weather_info?.city}
    </h1>
</div>
     
</div>
{/* grid for tempearture pressure diatances and indxes */}

<div className=" grid grid-cols-1 md:grid-cols-2 mb-4 min-h-[70vh]">
{/* temp */}
<div className=" flex flex-col justify-center items-center  gap-3 ">
    <h1 className=" text-5xl font-bold">Temperature</h1>
    <h1 className=" text-xl font-semibold"> <span className=" text-[#2C69A5] text-2xl font-bold">temperature in Celsius </span>: {weather_info?.temp_c} C</h1>
    <h1 className=" text-xl font-semibold"> <span className=" text-[#2C69A5] text-2xl font-bold">temperature in Fahrenheit </span>: {weather_info?.temp_c} F</h1>
</div>
{/* pressure */}
<div className=" flex flex-col justify-center items-center  gap-3 ">
    <h1 className=" text-5xl font-bold">Pressure</h1>
    <h1 className=" text-xl font-semibold"> <span className=" text-[#2C69A5] text-2xl font-bold">pressure in inches </span>: {weather_info?.pressure_in} in</h1>
    <h1 className=" text-xl font-semibold"> <span className=" text-[#2C69A5] text-2xl font-bold">pressure in millibars </span>: {weather_info?.pressure_mb} mb</h1>
</div>
{/* distances */}
<div className=" flex flex-col justify-center items-center  gap-3 ">
    <h1 className=" text-5xl font-bold">Angles</h1>
    <h1 className=" text-xl font-semibold"> <span className=" text-[#2C69A5] text-2xl font-bold">Longitude</span>: {weather_info?.lon} </h1>
    <h1 className=" text-xl font-semibold"> <span className=" text-[#2C69A5] text-2xl font-bold">Latitude </span>: {weather_info?.lat} </h1>
</div>
{/* Indexex */}
<div className=" flex flex-col justify-center items-center  gap-3 ">
    <h1 className=" text-5xl font-bold">Indexes</h1>
    <h1 className=" text-xl font-semibold"> <span className=" text-[#2C69A5] text-2xl font-bold">Cloud</span>: {weather_info?.cloud} </h1>
    <h1 className=" text-xl font-semibold"> <span className=" text-[#2C69A5] text-2xl font-bold">Humadity </span>: {weather_info?.humadity} </h1>
</div>



</div>

      
      </div>
      }
    


    </div>

    
    )


}