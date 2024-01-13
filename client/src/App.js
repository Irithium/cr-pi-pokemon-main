import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Views/Landing/Landing";
import Home from "./Views/Home/Home";
import Form from "./Views/Form/Form";
import Detail from "./Views/Detail/Detail";
import Update from "./Views/Update/Update";
import About from "./Views/About/About";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Form />} />
        <Route path="/detail/:pokemonId" element={<Detail />} />
        <Route path="/update/:pokemonId" element={<Update />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
