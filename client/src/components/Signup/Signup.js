import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.scss";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match!");
    }

    signup(emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        setError("");
        setLoading(true);
        const user = userCredential.user;
        console.log(user);
        navigate("/create");
      })
      .catch((err) => setError(err));

    setLoading(false);
  };

  return (
    <article className="login">
      <Card className="login-card">
        <Card.Body className="login-card__body">
          <h2 className="login-card__header">Sign Up</h2>
          {error && <Alert variant="danger">{error.message}</Alert>}
          <Form className="login-form" onSubmit={handleSignup}>
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
            <Form.Group id="password-confirm" className="login-form__group">
              <Form.Label className="login-form__label">
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                className="login-form__value"
                required
              />
            </Form.Group>
            <Button disabled={loading} type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div>
        Already have an Account? <Link to="/login">Log In!</Link>
      </div>
    </article>
  );
}
