import axios from "axios";
import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import "./Match.scss";

const userApi = process.env.REACT_APP_USER_API;
console.log(userApi);

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

  console.log(users);

  return (
    <div>
      <h2>Match</h2>
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
              <h3>{user.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
