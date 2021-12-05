import "./CreateProfile.scss";
import React, { useState, useRef } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const userAPI = `http://localhost:8080/api/v1/users`;

export default function CreateProfile() {
  const displayNameRef = useRef();
  const astRef = useRef();
  const expRef = useRef();
  const bioRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const { currentUser } = useAuth();

  const handleCreate = (event) => {
    event.preventDefault();

    const name = displayNameRef.current.value;
    const ast = JSON.parse(astRef.current.value.toLowerCase());
    const exp = parseInt(expRef.current.value);
    const firebase_id = currentUser.uid;
    const bio = bioRef.current.value;
    const email = currentUser.email;

    if (ast === "AST Certification") {
      return setError("Please tell us if you have your AST");
    }

    if (exp === "Years of Experience") {
      return setError(
        "Please tell us how many years of backcountry experience you have"
      );
    }

    setError("");

    const user = { name, ast, exp, firebase_id, bio, email };
    axios
      .post(userAPI, user)
      .then(() => {
        setError("");
        setLoading(true);
        navigate(`/dashboard/${firebase_id}`);
      })
      .catch((err) => setError(err));

    setLoading(false);
  };

  return (
    <article className="create">
      <Card className="create-card">
        <Card.Body className="create-card__body">
          <h2 className="create-card__header">Create Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form className="create-form" onSubmit={handleCreate}>
            <Form.Group id="firstname" className="create-form__group">
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
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Form.Select>
              <Form.Select ref={expRef} required>
                <option>Years of Backcountry Exp</option>
                <option value="0">None</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                <option value="4">4 Years</option>
                <option value="5">5+ Years</option>
              </Form.Select>
            </Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Tell us a bit about yourself!"
              ref={bioRef}
            />
            <div className="login-form__buttons">
              <Button disabled={loading} type="submit">
                Create
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div></div>
    </article>
  );
}
