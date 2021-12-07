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
      <article className="home__copy-cont">
        <div className="home__img-cont">
          <img src={Mountains} alt="mountains" className="home__img" />
        </div>
        <p className="home__copy-cont--desc">
          Struggling to find new touring partners on all those dating apps?
        </p>
        <p className="home__copy-cont--desc">
          We know the struggle. That's why we created UpTrax. Here, you're able
          to find a touring partner who LOVES the suffer-fest that is the
          up-track.
        </p>
        <p className="home__copy-cont--desc">
          Create a profile, swipe right to match and let the trip planning
          begin!
        </p>
        <p className="home__copy-cont--desc">
          Come on, let's get after it kid!
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
