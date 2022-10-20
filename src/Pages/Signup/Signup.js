import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

function Signup() {
  const { createUser, updatesUserProfile, emailVerify } =
    useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [termsCheck, setTermsCheck] = useState(false);
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
        setSuccess("Account created successfully !!");
        userProfileUpdates(name, photoLink);
        handleEmailVerify();
        toast.success("Please verify your email address");
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
        setError("This email already have exists !!!");
      });
  };

  const userProfileUpdates = (name, photoLink) => {
    const updatesInfo = {
      displayName: name,
      photoURL: photoLink,
    };
    updatesUserProfile(updatesInfo)
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  const handleEmailVerify = () => {
    emailVerify()
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  const handleTermsCheck = (e) => {
    setTermsCheck(e.target.checked);
  };

  return (
    <div>
      <div className="text-center">
        <h3 className="fw-bold">Sign Up</h3>
        <p>Create a new Account</p>
      </div>
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
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleTermsCheck}
            label={
              <>
                Accept <Link to="/terms-conditions">Terms and conditions</Link>
              </>
            }
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <p>{success}</p>
        <Button variant="primary" type="submit" disabled={!termsCheck}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
