import React from "react";
import { Link } from "react-router-dom";

import navImg from "/public/images/royce-logo.png";

const Navbar = () => {
  return (
    <div className="bg-transparent w-fit h-fit ml-4 absolute left-0 top-2">
      <Link to="/portfolio" className="cursor-pointer">
        <img className="w-16 h-auto invert" src={navImg} alt="Image" />
      </Link>
    </div>
  );
};

export default Navbar;
