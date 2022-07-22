import React, { useEffect, useState } from "react";
import "./style.css";
import Atrical_card from "./Atrical_card";
const Temp = () => {
    const [weathervalue,setweathervalue] = useState("Jaipur");
    const [tempInfo,settempInfo] =useState({});
    const getweatherinfo=async()=>{
        try{
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${weathervalue}&appid=055a4325b961788447616088980727fe&units=metric`
            let res =  await fetch(url);
            let data = await res.json();
            
                //..destructruing...
                const {temp,pressure,humidity}=data.main
                const {main: condition } = data.weather[0]
                const {name} =data
                const{speed}=data.wind
                const{country,sunset}=data.sys
                const mynewweatherInfo={
                    temp,
                    pressure,
                    humidity,
                    condition,

                    name,
                    speed,
                    country,
                    sunset,
                }
                settempInfo(mynewweatherInfo);

        }catch(error){
            console.log("u got some error");

        }




    }
    useEffect(()=>{
        getweatherinfo();

    },[])

  return (
    <>
      <div className="wrap" >
        <div className="search">
          <input
            type="search"
            placeholder="search here....."
            autoFocus
            id="search"
            className="searchTerm"
            value={weathervalue}
            onChange={(e)=>setweathervalue(e.target.value)}
          />
          <button className="searchbutton" type="button" onClick={getweatherinfo}>
            search
          </button>
        </div>
      </div>
      {/* our temp card */}
     <Atrical_card tempInfo ={tempInfo}/>
    </>
  );
};
export default Temp;
