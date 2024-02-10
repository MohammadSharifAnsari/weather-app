

export function Hour_info({hour_obj}){

    // pressure_mb:res?.data?.forecast?.forecastday[0]?.hour[0]?.pressure_mb,
    //         pressure_in:res?.data?.forecast?.forecastday[0]?.hour[0]?.pressure_in,
    //         icon:res?.data?.forecast?.forecastday[0]?.hour[0]?.condition?.icon,
    //         cloud:res?.data?.forecast?.forecastday[0]?.hour[0]?.cloud,
    //         humidity:res?.data?.forecast?.forecastday[0]?.hour[0]?.humidity,
    //         last_updated:res?.data?.forecast?.forecastday[0]?.hour[0]?.time,
    //         temp_c:res?.data?.forecast?.forecastday[0]?.hour[0]?.temp_c,
    //         temp_f:res?.data?.forecast?.forecastday[0]?.hour[0]?.temp_f

    return (
  
      
            // {/* art div */}
      <div className=" flex flex-col justify-center items-center w-1/4  m-5 p-5  gap-2 hover:bg-[#cac6cc] hover:cursor-pointer ">
      
      <img src={hour_obj?.icon} alt="Image not load" />
      
      {/* temperature */}
      <div className=" flex flex-col self-start ">
        <h1 className=" text-2xl font-bold ">Temperature</h1>
        <ul className=" font-semibold"> <span className=" text-xl font-bold text-[#8127C6] ">temperature in Celsius  :</span>{hour_obj?.temp_c} </ul>
        <ul className=" font-semibold"> <span className=" text-xl font-bold text-[#8127C6]">temperature in Fahrenheit:</span>{hour_obj?.temp_f} </ul>
      </div>
      {/* pressure */}
      <div className=" flex flex-col self-start ">
        <h1 className=" text-2xl font-bold  ">Pressure</h1>
        <ul className=" font-semibold"> <span className=" text-xl font-bold text-[#8127C6] ">pressure in inches :</span>{hour_obj?.pressure_in} </ul>
        <ul className=" font-semibold"> <span className=" text-xl font-bold text-[#8127C6]">pressure in millibars :</span>{hour_obj?.pressure_mb} </ul>
      </div>
      {/* Indexes */}
      <div className=" flex flex-col self-start ">
        <h1 className=" text-2xl font-bold  ">Indexes</h1>
        <ul className=" font-semibold"> <span className=" text-xl font-bold text-[#8127C6] ">Cloud :</span>{hour_obj?.cloud} </ul>
        <ul className=" font-semibold"> <span className=" text-xl font-bold text-[#8127C6]">Humidity:</span>{hour_obj?.humidity} </ul>
      </div>
      <h1 className=" font-semibold w-full bg-yellow-400 rounded-md p-3"><span className=" text-xl font-bold text-[#8127C6]">Time & Hours:</span>{hour_obj?.time}</h1>


      </div>


      

    )

}