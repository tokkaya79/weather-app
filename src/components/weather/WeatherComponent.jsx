import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeatherComponent() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Wroclaw");
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const apiKey = "3b8db2b21e56848758742645d5ea3787";

                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

                const response = await axios.get(apiUrl);
                setWeatherData(response.data);

                console.log(response.data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchData();
    }, [city]);
    const getActivityRecommendation = (temperature) => {
        if (temperature > 25) {
            return "Perfect weather for a picnic or walk in the park.";
        } else if (temperature > 15) {
            return "Good weather for outdoor sports.";
        } else if(temperature > 0) {
            return "Maybe it's better to stay warm at home.";
        } else {
            return "Take hot tea and go lie under the blanket.";
        }
    };

    return (
        <div>
            {weatherData && (
                <div>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Введите город"
                    />
                    <h2>{weatherData.name}</h2>
                    <p>Температура: {weatherData.main.temp}°C</p>
                    <p>{getActivityRecommendation(weatherData.main.temp)}</p>
                    
                </div>
            )}
        </div>
    );
}
