import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Current  from './components/Current';
import Forecast from './components/Forecast';
import './bg.css';
function Whether() {

    const [city, setcity] = useState();
    //WEATHER URL
    const url = process.env.REACT_APP_WEATHER_API;

    // FORECAST URL
    const forecasturl=process.env.REACT_APP_FORECAST_API;
    const getforecasturl=(data)=>`${forecasturl}${data}&days=7&aqi=no&alerts=no`;

    const [clickedcity,setclickedcity] = useState();
    const [currentwhether,setcurrent]=useState();
    const [forecastwhether,setforecast]=useState();
    const [location,setlocation]=useState();
    const [citysug, setcitysug] = useState([]);

    useEffect(() => {
        if (city && city.length > 3)
         {
               fetching();
          }
    }, [city])


    const fetching = async () => {
        try {
            const responce = await axios.get(url + city);
            const resp = responce.data;
            console.log(resp)
            const details = resp.map((data) => {
                return `${data.name},${data.region},${data.country}`
            })
            setcitysug(details);
            
        }
        catch (e) {
            console.log('error', e);
        }
    }

    const selecting = (data) => {
        console.log(data);
        setclickedcity(data);
        setcity(data);
        callselecting(data);
        setcitysug([]);
    } 
    const callselecting=async(data)=>{
        try{
            const responce=await axios.get(getforecasturl(data));
            const resp = responce.data;
            console.log(resp);
            setcurrent(resp.current);
            setforecast(resp.forecast);
            setlocation(resp.location);
            console.log('current',resp.current);
            console.log('current',resp.forecast);


        }
        catch(e){
            console.log('error',e);
        }
    }
      
    // Search Bar
    return (

            <div class="night-bg">
             <div class="container text-center  p-5 rounded-2">

                <input type='text' class='form-control opacity-50 rounded-3' value={city || ""} onChange={(e) => {
                    setcity(e.target.value)
                    if(e.target.value===""){
                        setcurrent();
                        setforecast();
                        setlocation();
                        setclickedcity();
                
                    }
                }} />

                    {/* Search Bar Data */}
                   {citysug && citysug.map((data,index) => {
                        return <div key={index}
                        className='text-center bg-dark rounded p-2 bg-opacity-25 text-white rounded-3'
                        style={{cursor:'pointer'}}
                        onClick={()=>selecting(data)}>
                            {data}
                           
                            </div>;

                    })}

                {/* Importing Current And Forecast components */}
                {currentwhether && <Current currentwhether={currentwhether}location={location}/> }
                {forecastwhether && <Forecast forecastwhether={forecastwhether}location={location}/>}
                </div>
            </div>
    );

}
export default Whether;