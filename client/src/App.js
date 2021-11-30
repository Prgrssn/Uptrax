// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
// import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <Signup />
      <Login />
    </div>
  );
}

export default App;
