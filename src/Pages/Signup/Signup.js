import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

function Signup() {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const handleUserSignUp = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const form = e.target;
    const name = form.name.value;
    const photoLink = form.photoLink.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoLink, email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        form.reset();
        console.log(user);
        setSuccess("Account created successfully !!");
      })
      .catch((err) => {
        console.error(err);
        setError("This email already have exists !!!");
      });
  };
  return (
    <Form onSubmit={handleUserSignUp}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Link</Form.Label>
        <Form.Control
          type="text"
          name="photoLink"
          placeholder="Enter your photo link"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter Password"
        />
        <p className="text-danger">{error}</p>
        <p>{success}</p>
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default Signup;
