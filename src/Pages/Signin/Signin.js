import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

function Signin() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { signInUser } = useContext(AuthContext);
  const handleUserSignIn = (e) => {
    setError("");
    setSuccess("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        form.reset();
        console.log(user);
        setSuccess("Account login successfully !!");
      })
      .catch((err) => {
        console.error(err);
        setError("Invalid email or password !!");
      });
  };
  return (
    <Form onSubmit={handleUserSignIn}>
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
        Sign In
      </Button>
    </Form>
  );
}

export default Signin;
