import { useState } from "react"
import { useDebounce } from "../helper/useDebounce.js"
import { Link } from "react-router-dom"
export function Search({updateSearchTerm,isDisable}){
     let x;
     if(isDisable==""){
        x=true;
     }
     else{
        x=false;
     }
    const debounce=useDebounce((e)=>{updateSearchTerm(e.target.value)});
 

    return(
        <>
        <div className=" flex flex-col  items-center justify-center space-y-4 mx-4 pt-4  ">
        
<h1 className=" text-center text-3xl font-bold tracking-wider text-[#2C69A5]  ">
    WEATHER-APP
</h1>
      
<input disabled={x} type="text" placeholder="Enter city name" className=" w-full text-center bg-transparent   h-10  input input-bordered border-2 border-black " onChange={debounce} />
        </div>



        </>
    )
}