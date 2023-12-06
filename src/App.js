
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import WeatherPage from "./pages/weatherPage/WeatherPage";

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
                </Routes>
            </Router>


    </div>
  );
}

export default App;
