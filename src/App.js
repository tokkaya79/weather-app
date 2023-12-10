import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActivityPage from "./pages/ActivityPage";
import WeatherPage from "./pages/WeatherPage";
import "./style.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/weather"
                        element={<WeatherPage />}
                    />
                    <Route
                        path="/activity"
                        element={<ActivityPage />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
