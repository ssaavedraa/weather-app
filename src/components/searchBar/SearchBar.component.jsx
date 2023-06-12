import './SearchBar.css'
import React from "react";
import { useState } from "react";

export default function SearchBar({onSearch}){
    const [city, setCity] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    function onSubmit(event){
        event.preventDefault()
        onSearch(city)
        setCity('')
    }

    function handleFocus (event) {
        console.log(event)
        setIsFocused(true)
    }
    function handleBlur () {
        setIsFocused(false)
    }

    return(
        <form className={`search-bar ${isFocused ? 'focus': ''}`} onSubmit={onSubmit}>
            <input type="text" className="search-text" placeholder="Search city..." value={city} onChange={e => setCity(e.target.value)} onFocus={handleFocus} onBlur={handleBlur}/>
            <span className="icon"><i className="fa fa-search" onClick={onSubmit} ></i></span>
        </form>
    )
}