import './SearchBar.css'
import React from "react";
import { useState } from "react";

export default function SearchBar({onSearch}){

    const [city, setCity] = useState('');

    function onSubmit(e){
        onSearch(city)
        setCity('')
    }

    return(
        <div className="search-bar">
            <input type="text" className="search-text" placeholder="Search city..." value={city} onChange={e => setCity(e.target.value)}/>
            <span class="icon"><i class="fa fa-search" onClick={onSubmit} ></i></span>
        </div>
    )
}