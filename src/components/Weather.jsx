
import { useState } from "react";
import { Search } from "./Search.jsx";
import { CityWeather } from "./waether_info.jsx";

export function Weather(){

    const [searchTerm,setSearchTerm]=useState("");
    console.log("searchterm>>",searchTerm);
    return (
<>
<Search updateSearchTerm={setSearchTerm}/>

{
searchTerm.length==0?"":<CityWeather cityName={searchTerm}/>
}


</>

    )


}