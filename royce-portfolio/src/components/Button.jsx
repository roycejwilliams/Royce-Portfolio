import React from 'react';
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

const Button = () => {
  return (
    <Link to="/portfolio"  className="p-4 flex justify-center items-center tracking-wider text-lg"
    transition={{ type: "tween", duration: 1.5, delay: 3 }}
    initial={{  opacity: 0 }}
      >
        Enter
    </Link>
  );
};

export default Button;