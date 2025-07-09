/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { services } from "./ServiceGridServices";
import { motion } from "framer-motion";
import RoofLeakRepair from "../assets/RoofLeakRepair.jpeg";
import TileReplacement from "../assets/TileReplacement.jpeg";
import RoofWaterproofing from "../assets/RoofWaterproofing.jpg";
import StormDamageRestoration from "../assets/StormDamageRestoration.jpeg";
import RoofStructuralReinforcement from "../assets/RoofStructuralReinforcement.jpeg";
import RegularRoofMaintenance from "../assets/RegularRoofMaintenance.jpeg";
import CondensationAndMoistureTreatment from "../assets/CondensationAndMoistureTreatment.jpeg";
import NewTileRoofInstallation from "../assets/NewTileRoofInstallation.jpeg";

const serviceImages = [
  RoofLeakRepair,
  TileReplacement,
  RoofWaterproofing,
  StormDamageRestoration,
  RoofStructuralReinforcement,
  RegularRoofMaintenance,
  CondensationAndMoistureTreatment,
  NewTileRoofInstallation,
];

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const OurServicesGrid = () => {
  return (
    <motion.div
      className="py-20 px-6 text-center bg-[#f7f5e9]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="text-4xl font-bold text-[#0D261F] m-3 pb-10">
        Our Professional Services
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl">
          {services.map((service, index) => (
            <Link
              to={`/services/${slugify(service.title)}`}
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none"
              style={{ textDecoration: "none" }}
            >
              <img
                src={serviceImages[index]}
                alt={service.title}
                className="h-48 w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/600x300?text=Image+Unavailable";
                }}
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="text-xl font-bold text-[#0D261F] mb-2 leading-snug">
                  {service.title}
                </div>
                <p className="text-gray-700 text-xl">{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OurServicesGrid;
