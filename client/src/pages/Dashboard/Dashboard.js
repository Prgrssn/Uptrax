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
  const ast = Boolean(Number(user.ast)).toString();

  useEffect(() => {
    axios
      .get(`${userAPI}/${firebaseID}`)
      .then((res) => {
        const userData = res.data[0];
        setUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);

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

  console.log(user.user_avatar);

  return (
    <>
      <img src={`/${user.user_avatar}`} alt="" />
      <Card>
        <Card.Body>
          <h2>Profile</h2>
          <div>
            <img src={user.user_avatar} alt={user.name} />
            <div>
              <h4>{user.name}</h4>
              <p>AST: {ast}</p>
              <p>Years of experience in the backcountry: {user.exp}</p>
              <p>{user.bio}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
      <section className="dashboard__button-wrap">
        <button className="dashboard__button" onClick={handleUpdate}>
          Update Profile
        </button>
        <button className="dashboard__button" onClick={handleLogout}>
          Log Out
        </button>
      </section>
    </>
  );
}
