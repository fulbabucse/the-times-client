import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

function Signin() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
        if (res.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email address is not verified. Please, verify email address."
          );
        }
        setSuccess("Account login successfully !!");
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
        setError("Invalid email or password !!");
      });
  };

  return (
    <div className="w-75 mx-auto mt-4">
      <div className="text-center">
        <h3 className="fw-bold">Sign In</h3>
        <p>Sign in to access your account</p>
      </div>
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
        </Form.Group>

        <div>
          <p className="text-danger">{error}</p>
          <p>{success}</p>
        </div>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Signin;