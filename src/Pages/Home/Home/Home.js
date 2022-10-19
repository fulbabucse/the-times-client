import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SharedNewsCard from "../../SharedPages/SharedNewsCard/SharedNewsCard";

const Home = () => {
  const [showMore, setShowMore] = useState(4);
  const homePageNews = useLoaderData();

  const homeNews = homePageNews.slice(0, showMore);

  const handleShowMore = () => {
    setShowMore(showMore + showMore);
  };

  return (
    <div>
      <div className="d-flex flex-column gap-3">
        {homeNews.map((news) => (
          <SharedNewsCard key={news._id} news={news}></SharedNewsCard>
        ))}
      </div>
      <div className="text-center mt-3">
        <button onClick={handleShowMore} className="btn btn-primary">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Home;
