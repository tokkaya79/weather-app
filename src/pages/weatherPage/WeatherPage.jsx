

import NavBar from "../../components/navBar/NavBar";
import WeatherComponent from "../../components/weather/WeatherComponent";

export default function WeatherPage() {
    return (
        <>
            <NavBar />
            <div className="box">
                <h2 className="title-weather">Weather in your place</h2>
                <WeatherComponent />
            </div>
        </>
    );
}
