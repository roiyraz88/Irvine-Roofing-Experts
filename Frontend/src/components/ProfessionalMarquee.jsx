/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";

import pro1 from "../assets/pro1.jpeg";
import pro2 from "../assets/pro2.jpeg";
import pro3 from "../assets/pro3.jpeg";
import pro4 from "../assets/pro4.jpeg";
import pro5 from "../assets/pro5.jpeg";
import pro6 from "../assets/pro6.jpeg";
import pro7 from "../assets/pro7.jpeg";
import pro8 from "../assets/pro8.jpeg";
import pro9 from "../assets/pro9.jpeg";
import pro10 from "../assets/pro10.jpeg";
import pro11 from "../assets/pro11.jpeg";

const images = [
  pro1,
  pro2,
  pro3,
  pro4,
  pro5,
  pro6,
  pro7,
  pro8,
  pro9,
  pro10,
  pro11,
];

const Marquee = () => {
  const fullImageSet = [...images, ...images]; // כפול

  return (
    <motion.section
      className="w-full py-10 bg-gray-50 overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <Typography
        variant="h5"
        align="center"
        fontWeight="bold"
        color="black"
        sx={{ mb: 4 }}
      >
        Meet the Roofing Stars of Irvine, CA
      </Typography>
      <div className="relative w-full overflow-hidden">
        <div className="w-[200%] flex gap-8 animate-marquee">
          {fullImageSet.map((src, i) => (
            <div
              key={i}
              className="rounded-full border-4 border-white shadow-lg overflow-hidden w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Professional ${i + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Marquee;
