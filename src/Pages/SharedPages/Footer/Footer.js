import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-center mt-4">
      <p>
        &copy; {year} <strong>The Times</strong>, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
