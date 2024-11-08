import React from 'react';

const Banner = ({ title, description }) => {
  return (
    <div className="banner">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Banner;
