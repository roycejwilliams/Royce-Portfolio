import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
  const [isOpen1, setIsOpen1] = useState(false); // State for the first section
  const [isOpen2, setIsOpen2] = useState(false); // State for the second section
  const [isOpen3, setIsOpen3] = useState(false); // State for the third section

  const toggleDown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDown3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="relative lg:inline-block hidden lg:visible text-left  h-full xl:flex justify-center items-center xl:flex-col">
      {/* Third Section */}
      <div className="flex w-full justify-start items-center px-4">
        <span className="text-m tracking-widest text-white font-clash font-medium uppercase text-xs md:text-md">
          Interest ?{" "}
        </span>
        <button
          onClick={toggleDown3}
          className="ml-2 p-2 cursor-pointer text-white"
        >
          {isOpen3 ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} />
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-max-h ${
          isOpen3 ? "max-h-36 md:max-h-52" : "max-h-0"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="py-1 font-clash">
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Typography
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Photography
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Architecture
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Design
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Culinary
          </li>
        </ul>
      </div>
      <div className="flex w-full justify-start items-center px-4">
        <span className="tracking-widest text-white font-clash font-medium uppercase text-xs md:text-md">
          Who Am I ?
        </span>
        <button
          onClick={toggleDown1}
          className="ml-2 p-2 cursor-pointer text-white"
        >
          {isOpen1 ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} />
          )}{" "}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-max-h ${
          isOpen1 ? "max-h-44 md:max-h-48" : "max-h-0"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="py-1 font-clash">
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Multi-disciplinary Designer
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Computer Engineer
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Food Enthuiast
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Developer
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white font-bold tracking-widest">
            Founder of REVITAL
          </li>
        </ul>
      </div>
      {/* Second Section */}
      <div className="flex w-full justify-start items-center px-4">
        <span className="text-m tracking-widest text-white font-clash font-medium uppercase text-xs md:text-md">
          Based ?{" "}
        </span>
        <button
          onClick={toggleDown2}
          className="ml-2 p-2 cursor-pointer text-white"
        >
          {isOpen2 ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} />
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-max-h ${
          isOpen2 ? "max-h-40 md:max-h-72" : "max-h-0"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="py-1 font-clash">
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Austin
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            San Francisco
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Seattle
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Chicago
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Sacramento
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest">
            Los Angeles
          </li>
          <li className="px-4 py-0.5 lg:py-1 text-xxs md:text-xs text-white tracking-widest font-bold">
            ANYWHERE, EVERYWHERE
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
