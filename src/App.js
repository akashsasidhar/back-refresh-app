import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";

function App() {
  return (
    <div>
      <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
        {" "}
        Home
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
