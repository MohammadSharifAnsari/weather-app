import axios from "axios";
import { key } from "../helper/contants.js";
import { useEffect } from "react";

export function CityWeather({cityName}){


    async function getdata(){

        try {
            console.log("cityName>>",cityName);
const res=await axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`);
console.log("response>>",res);
            
        } catch (error) {
            console.log("error in weather-info.jsx",error);
            
        }

        
    }

    useEffect(()=>{
getdata();
    });

    return (
        <>
        
        </>
    )


}