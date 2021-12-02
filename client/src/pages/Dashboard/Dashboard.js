import "./Dashboard.scss";
import { Card, Button, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const userAPI = "http://localhost:8080/api/v1/users/7";

export default function Home() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [user, setUser] = useState();
  let navigate = useNavigate();

  const firebaseID = currentUser.uid;

  // axios
  //   .get(userAPI)
  //   .then((res) => {
  //     setUser(res.data);
  //   })
  //   .catch();

  function handleLogout() {
    setError("");
    logout()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => setError(err));
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {/* <strong>Email:</strong> {currentUser.email} */}
          <Link to="/update">Update Profile</Link>
        </Card.Body>
      </Card>
      <div>
        <img src="" alt="" />
      </div>
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    </>
  );
}
