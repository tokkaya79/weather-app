import NavBar from "../components/NavBar";
import ActivityComponent from "../components/ActivityComponent";

export default function ActivityPage() {
    return (
        <>
            <NavBar />
            <div className="box box-recommend">
                <h2 className="title-weather">Recommendation</h2>
                <ActivityComponent />
            </div>
        </>
    );
}
