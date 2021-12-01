import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div>
      <h2>UpTrax</h2>
      <Card>
        <Card.Body>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </Card.Body>
      </Card>
    </div>
  );
}
