import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchWeatherByCity } from "../api";

const WeatherComponent = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (city) {
                    const data = await fetchWeatherByCity(city);
                    setWeatherData(data);
                }
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchData();
    }, [city]);

    const getActivityRecommendation = (temperature) => {
        if (temperature > 25) {
            return "Perfect weather for a picnic or walk in the park.";
        } else if (temperature > 15) {
            return "Good weather for outdoor sports.";
        } else if (temperature > 0) {
            return "Maybe it's better to stay warm at home.";
        } else {
            return "Take hot tea and go lie under the blanket.";
        }
    };

    return (
        <div className="weather-inner">
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city"
            />
            {weatherData ? (
                <>
                    <div className="weather-inner__info">
                        <h2>City: {weatherData.name}</h2>
                        <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
                    </div>
                    <Link
                        className="link"
                        to={{
                            pathname: "/recommendations",
                            state: { weatherData },
                        }}
                    >
                        Recommendations
                    </Link>
                    <p className="weather-recommend">
                        {getActivityRecommendation(weatherData.main.temp)}
                    </p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default WeatherComponent;