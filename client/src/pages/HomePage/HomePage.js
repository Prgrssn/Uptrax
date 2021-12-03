import { Link } from "react-router-dom";
import "./HomePage.scss";
import Mountains from "../../assets/images/Mountain.svg";

export default function HomePage() {
  return (
    <div>
      <img src={Mountains} alt="mountains" className="home__mountains" />
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <img
        src="http://pbs.twimg.com/media/EPAwEWsUwAAgsRM.jpg"
        alt="Ernie is a wizard"
      />
    </div>
  );
}
