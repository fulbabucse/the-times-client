import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h1>This is Category pages {categoryNews.length}</h1>
    </div>
  );
};

export default Category;
