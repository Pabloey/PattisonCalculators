import { NavLink, Route, Routes } from "react-router-dom";
import ProctorCalc from "./pages/ProctorCalc";
import SieveCalc from "./pages/SieveCalc";
import "./styles/index.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <NavLink className="nav-bar-links" to="/">Home </NavLink>
      <NavLink className="nav-bar-links" to="proctor">Proctor </NavLink>
      <NavLink className="nav-bar-links" to="sieve">Sieve </NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proctor" element={<ProctorCalc />} />
        <Route path="/sieve" element={<SieveCalc />} />
      </Routes>
    </>
  );
};

export default App;
