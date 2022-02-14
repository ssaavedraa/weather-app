import './App.css';
import { useState } from 'react';
import Nav from './components/nav/nav.component.jsx'
import Cards from './components/cards/cards.component.jsx'
import Footer from './components/footer/footer.component';


function App() {

  // Condiciones iniciales del estado
  const [cities, setCities] = useState([]);

  const ApiKey = '4dca3ff0ed07ca0619ae59afdeb0f984'
  console.log(cities)

  // Crea la funcion onSearch para buscar las ciudades
  function onSearch(city){
    if(cities.includes(city)){
    console.log('la ciudad ya esta')
    }
    else if(city){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric&lang=en`)
        .then(response => response.json())
        .then(data => {
          if(data.main !== undefined){
            const city = {
              min: Math.round(data.main.temp_min),
              max: Math.round(data.main.temp_max),
              id: data.id,
              img: data.weather[0].icon,
              wind: data.wind.speed,
              temp: data.main.temp,
              name: data.name,
              logitude: data.coord.lon,
              latitude: data.coord.lat
            };
            setCities(oldCities => [...oldCities, city])
          }else{
            alert('City not found')
          }
        })
        .catch(e => console.log(e))
    }
    else{
      alert('Please enter a city name')
    }
  }

  function onClose(id){
    setCities(cities.filter(city => city.id !== id))
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards cities={cities} onClose={onClose} />
      <Footer />
    </div>
  );
}

export default App;
