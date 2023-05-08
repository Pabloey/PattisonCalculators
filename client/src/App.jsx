import { Link, Route, Routes } from "react-router-dom";
import ProctorCalc from "./pages/ProctorCalc";
import SieveCalc from "./pages/SieveCalc";
import "./styles/index.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <>
        <Link to="/">Home</Link>
        <Link to="proctor">Proctor</Link>
        <Link to="sieve">Sieve</Link>
      </>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proctor" element={<ProctorCalc />} />
        <Route path="/sieve" element={<SieveCalc />} />
      </Routes>
    </>
  );
};

export default App;
