import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPass() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { passRecover } = useAuth();
  let navigate = useNavigate();

  function handleRecover(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    passRecover(emailRef.current.value)
      .then(() => {
        setMessage("Check your inbox for reset link");
        navigate("/login");
      })
      .catch((error) => setError(error.message));

    setLoading(false);
  }

  return (
    <article className="login">
      <Card className="login-card">
        <Card.Body className="login-card__body">
          <h2 className="login-card__header">Password Recovery</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="succes">{message}</Alert>}
          <Form className="login-form" onSubmit={handleRecover}>
            <Form.Group id="email" className="login-form__group">
              <Form.Label className="login-form__label">Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                className="login-form__value"
                required
              />
            </Form.Group>
            <Button type="submit">Recover Password</Button>
          </Form>
        </Card.Body>
      </Card>
    </article>
  );
}
