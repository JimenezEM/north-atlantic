import './App.css';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import { VinSearch } from "./components/VinSearch.jsx";

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<VinSearch /> } />
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;