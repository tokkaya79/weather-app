import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="nav-row">
                        <Link to="/">Home</Link>
                        <Link to="/weather">Weather</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
