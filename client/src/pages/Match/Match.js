import axios from "axios";
import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import "./Match.scss";

const userApi = process.env.REACT_APP_USER_API;

export default function Match() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(userApi)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="match">
      <h2 className="match__title">Match</h2>
      <p>Find Your New Touring Partner!</p>
      <div className="card-container">
        {users.map((user) => (
          <TinderCard
            key={user.id}
            className="user-swipe"
            preventSwipe={[`up`, `down`]}
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
