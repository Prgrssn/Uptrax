import "./Login.scss";
import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    login(emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        setError("");
        setLoading(true);
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => setError(err));

    setLoading(false);
  };

  return (
    <article className="login">
      <Card className="login-card">
        <Card.Body className="login-card__body">
          <h2 className="login-card__header">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="login-form" onSubmit={handleLogin}>
            <Form.Group id="email" className="login-form__group">
              <Form.Label className="login-form__label">Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                className="login-form__value"
                required
              />
            </Form.Group>
            <Form.Group id="password" className="login-form__group">
              <Form.Label className="login-form__label">Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                className="login-form__value"
                required
              />
            </Form.Group>
            <Button type="submit">Log In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div>
        Not a user? <Link to="/signup"> Sign Up!</Link>
      </div>
    </article>
  );
}
