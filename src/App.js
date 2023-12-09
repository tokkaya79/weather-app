import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RecommendPage from "./pages/RecommendPage";
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
                        path="/recommendations"
                        element={<RecommendPage />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
