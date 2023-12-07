import { Link } from "react-router-dom";
import HiComponent from "../../components/hiComponent/HiComponent";
import NavBar from "../../components/navBar/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <main className="section">
                <div className="container">
                    <div className="box">
                        <HiComponent className="HiComponent" />
                        <Link className="link" to="/weather">To see the Weather outsite</Link>
                    </div>
                </div>
            </main>
        </>
    );
}
