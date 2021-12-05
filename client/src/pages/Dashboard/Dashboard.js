import "./Dashboard.scss";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const userAPI = process.env.REACT_APP_USER_API;

export default function Home() {
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
    logout()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }

  return (
    <main className="dashboard">
      <article className="dash-card">
        <div className="dash-card__img-cont">
          <div
            className="dash-card__img"
            style={{ backgroundImage: `url(${user.user_avatar})` }}
          />
        </div>
        <div className="dash-card__info-cont">
          <h3 className="dash-card__name">{user.name}</h3>
          <p className="dash-card__ast">AST: {ast}</p>
          <p className="dash-card__exp">
            Years of backcountry experience: {user.exp}
          </p>
          <p className="dash-card__bio">{user.bio}</p>
        </div>
      </article>
      <section className="dashboard__button-wrap">
        <button className="dashboard__button" onClick={handleUpdate}>
          Update Profile
        </button>
        <button className="dashboard__button" onClick={handleLogout}>
          Log Out
        </button>
      </section>
    </main>
  );
}
