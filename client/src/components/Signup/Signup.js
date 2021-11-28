import React, { useRef } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    signup(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button type="submit">Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div>Already Have an Account? Log in.</div>
    </>
  );
}
