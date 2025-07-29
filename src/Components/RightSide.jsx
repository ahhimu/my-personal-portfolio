import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaShopify } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/ahhimu" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ahsan-habib7/" },
  { icon: <FaShopify />, url: "https://www.fiverr.com/sellers/ahasanhabibhimu/edit" },
  { icon: <FaFacebook />, url: "https://www.facebook.com/ah.himu07" },
  { icon: <FaYoutube />, url: "https://www.youtube.com/" },
];

const RightSide = () => {
  return (
    <motion.div
      className="flex flex-col justify-center gap-y-4 text-2xl"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {socialLinks.map((item, index) => (
        <motion.a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="LeftSideIcon rounded-full"
        >
          {item.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default RightSide;
