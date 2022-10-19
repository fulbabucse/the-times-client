import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SharedNewsCard from "../../SharedPages/SharedNewsCard/SharedNewsCard";

const Category = () => {
  const [showMore, setShowMore] = useState(3);
  const categoryNews = useLoaderData();

  const categoriesNews = categoryNews.slice(0, showMore);

  const handleShowMore = () => {
    setShowMore(showMore + showMore);
  };

  return (
    <div>
      <h4>{categoryNews.length} News founds this Category</h4>
      <div className="d-flex flex-column gap-4">
        {categoriesNews.map((news) => (
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

export default Category;
