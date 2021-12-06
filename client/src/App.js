import "./App.scss";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import CreateProfile from "./components/CreateProfile/CreateProfile";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Areas from "./pages/Areas/Areas";
import Match from "./pages/Match/Match";
import Forecast from "./pages/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <AuthProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route
              path="/dashboard/:firebase_id"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/create"
              element={
                <PrivateRoute>
                  <CreateProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/match/:firebase_id"
              element={
                <PrivateRoute>
                  <Match />
                </PrivateRoute>
              }
            />
            <Route
              path="/update"
              element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/forgot-pass"
              element={
                <PrivateRoute>
                  <ForgotPass />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
