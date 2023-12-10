import axios from "axios";
import { API_URL_WEATHER, API_URL_ACTIVITY, API_KEY } from "./config";

const getWeatherByCity = async (cityName) => {
    const response = await axios.get(
        `${API_URL_WEATHER}?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    return response.data;
};

const getRandomActivity = async () => {
    const response = await axios.get(`${API_URL_ACTIVITY}`);
    return response.data;
};

export { getWeatherByCity, getRandomActivity };
