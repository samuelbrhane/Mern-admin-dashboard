import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl mb-1">{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Title;
