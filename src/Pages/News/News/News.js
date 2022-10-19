import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";
import { FaEye, FaPenAlt, FaStar } from "react-icons/fa";

function News() {
  const news = useLoaderData();
  const { author, details, image_url, rating, title, total_view } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="fs-5 text-center">{title}</Card.Title>
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-1">
              <FaPenAlt></FaPenAlt>
              <span>Author: {author?.name}</span>
            </div>
            <div>
              <p className="m-0">Published Date: {author?.published_date}</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaEye className="text-warning"></FaEye>
              <span>{total_view}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaStar className="text-warning"></FaStar>
              <span>{rating?.number}</span>
            </div>
          </div>
          <Card.Text className="mt-2">{details}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default News;
