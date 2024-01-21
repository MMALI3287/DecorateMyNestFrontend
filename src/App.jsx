import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import Temp from "./../temp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Temp />} />
      </Routes>
    </Router>
  );
}

export default App;
