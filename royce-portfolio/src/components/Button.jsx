import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = () => {
  return (
    <Link to="/portfolio"  className="w-52 h-20 flex justify-center items-center absolute">
      <motion.button animate={{ opacity: 1 }}
    transition={{ type: "tween", duration: 1.5, delay: 3 }}
    initial={{ y: 200, opacity: 0 }}  className="relative w-auto h-auto lg:text-xl  tracking-widest font-clash cursor-pointer"
      >
        ENTER
      </motion.button>
    </Link>
  );
};

export default Button;