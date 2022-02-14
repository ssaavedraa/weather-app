import './nav.css'
import React from "react"
import SearchBar from "../searchBar/SearchBar.component"

export default function Nav({onSearch}){
    return (
        <div className="nav">
            <h1 className="titulo">Weather App</h1>
            <SearchBar onSearch={onSearch}/>
        </div>
    )

}
