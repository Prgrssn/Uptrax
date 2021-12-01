import "./CreateProfile.scss";
import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreateProfile() {
  const displayNameRef = useRef();
  const astRef = useRef();
  const firstAidRef = useRef();
  const expRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const { currentUser } = useAuth();
  console.log(currentUser);

  const handleCreate = (event) => {
    event.preventDefault();

    const displayName = displayNameRef.current.value;
    const ast = astRef.current.value;
    const firstAid = firstAidRef.current.value;
    const yearsExp = expRef.current.value;
    const firebaseID = currentUser.uid;

    if (ast === "AST Certification") {
      return setError("Please tell us if you have your AST");
    }

    if (firstAid === "First Aid Certification") {
      return setError("Please tell us if you have First Aid certification");
    }

    if (yearsExp === "Years of Experience") {
      return setError(
        "Please let us know how many years of backcountry experience you have"
      );
    }

    setError("");

    const user = { displayName, ast, firstAid, yearsExp, firebaseID };
    console.log(user);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <article className="create">
      <Card className="create-card">
        <Card.Body className="create-card__body">
          <h2 className="create-card__header">Create Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="create-form" onSubmit={handleCreate}>
            <Form.Group id="firstname" className="create-form__group">
              <Form.Label className="create-form__label">
                Display Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Display Name"
                ref={displayNameRef}
                className="create-form__value"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Select ref={astRef} required>
                <option>AST Certification</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Select ref={firstAidRef} required>
                <option>First Aid Certification</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
              <Form.Select ref={expRef} required>
                <option>Years of Experience</option>
                <option value="0-1">0-1 Years</option>
                <option value="2-4">2-4 Years</option>
                <option value="5+">5+ Years</option>
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
