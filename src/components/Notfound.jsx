import { TbError404Off } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
export function Notfound(){

    return (
        
<div
className=" bg-[#2C69A5] w-full h-[100vh] flex flex-col items-center justify-center"
>
    <Link to={"/"}>
    <div className=" flex items-center justify-center border-2 border-black rounded-md w-40 m-5 ">
    <TiArrowBack className=" text-2xl font-bold " />
    <span to={"/"} className=" text-2xl font-bold "  > back </span>
    </div>
    </Link>
    <h1 className=" text-4xl font-bold text-black " >Oops,page Not found </h1>
  <TbError404Off
  className=" h-44 w-full text-red-400 "
  />

</div>
     
    )

}