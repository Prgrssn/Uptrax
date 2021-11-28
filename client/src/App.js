// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Signup />
      </AuthProvider>
    </div>
  );
}

export default App;
