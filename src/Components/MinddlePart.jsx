import React from 'react';
import { TypingEffect } from "./TypingEffect";
import { Link } from 'react-router';
import { motion } from "framer-motion";

const MinddlePart = () => {
  return (
    <motion.div
      className="relative w-full md:w-1/2 space-y-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="text_1"
        data-aos="fade-right"
        data-aos-duration="1500"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hello, My Name Is
      </motion.div>

      <motion.div
        className="text_2"
        data-aos="fade-right"
        data-aos-duration="2000"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span>MD.AHSAN</span> <span>HABIB</span>
      </motion.div>

      <TypingEffect />

      <motion.div
        className="intro_text max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>
          A passionate MERN Stack Web Developer with a strong focus on Front-End Development.I love crafting clean, scalable code and building intuitive, user-friendly interfaces. My goal is to solve real-world problems by blending performance with seamless user experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className='flex gap-4 my-4'
      >
        <Link to={`/contact`} className="btn hireButtonDesign animate-bounce">
          Contact Me↗
        </Link>

        <a
          href="/cv.pdf"
          download="MD_AHSAN_HABIB_CV.pdf"
          className="btn buttonDesign animate-bounce"
        >
          See Resume↗
        </a>


      </motion.div>
    </motion.div>
  );
};

export default MinddlePart;
