import "./CreateProfile.scss";
import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreateProfile() {
  const displayNameRef = useRef();
  const emailRef = useRef();
  const astRef = useRef();
  const firstAidRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const { currentUser } = useAuth();
  console.log(currentUser);

  const handleUpdate = (event) => {
    event.preventDefault();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <article className="login">
      <Card className="login-card">
        <Card.Body className="login-card__body">
          <h2 className="login-card__header">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="login-form" onSubmit={handleUpdate}>
            <Form.Group id="firstname" className="login-form__group">
              <Form.Label className="login-form__label">
                Display Name
              </Form.Label>
              <Form.Control
                type="text"
                ref={displayNameRef}
                className="login-form__value"
                require
              />
            </Form.Group>
            <Form.Check
              type="checkbox"
              id="ast-checkbox"
              label="I have my AST Certification"
              ref={astRef}
            />
            <Form.Check
              type="checkbox"
              id="firstaid-checkbox"
              label="I have First Aid Certification"
              ref={firstAidRef}
            />
            <div className="login-form__buttons">
              <Button type="submit">Update</Button>
              <Button type="button" onClick={handleCancel}>
                Cancel
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div></div>
    </article>
  );
}
