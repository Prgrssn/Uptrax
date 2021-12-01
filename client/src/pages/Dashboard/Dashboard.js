import "./Dashboard.scss";
import { Card, Button, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  let navigate = useNavigate();

  console.log(currentUser);
  const firebaseID = currentUser.uid;
  console.log(firebaseID);

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
          <Link to="/update-profile">Update Profile</Link>
        </Card.Body>
      </Card>
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    </>
  );
}
