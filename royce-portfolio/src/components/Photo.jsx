import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import image1 from "/public/images/photo(5).jpg";
import image2 from "/public/images/photo(6).jpg";
import image3 from "/public/images/photo(4).jpg";
import image4 from "/public/images/photo(1).jpg";
import image5 from "/public/images/photo(8).jpg";
import image6 from "/public/images/photo(10).jpg";
import image7 from "/public/images/photo(11).jpg";
import image8 from "/public/images/photo(12).jpg";
import image9 from "/public/images/photo(14).jpg";
import image10 from "/public/images/photo(16).jpg";
import image11 from "/public/images/photo(17).jpg";
import image12 from "/public/images/photo(18).jpg";
import image13 from "/public/images/photo(19).jpg";

const Photo = () => {
  const slides = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];

  return (
    <div className="bg-rosered min-h-screen w-full ">
      {/* Title & Description */}
      <h1 className="text-white  w-full font-regular text-2xl lg:text-4xl tracking-widest p-4  font-clash">
        THROUGH MY EYES
      </h1>
      <h3 className="font-clash font-regular text-xxs lg:text-sm tracking-wider text-white uppercase p-4 my-4">
        "I've always believed that emotions can be conveyed through photographs,
        but it's really just a fundamental aspect of art."
      </h3>

      {/* Photos */}
      <div className=" w-full py-[4%] relative xl:h-[600px] md:h-[700px] h-[450px]  flex justify-center items-center my-4">
        {slides.map((slide, index) => (
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 450 }}
            key={index}
            className="h-[100%] xl:w-1/3 md:w-3/5 w-2/3 rounded-lg shadow-sm absolute cursor-pointer z-10"
            style={{
              backgroundImage: `url('${slide}')`,
              backgroundSize: "cover",
              filter: "brightness(0.5)",
            }}
          />
        ))}

        <h3 className="text-white font-azeret uppercase font-medium tracking-widest text-center text-xxs md:text-xs p-4 absolute z-20 opacity-75">
          In my eyes the world is my reflection and perspective. It's so easy to
          get caught up in what's around you; you forget what really matters.
          The essence of being and paying attention is a directional signal. A
          signal that guides us towards a deeper understanding of life and our
          place in it. These qualities create a compass, helping us navigate
          through. Whatever it is, see it through.
        </h3>
      </div>
      {/*swipe gestures  */}
      <div className="relative w-full flex justify-center items-center mt-[2%] p-4">
        <div className="w-8 h-8 bg-gray-200 shadow-md shadow-black rounded-full absolute animate-swipe my-4"></div>
      </div>
    </div>
  );
};

export default Photo;
