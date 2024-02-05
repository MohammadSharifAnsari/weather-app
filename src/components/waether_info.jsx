import axios from "axios";
import { key } from "../helper/contants.js";
import { useEffect, useState } from "react";

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
    const [isLoading,setIsLoading]=useState(true);


    async function getdata(){

        try {
            console.log("cityName>>",cityName);
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
    humadity:res?.data?.current?.humadity,
    last_updated:res?.data?.current?.last_updated,
    temp_c:res?.data?.current?.temp_c,
    temp_f:res?.data?.current?.temp_f
})
setIsLoading(false)
            
        } catch (error) {
            console.log("error in weather-info.jsx",error);
            
        }

        
    }

    useEffect(()=>{
getdata();
    },[cityName]);
    console.log("weather_info->>>",weather_info);
    return (
        <>
    <div>
      {isLoading?"loading ...":
      <div>


      
      </div>
      }
    


    </div>

        </>
    )


}