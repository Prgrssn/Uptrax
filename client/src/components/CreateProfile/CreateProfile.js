import "./CreateProfile.scss";
import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreateProfile() {
  const displayNameRef = useRef();
  const astRef = useRef();
  const firstAidRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const { currentUser } = useAuth();
  console.log(currentUser);

  const handleCreate = (event) => {
    event.preventDefault();
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <article className="create">
      <Card className="create-card">
        <Card.Body className="lo-card__body">
          <h2 className="login-card__header">Create Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="login-form" onSubmit={handleCreate}>
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
            <Form.Group>
              <Form.Select ref={astRef}>
                <option>AST Certification</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
              <Form.Select ref={firstAidRef}>
                <option>First Aid Certification</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
            </Form.Group>
            <div className="login-form__buttons">
              <Button type="submit">Create</Button>
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
