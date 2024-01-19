import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
