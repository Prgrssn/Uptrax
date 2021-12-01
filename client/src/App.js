import "./App.scss";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import AreaCard from "./components/AreaCard/AreaCard";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<AreaCard />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-pass" element={<ForgotPass />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
