import Card from "react-bootstrap/Card";
import "./SharedNewsCard.css";
import { FaEye, FaStar, FaShare, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

function SharedNewsCard({ news }) {
  console.log(news);
  const { author, details, image_url, rating, title, total_view, _id } = news;
  return (
    <Card>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <div className="author_img">
            <img src={author.img} alt={author.name} />
          </div>
          <div className="">
            <h5 className="m-0">{author.name}</h5>
            <p className="m-0">{author.published_date}</p>
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-2"></FaRegBookmark>
          <FaShare></FaShare>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <div>
          <div>
            <img className="img-fluid" src={image_url} alt={author.name} />
          </div>
          <div>
            <p>
              {details.slice(0, 200)}...
              <Link to={`/news/${_id}`} className="text-decoration-none">
                Read more
              </Link>
            </p>
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <FaStar className="text-warning"></FaStar>
          <p className="m-0">{rating.number}</p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <FaEye className="text-warning"></FaEye>
          <p className="m-0">{total_view}</p>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default SharedNewsCard;
