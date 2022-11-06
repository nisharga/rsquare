import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import image from "../../Aasect/404.png";
const Errorpage = () => {
  return (
    <div className="flex justify-center items-center flex-col footer">
      <div className="four_o_four w-96 flex justify-center  sm:flex-row flex-col  ">
        <h1>4</h1>
        <img className="mask mask-circle" src={image} alt="logo" />
        <h1>4</h1>
      </div>
      <div className="w-96 mt-2 mb-2">
        <p className="footer_text">
          oops! looks like you are lost.
          <br /> The page you are looking for could not be found.
        </p>
      </div>
      <div className="mb-4">
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faCircleArrowLeft} className="pr-2" />
          Back to home
        </button>
      </div>
    </div>
  );
};

export default Errorpage;
