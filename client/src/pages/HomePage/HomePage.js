import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
import Mountains from "../../assets/images/Mountain.svg";

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleAreas = () => {
    navigate("/areas");
  };

  const handleForecast = () => {
    navigate("/forecast");
  };
  return (
    <main className="home">
      <div className="home__img-cont">
        <img
          className="home__img"
          src="https://i.pinimg.com/originals/46/ac/f5/46acf5cff2005b478d11e2dc06ed3beb.jpg"
          alt="skiers on ridge"
        />
      </div>
      <article className="home__copy-cont">
        <p className="home__copy-cont--bold">
          Struggling to find new touring partners on all those dating apps? We
          know the struggle.
        </p>
        <p className="home__copy-cont--desc">
          Create a profile, swipe right to match and let the trip planning
          begin!
        </p>
      </article>
      <div className="home__button-cont">
        <button className="home__button" onClick={handleLogin}>
          Login
        </button>
        <button className="home__button" onClick={handleSignup}>
          Signup
        </button>
        <button className="home__button" onClick={handleAreas}>
          Areas
        </button>
        <button className="home__button" onClick={handleForecast}>
          Forecast
        </button>
      </div>
    </main>
  );
}
