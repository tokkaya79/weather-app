import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
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
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            getData();
        }
    };

    return (
        <div className="weather-component__box">
            <div className="weather-component__box--search">
                <input
                    className="weather-component__box--input"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your city"
                />
                <Button
                    handleSearch={handleSearch}
                    city={city}
                />
            </div>
            {weatherData && !loading ? (
                <>
                    <div className="weather-component__box--info">
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
            ) : null}
            {error && (
                <div className="weather-component__inner--error">Error</div>
            )}
        </div>
    );
};

export default WeatherComponent;
