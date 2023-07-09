import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Country } from "./pages/country/Country";
import { Destination } from "./pages/destination/Destination";
import { Details } from "./pages/details/Details";

function App() {
  return (
    <div className="App">
      <h1 className="nav">Trip Advisor</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:continentId" element={<Country />} />
        <Route path="/destinations/:countryId" element={<Destination />} />
        <Route path="/details/:destinationId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
