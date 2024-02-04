import { useState } from "react"

export function Search({updateSearchTerm}){

 

    return(
        <>
        <div className=" flex flex-col  items-center justify-center space-y-4 mx-4 pt-4 ">
<h1 className=" text-center text-3xl font-bold tracking-wider text-[#2C69A5] ">
    WEATHER-APP
</h1>
<input type="text" placeholder="Enter city name" className=" w-full text-center bg-transparent border border-[#2C69A5] h-10 text-white input input-bordered " onChange={(e)=>{updateSearchTerm(e.target.value)}} />
        </div>



        </>
    )
}