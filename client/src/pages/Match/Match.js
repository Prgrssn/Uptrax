import axios from "axios";
import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "./Match.scss";
import { Alert } from "react-bootstrap";

const userApi = process.env.REACT_APP_USER_API;

export default function Match() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const { currentUser } = useAuth();

  useEffect(() => {
    axios
      .get(userApi)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const swiped = (dir, name) => {
    if (dir === "right") {
      setName(name);
    }

    if (dir === "left") {
      return setName("");
    }
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
              onSwipe={(dir) => swiped(dir, user.name)}
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
