import './weather.css'
import React from "react";

export default function Weather(props){
    return(
        <div className="card">
            <p className="close" onClick={props.onClose}>&#10006;</p>
            <div className="card-content">
                <h2>{props.name}</h2>
                <h3>Temperature</h3>
                <h2>{props.temp}&deg;</h2>
                <img src={"http://openweathermap.org/img/wn/"+props.img+"@2x.png"} alt="icon" />
                <div className='min-temp'>
                    <span>Min:</span>
                    <span>{props.min}&deg;</span>
                </div>
                <div className='max-temp'>
                    <span>Max:</span>
                    <span>{props.max}&deg;</span>
                </div>
            </div>
        </div>
    )
}