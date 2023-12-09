import NavBar from "../components/NavBar";
import WeatherComponent from "../components/WeatherComponent";

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
