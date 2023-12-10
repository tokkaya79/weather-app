import NavBar from "../components/NavBar";
import ActivityComponent from "../components/ActivityComponent";

export default function ActivityPage() {
    return (
        <>
            <NavBar />
            <div className="activity-page__box box">
                <h2 className="activity-page__title title">Recommendation</h2>
                <ActivityComponent />
            </div>
        </>
    );
}
