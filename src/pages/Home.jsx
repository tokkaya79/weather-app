import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="home-page box">
                <h1 className="home-page__title title">Hi!</h1>
                <h2 className="home-page__subtitle subtitle">
                    Have a GOOD day!
                </h2>
                <Link
                    className="home-page__link link"
                    to="/weather"
                >
                    To see the Weather outside
                </Link>
            </div>
        </>
    );
}
