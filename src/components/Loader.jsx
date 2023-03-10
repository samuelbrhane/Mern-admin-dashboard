import React from "react";
import loader from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="absolute top-0 left-[235px] md:left-[250px] z-[100] right-0 bottom-0 bg-[rgba(47,45,45,0.2)] flex justify-center items-center">
      <img
        src={loader}
        alt="loader"
        className="w-[200px] h-[200px] rounded-full"
      />
    </div>
  );
};

export default Loader;
