import { useEffect, useState } from 'react';
import Classes from './weather.module.css';
const Weather=()=>{
     const[city ,setcity]=useState("pune");
     const[search ,setsearch]=useState("mumbai");
     useEffect(()=>{
          const fetchApi=async ()=>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2851152d80b3be49a2ab147ee86e5f77`;
        const res= await fetch(url);
        const response=await res.json();
        // console.log(response);
        setcity(response.main);
         }
         fetchApi();
     },[search])
    const check=(event)=>{
setsearch(event.target.value);
    }
    return(
        <>
        {/* <div className={Classes.main}> */}
        <h1 className={Classes.head}>Weather</h1>
            <div className={Classes.main1}>
            <input type="search" placeholder='search' value={search} onChange={check}/>
            {!city?(
                <p>data not found</p>
            ):(
                <div>
                <div className={Classes.info}>
            <h2 className={Classes.location}>
            <i className="fa fa-street-view"></i>{search}</h2>
            <h1 className={Classes.tempp}>{city.temp}</h1>
            <h3 className={Classes.temp_min}>Min {city.temp_min} | Max : {city.temp_max}</h3>
        </div>
        <div className={Classes.ocean}>
        <div className={Classes.wave}></div>
        <div className={Classes.wave}></div>
        </div>
    </div>

            )}
       
        
        </div>
        {/* </div> */}
    
        </>
    )
}
export default Weather;