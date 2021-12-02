import "./Dashboard.scss";
import { Card, Button, Alert } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const userAPI = `http://localhost:8080/api/v1/users`;

export default function Home() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [user, setUser] = useState([]);
  let navigate = useNavigate();

  const firebaseID = currentUser.uid;

  useEffect(() => {
    axios
      .get(`${userAPI}/${firebaseID}`)
      .then((res) => {
        const userData = res.data[0];
        setUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(user);

  function handleUpdate() {
    navigate("/update");
  }

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
          <div>
            <div>
              <img src={user.user_avatar} alt="" />
            </div>
          </div>
          <div>
            <h4>{user.name}</h4>
            <p>AST: {user.ast}</p>
            <p>Years of experience in the backcountry: {user.exp}</p>
            <p>{user.bio}</p>
          </div>
        </Card.Body>
      </Card>
      <div>
        <img src="" alt="" />
      </div>
      <Button onClick={handleUpdate}>Update Profile</Button>
      <Button onClick={handleLogout}>Log Out</Button>
    </>
  );
}
