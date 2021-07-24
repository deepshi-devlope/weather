import React, {useEffect, useState} from "react";
import "./CSS/style.css";
import axios from 'axios';
function Temp() {
  const [val, Upval] = useState("Mumbai");
  const [tem, upTemp] = useState('');
  const [weather, upWeather] = useState('');
  // useEffect();
  const thisVal = (obj) => {
    Upval(obj.target.value)
  }

  useEffect(() => {
    const Ftapi = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=3a5aaa16e9eb6e5874e01ea52d0b5e15`)
      // const resjson = await response.json();
      console.log(response.data)
      upWeather(response.data.weather[0].description)
      upTemp(response.data.name)
      upTemp(response.data.main)
    }

    Ftapi();

  }, [val]
  )


    return(
        <>
        <div className= "box">
            <div className = "inputData">
                <input 
                type = "search"
                

                value = {val}
                className = "inputFeild"

                onChange = {thisVal}

                 />
      </div>

      {!tem ? (
          <p className = "errorMsg">No data found</p>
      ) : (
          <div>


        <div className="info">
            <h2 className= "location">
            <i className="fas fa-street-view"></i>{val}
            </h2>
            <h1 className = "temp">
                {tem.temp}°C

            </h1>
            <h3 className = "tempmin_max">Min : {tem.temp_min}°C | Max : {tem.temp_max}°C</h3>

        </div>
        <div className= "wave -one"></div>
        <div className= "wave -two"></div>
        <div className= "wave -three"></div>
        </div>


      )}
        

        

        </div>
         </>

    )
        
}

export default Temp;