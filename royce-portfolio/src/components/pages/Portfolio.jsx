import React from "react";
import "../../index.css";
import Dropdown from "../Dropdown";
import Carousel from "../Carousel";
import Sources from "../Sources";
import Photo from "../Photo";
import Autobio from "../Autobio";
import Grid from "../Grid";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Portfolio = () => {
  return (
    <div>
      <div className="flex min-h-screen w-full bg-gradient-to-r from-rosered via-rosered to-white -mb-1">
        <div className="w-1/2  flex flex-col lg:flex-none justify-evenly items-center">
          <Navbar />
          <div className=" w-full flex justify-center items-center">
            <Dropdown />
            <Sources />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center overflow-hidden h-screen bg-gradient-to-t from-rosered to-gray">
          <Carousel />
        </div>
      </div>

      <Photo />
      <Autobio />
      <Grid />
      <Footer />
    </div>
  );
};

export default Portfolio;
