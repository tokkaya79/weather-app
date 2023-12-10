import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getWeatherByCity } from "../api";

const WeatherComponent = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            setError(false);
            if (city) {
                const data = await getWeatherByCity(city);
                setWeatherData(data);
            }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        getData();
    };

    return (
        <div className="weather-component__box">
            <div className="weather-component__box--search">
                <input
                    className="weather-component__inner--input"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your city"
                />
                <button
                    className="weather-component__inner--button"
                    onClick={handleSearch}
                    type="submit"
                    disabled={!city}
                >
                    Search
                </button>
            </div>
            {weatherData && !loading ? (
                <>
                    <div className="weather-component__inner--info">
                        <h2>City: {weatherData.name}</h2>
                        <p className="weather-component__inner--text">
                            Temperature: {Math.round(weatherData.main.temp)}°C
                        </p>
                    </div>
                    <Link
                        className="weather-component__inner--link link"
                        to={"/activity"}
                    >
                        Recommendations
                    </Link>
                </>
            ) : (
                <p className="weather-component__inner--text">Loading...</p>
            )}
            {error && (
                <div className="weather-component__inner--error">Error</div>
            )}
        </div>
    );
};

export default WeatherComponent;
