import React, { useEffect, useState } from "react";
// import moment from "moment";
// import { faThunderstorm } from "@fortawesome/free-solid-svg-icons";
const Atrical_card = ({ tempInfo }) => {
  const { temp, pressure, humidity, condition, name, speed, country, sunset } =
    tempInfo;
    const weatherCondition =document.getElementsByClassName("weatherConditon");
  const [weatherState, setweatherState] = useState("");

  useEffect(() => {
    if (condition) {
      switch (condition) {
        case "Clouds":
          setweatherState("wi-day-cloudy");
          break;
        case "Haze":
          setweatherState("wi-fog");
          break;
        case "Clear":
          setweatherState("wi-day-sunny");
          break;
        case "Rain":
          setweatherState("wi-rain");
          break;
          case "Thunderstorm":
              setweatherState("wi-thunderstorm");
              break;


        default:
          setweatherState("wi-day-sunny");
          break;
      }
    }
  }, [condition]);
  
  //convert time to sec
  let sec = sunset
  let date = new Date(sec*1000)
//   let timeset=date.toLocaleString('en-US', { hour: 'numeric', hour12: true })
 let timeset = `${date.getHours()}:${date.getMinutes()}`
//   let ampm = date.getHours>= 12 ? 'pm':'am';
//    let ampm =moment(new Date()).format("hh:mm A");
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&#176;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{condition}</div>
            <div className="place">
              {" "}
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/* our four divided sections */}
        <div className="extra-temp">
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-sunset"}></i>
            </p>
            <p className="extra-info-leftside">
            {timeset}<br />
             sunset
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p className="extra-info-leftside">
              {humidity} <br />
              humidity
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className={"wi wi-barometer"}></i>
            </p>
            <p className="extra-info-leftside">
              {pressure} <br />
              pressure
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className={"wi wi-strong-wind"}></i>
            </p>
            <p className="extra-info-leftside">
             {speed} <br />
              speed
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Atrical_card;
