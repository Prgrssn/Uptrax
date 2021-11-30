import "./App.scss";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import AreaCard from "./components/AreaCard/AreaCard";

// function PrivateOutlet() {
//   const { currentUser } = useAuth();
//   return currentUser ? <Outlet /> : <Navigate to="/login" />;
// }

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            {/* <Route path="/dashboard" element={<PrivateOutlet />}>
              <Route element={<Dashboard />} />
            </Route> */}
            {/* <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-pass" element={<ForgotPass />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
