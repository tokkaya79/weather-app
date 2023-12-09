import axios from "axios";
import { API_URL, API_KEY } from "./config";

const fetchWeatherByCity = async (cityName) => {
    try {
        const response = await axios.get(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};

export { fetchWeatherByCity };