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

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            getData();
        }
    };

    return (
        <div className="weather-component">
            <div className="weather-component__search">
                <input
                    className="weather-component__input"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your city"
                />
                <Button
                    onClick={getData}
                    disabled={!city}
                    type="submit"
                    icon
                />
            </div>
            {weatherData && !loading ? (
                <>
                    <div className="weather-component__info">
                        <h2>City: {weatherData.name}</h2>
                        <p className="weather-component__text">
                            Temperature: {Math.round(weatherData.main.temp)}°C
                        </p>
                    </div>
                    <Link
                        className="weather-component__link link"
                        to={"/activity"}
                    >
                        Recommendations
                    </Link>
                </>
            ) : null}
            {error && <div className="weather-component__error">Error</div>}
        </div>
    );
};

export default WeatherComponent;
