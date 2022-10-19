import React from "react";
import { useLoaderData } from "react-router-dom";
import SharedNewsCard from "../../SharedPages/SharedNewsCard/SharedNewsCard";

const Home = () => {
  const homeNews = useLoaderData();
  return (
    <div className="d-flex flex-column gap-3">
      {homeNews.map((news) => (
        <SharedNewsCard key={news._id} news={news}></SharedNewsCard>
      ))}
    </div>
  );
};

export default Home;
