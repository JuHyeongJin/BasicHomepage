import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" components={<LandingPage />} />
          <Route exact path="/login" components={<LoginPage />} />
          <Route exact path="/register" components={<RegisterPage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
