import { useRef } from "react";
import { useContext } from "react";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Image } from "react-bootstrap";
import UserThumb from "../../../assets/user.png";
import toast from "react-hot-toast";

function Profile() {
  const { user, updatesUserProfile, changedPassword, deleteUserProfile } =
    useContext(AuthContext);

  const userNameRef = useRef(user.displayName);
  const photoRef = useRef(user.photoURL);
  const contactNumberRef = useRef(user.phoneNumber);
  const updatePasswordRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = userNameRef.current.value;
    const photoUrl = photoRef.current.value;
    const contactNumber = contactNumberRef.current.value;
    handleUpdatesProfile(name, photoUrl, contactNumber);
    toast.success("Profile updated");
  };

  const handleUpdatesProfile = (name, photo, contact) => {
    const updateInfo = {
      displayName: name,
      photoURL: photo,
      phoneNumber: contact,
    };
    updatesUserProfile(updateInfo)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.error(err));
  };

  const handleChangedPassword = (e) => {
    toast.success("Password Change successfully");
    e.preventDefault();
    const updatedPassword = updatePasswordRef.current.value;

    changedPassword(updatedPassword)
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  const handleDeleteUser = () => {
    toast.error("Account deleted successfully");
    deleteUserProfile()
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className="mt-3">
      <div className="user-profile-photo">
        <Image src={user?.photoURL || UserThumb} alt={user?.displayName} />
      </div>
      <h3 className="text-center fw-bold mb-4">{user?.displayName}</h3>

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="contact" title="User Details">
          <h4>{user?.displayName}</h4>
          <span>
            Email:
            <a
              href={`mailto:${user?.email}`}
              className="text-decoration-none mx-1"
            >
              {user?.email}
            </a>
          </span>
          <p className="m-0">
            Email Status:{" "}
            <span
              className={`fw-bold ${
                user?.emailVerified === true
                  ? "verifiedColor"
                  : "unVerifiedColor"
              }`}
            >
              {user?.emailVerified === true ? "Verified" : "Not Verified"}
            </span>
          </p>
          <p>
            Contact Number:
            <a
              href={`tel:${user?.phoneNumber || "121"}`}
              className="text-decoration-none mx-1"
            >
              {user?.phoneNumber ? user?.phoneNumber : "121"}
            </a>
          </p>
        </Tab>

        <Tab eventKey="home" title="Change User Info">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                defaultValue={user?.displayName}
                type="text"
                ref={userNameRef}
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                defaultValue={user?.phoneNumber}
                type="text"
                ref={contactNumberRef}
                placeholder="Phone Number"
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
        </Tab>
        <Tab eventKey="profile" title="Change Password">
          <Form onSubmit={handleChangedPassword}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={updatePasswordRef}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Change Password
            </Button>
          </Form>
        </Tab>

        <Tab eventKey="danger" title="Danger Zone">
          <Button onClick={handleDeleteUser} variant="danger" type="submit">
            Delete Account
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Profile;
