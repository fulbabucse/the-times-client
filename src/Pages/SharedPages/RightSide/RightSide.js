import React from "react";
import "./RightSide.css";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import BrandCarousel from "../Carousel/BrandCarousel";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const RightSide = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <ButtonGroup vertical className="d-flex gap-2">
        <Button
          onClick={handleGoogleSignIn}
          variant="outline-secondary"
          className="rounded-1"
        >
          <FaGoogle></FaGoogle> Log in with Google
        </Button>
        <Button variant="outline-success" className="rounded-1">
          <FaGithub></FaGithub> Log in with Github
        </Button>
      </ButtonGroup>
      <div className="mt-2">
        <h4>Follow us on</h4>
        <ListGroup>
          <ListGroup.Item className="mb-2 rounded-1 border follow_us_icon">
            <Link>
              <FaFacebook></FaFacebook> Facebook
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded-1 border follow_us_icon">
            <Link>
              <FaYoutube></FaYoutube> Youtube
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded-1 border follow_us_icon">
            <Link>
              <FaTwitter></FaTwitter> Twitter
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded-1 border follow_us_icon">
            <Link>
              <FaDiscord></FaDiscord> Discord
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded-1 border follow_us_icon">
            <Link>
              <FaWhatsapp></FaWhatsapp> Whatsapp
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSide;
