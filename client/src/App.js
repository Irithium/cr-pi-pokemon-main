import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import { Landing } from "./Views/Landing/Landing";
// import { Details } from "../Views/Details/Details";
// import { Form } from "../Views/Form/Form";
// import { NavBar } from "../components/NavBar/NavBar";

// Aplicación que contiene las rutas a cada componente
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
