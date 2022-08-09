import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from './hoc/auth';

function App() {

  const AuthenticLandingPage = Auth(LandingPage, null)
  const AuthenticLoginPage = Auth(LoginPage, false)
  const AuthenticRegisterPage = Auth(RegisterPage, false)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AuthenticLandingPage />} />
        <Route path="/login" element={<AuthenticLoginPage />} />
        <Route path="/register" element={<AuthenticRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
