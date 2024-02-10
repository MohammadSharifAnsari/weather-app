import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { key } from "../helper/contants.js";
import { Hour_info } from "./hourly_info.jsx";



export function ForecastWeather({cityName}){
    const [isLoading,setIsLoading]=useState(false);
const navigate=useNavigate();
let [forecastInfo,setForecastInfo]=useState({});

    async function getdata(){

        try {
            console.log("cityName>>",cityName);
            setIsLoading(true);
const res=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cityName}`);
console.log("response>>",res);

forecastInfo={
    country:res?.data?.location?.country,
    lat:res?.data?.location?.lat,
    lon:res?.data?.location?.lon,
    city:res?.data?.location?.name,
    region:res?.data?.location?.region,
    hours:[
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[0]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[0]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[0]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[0]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[0]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[0]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[0]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[0]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[0]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[1]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[1]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[1]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[1]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[1]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[1]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[1]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[1]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[1]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[2]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[2]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[2]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[2]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[2]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[2]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[2]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[2]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[2]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[3]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[3]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[3]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[3]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[3]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[3]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[3]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[3]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[3]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[4]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[4]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[4]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[4]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[4]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[4]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[4]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[4]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[4]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[5]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[5]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[5]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[5]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[5]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[5]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[5]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[5]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[5]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[6]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[6]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[6]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[6]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[6]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[6]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[6]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[6]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[6]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[7]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[7]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[7]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[7]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[7]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[7]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[7]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[7]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[7]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[8]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[8]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[8]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[8]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[8]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[8]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[8]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[8]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[8]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[9]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[9]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[9]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[9]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[9]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[9]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[9]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[9]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[9]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[10]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[10]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[10]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[10]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[10]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[10]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[10]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[10]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[10]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[11]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[11]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[11]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[11]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[11]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[11]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[11]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[11]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[11]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[12]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[12]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[12]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[12]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[12]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[12]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[12]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[12]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[12]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[13]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[13]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[13]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[13]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[13]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[13]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[13]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[13]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[13]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[14]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[14]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[14]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[14]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[14]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[14]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[14]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[14]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[14]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[15]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[15]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[15]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[15]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[15]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[15]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[15]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[15]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[15]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[16]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[16]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[16]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[16]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[16]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[16]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[16]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[16]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[16]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[17]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[17]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[17]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[17]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[17]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[17]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[17]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[17]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[17]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[18]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[18]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[18]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[18]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[18]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[18]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[18]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[18]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[18]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[19]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[19]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[19]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[19]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[19]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[19]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[19]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[19]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[19]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[20]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[20]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[20]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[20]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[20]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[20]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[20]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[20]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[20]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[21]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[21]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[21]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[21]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[21]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[21]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[21]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[21]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[21]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[22]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[22]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[22]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[22]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[22]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[22]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[22]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[22]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[22]?.time
    },
        {
            pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[23]?.pressure_mb,
            pressure_in:res?.data?.forecast?.forecastday[0]?.hour[23]?.pressure_in,
            icon:res?.data?.forecast?.forecastday[0]?.hour[23]?.condition?.icon,
            cloud:res?.data?.forecast?.forecastday[0]?.hour[23]?.cloud,
            humidity:res?.data?.forecast?.forecastday[0]?.hour[23]?.humidity,
            last_updated:res?.data?.forecast?.forecastday[0]?.hour[23]?.time,
            temp_c:res?.data?.forecast?.forecastday[0]?.hour[23]?.temp_c,
            temp_f:res?.data?.forecast?.forecastday[0]?.hour[23]?.temp_f,
            time:res?.data?.forecast?.forecastday[0]?.hour[23]?.time
    }



]
};

setForecastInfo({...forecastInfo});

console.log("Forecast_info>>",forecastInfo);

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
    return (
        
        <div className=" flex flex-wrap justify-center items-center flex-col md:flex-row">

{
    forecastInfo?.hours!=undefined&&
    forecastInfo?.hours.map((el,idx)=>{
        return <Hour_info hour_obj={el} key={idx}/>
    })
    
}
    </div>
 
        
    )

}