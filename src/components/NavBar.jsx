import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <Link
                            className="link"
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="link"
                            to="/weather"
                        >
                            Weather
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
