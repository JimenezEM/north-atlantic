import './App.css';
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import { VinSearch } from "./components/VinSearch.jsx";

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<VinSearch /> } />
          </Routes>
    </div>
  );
}

export default App;