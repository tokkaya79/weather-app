import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <main className="section">
                <div className="container">
                    <div className="box">
                        <h1 className="title">Hi!</h1>
                        <h2 className="subtitle">Have a GOOD day!</h2>
                        <Link
                            className="link"
                            to="/weather"
                        >
                            To see the Weather outsite
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
