import axios from "axios";
import TinderCard from "react-tinder-card";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import nodemailer from "nodemailer";
import "./Match.scss";
import { Alert } from "react-bootstrap";

const userApi = process.env.REACT_APP_USER_API;

export default function Match() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [activeUser, setActiveUser] = useState("");
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(userApi)
      .then((res) => {
        setUsers(res.data);
        setActiveUser(
          res.data.map((user) => {
            if (user.firebase_id === currentUser.uid) return user;
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const swiped = (dir, name, email) => {
    if (dir === "right") {
      setName(name);
      setEmail(email);
    }

    if (dir === "left") {
      return setName("");
    }

    setName("");
  };

  return (
    <section className="match">
      {name && <Alert variant="info">Contact Request Sent to {name}</Alert>}
      <h4 className="match__title">Find Your New Touring Partner!</h4>
      <div className="card-container">
        {users
          .filter((user) => user.firebase_id !== currentUser.uid)
          .map((user) => (
            <TinderCard
              key={user.id}
              className="user-swipe"
              preventSwipe={[`up`, `down`]}
              onSwipe={(dir) => swiped(dir, user.name, user.email)}
            >
              <div
                style={{ backgroundImage: `url(${user.user_avatar})` }}
                className="user-card"
              >
                <div className="user-card__info-wrap">
                  <h3 className="user-card__title">{user.name}</h3>
                  <p className="user-card__exp">Years Exp: {user.exp}</p>
                </div>
              </div>
            </TinderCard>
          ))}
      </div>
    </section>
  );
}
