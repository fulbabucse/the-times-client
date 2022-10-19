import React from "react";
import { useLoaderData } from "react-router-dom";
import SharedNewsCard from "../../SharedPages/SharedNewsCard/SharedNewsCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div className="d-flex flex-column gap-4">
      {categoryNews.map((news) => (
        <SharedNewsCard key={news._id} news={news}></SharedNewsCard>
      ))}
    </div>
  );
};

export default Category;
