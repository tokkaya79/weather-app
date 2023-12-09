import NavBar from "../components/NavBar";
import RecommendComponent from "../components/RecommendComponent";

export default function RecommendPage() {
    return (
        <>
            <NavBar />
            <div className="box box-recommend">
                <h2 className="title-weather">Recommendation</h2>
                <RecommendComponent />
            </div>
        </>
    );
}
