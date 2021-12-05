import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const astRef = useRef();
  const firstAidRef = useRef();
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
          <Form className="login-form" onSubmit={handleUpdate}>
            <Form.Group id="firstname" className="login-form__group">
              <Form.Label className="login-form__label">First Name</Form.Label>
              <Form.Control
                type="text"
                ref={firstNameRef}
                className="login-form__value"
              />
            </Form.Group>
            <Form.Group id="lastname" className="login-form__group">
              <Form.Label className="login-form__label">Last Name</Form.Label>
              <Form.Control
                type="text"
                ref={lastNameRef}
                className="login-form__value"
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
