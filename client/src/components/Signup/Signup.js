import React, { useState, useRef } from "react";
import { Card, Form, Alert } from "react-bootstrap";
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
    <article className="signup">
      <div className="signup-card">
        <div className="signup-card__body">
          <h2 className="signup-card__header">Sign Up</h2>
          {error && <Alert variant="danger">{error.message}</Alert>}
          <Form className="signup-form" onSubmit={handleSignup}>
            <Form.Group id="email" className="signup-form__group">
              <Form.Label className="signup-form__label">Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                className="signup-form__value"
                required
              />
            </Form.Group>
            <Form.Group id="password" className="signup-form__group">
              <Form.Label className="signup-form__label">Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                className="signup-form__value"
                required
              />
            </Form.Group>
            <Form.Group id="password-confirm" className="signup-form__group">
              <Form.Label className="signup-form__label">
                Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                className="signup-form__value"
                required
              />
            </Form.Group>
            <button className="signup__button" disabled={loading} type="submit">
              Sign Up
            </button>
          </Form>
        </div>
      </div>
      <div className="signup__redir">
        Already have an Account?{" "}
        <Link className="signup__redir--link" to="/login">
          Log In!
        </Link>
      </div>
    </article>
  );
}
