import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

function Profile() {
  const { user, updatesUserProfile } = useContext(AuthContext);

  const userNameRef = useRef(user.displayName);
  const photoRef = useRef(user.photoURL);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = userNameRef.current.value;
    const photoUrl = photoRef.current.value;
    handleUpdatesProfile(name, photoUrl);
  };

  const handleUpdatesProfile = (name, photo) => {
    const updateInfo = {
      displayName: name,
      photoURL: photo,
    };
    updatesUserProfile(updateInfo)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h3 className="text-center fw-bold mt-4">Updates Profile</h3>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            defaultValue={user?.displayName}
            type="text"
            ref={userNameRef}
            placeholder="Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            defaultValue={user?.email}
            type="email"
            disabled
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo link</Form.Label>
          <Form.Control
            ref={photoRef}
            defaultValue={user?.photoURL}
            type="text"
            placeholder="Update photo link"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default Profile;
