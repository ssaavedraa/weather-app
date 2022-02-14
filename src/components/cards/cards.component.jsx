import './cards.css'
import React from "react";
import Weather from "../card/weather.component";

export default function Cards({cities, onClose}){
    if(cities){
        return(
            <div className="card-container">
                {cities.map(city => {
                    return(
                        <Weather
                            key = {city.id}
                            name = {city.name}
                            temp = {city.temp}
                            img = {city.img}
                            min = {city.min}
                            max = {city.max}
                            onClose = {() => onClose(city.id)}
                        />
                    )
                })}
            </div>
        )
    }else{
        return(
            <div>Please search a city</div>
        )
    }
}