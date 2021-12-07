import "./Login.scss";
import React, { useState, useRef } from "react";
import { Card, Form, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
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
        navigate(`/dashboard/${userCredential.uid}`);
      })
      .catch((err) => setError(err));

    setLoading(false);
  };

  return (
    <article className="login">
      <div className="login-card">
        <div className="login-card__body">
          <h2 className="login-card__header">Log In</h2>
          {error && <Alert variant="danger">{error.message}</Alert>}
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
            <button
              disabled={loading}
              type="submit"
              className="login-card__button"
            >
              Log In
            </button>
          </Form>
        </div>
      </div>
      <div>
        <Link className="login-card__redirect--ref" to="/forgot-pass">
          Forgot Password?
        </Link>
      </div>
      <div className="login-card__redirect">
        Not a user?{" "}
        <Link className="login-card__redirect--ref" to="/signup">
          {" "}
          Sign Up!
        </Link>
      </div>
    </article>
  );
}
