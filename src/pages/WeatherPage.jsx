import NavBar from "../components/NavBar";
import WeatherComponent from "../components/WeatherComponent";

export default function WeatherPage() {
    return (
        <>
            <NavBar />
            <div className="weather-page box">
                <h2 className="weather-page__title title">
                    Weather in your place
                </h2>
                <WeatherComponent />
            </div>
        </>
    );
}
