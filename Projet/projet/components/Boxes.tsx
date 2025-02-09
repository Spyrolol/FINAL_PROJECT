"use client"; // Obligatoire pour Next.js (animations & interactions)

import Image from "next/image";
import { motion } from "framer-motion";

// Importation des images directement
import vaquitaImage from "../public/im1.jpg";
import whaleSharkImage from "../public/im2.jpg";
import leatherbackTurtleImage from "../public/im3.jpg";
import bluefinTunaImage from "../public/im4.jpg";
import mantaRayImage from "../public/im5.jpg";
import indusDolphinImage from "../public/im6.jpg";
import clownfishImage from "../public/im7.jpg";
import blueWhaleImage from "../public/im8.jpg";
import redSeaCoralImage from "../public/im9.jpg";
import lionsManeJellyfishImage from "../public/im10.jpg";

// Liste des ANIMAUX MARINS EN DANGER 🦑🐢🦈
const marineAnimals = [
  {
    name: "Vaquita",
    image: vaquitaImage, 
    description: "Le plus petit dauphin du monde, en danger critique d'extinction.",
  },
  {
    name: "Requin-Martin",
    image: whaleSharkImage, 
    description: "Un gigantesque requin, en voie de disparition en raison de la pêche.",
  },
  {
    name: "Tortue Luth",
    image: leatherbackTurtleImage, 
    description: "La plus grande tortue marine, gravement menacée par la pollution et la perte d'habitat.",
  },
  {
    name: "Thon Rouge",
    image: bluefinTunaImage, 
    description: "Poisson prisé, victime de la surpêche industrielle.",
  },
  {
    name: "Raie Manta Géante",
    image: mantaRayImage, 
    description: "Raie majestueuse, menacée par la pêche et la dégradation de l'habitat.",
  },
  {
    name: "Dauphin de l'Indus",
    image: indusDolphinImage, 
    description: "Espèce de dauphin d'eau douce, en danger à cause de la pollution et des barrages.",
  },
  {
    name: "Poisson Clown de l'Atlantique",
    image: clownfishImage, 
    description: "Ce poisson a souffert de la perte de récifs coralliens et de la pêche.",
  },
  {
    name: "Baleine Bleue",
    image: blueWhaleImage, 
    description: "La plus grande créature vivante, menacée par le braconnage et la pollution.",
  },
  {
    name: "Corail de Mer Rouge",
    image: redSeaCoralImage, 
    description: "Les récifs coralliens sont en danger à cause du réchauffement des océans et de la pollution.",
  },
  {
    name: "Méduse de l'espèce Lion's Mane",
    image: lionsManeJellyfishImage, 
    description: "Ces méduses géantes souffrent des changements environnementaux et de la pollution plastique.",
  },
];

export default function Boxes() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-900 to-blue-600 overflow-hidden">
      {/* 🌊 Effet d’eau qui bouge */}
      <div className="absolute inset-0 bg-[url('/images/water-texture.png')] opacity-20 animate-[pulse_4s_infinite]"></div>

      {/* 🌟 Titre animé */}
      <motion.h2
        className="text-4xl font-extrabold text-center text-white drop-shadow-lg uppercase"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🦑 Espèces Marins en Danger d'Extinction 🦈
      </motion.h2>

      {/* 🔥 Cartes des animaux marins avec animations */}
      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {marineAnimals.map((animal, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-xl shadow-xl overflow-hidden group"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{ height: "400px" }} // Limiter la taille de la boîte
          >
            {/* 🖼 Image avec zoom au survol */}
            <div className="w-full h-48 relative"> {/* Limiter la taille de l'image */}
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* 📜 Description */}
            <div className="p-4">
              <motion.h3
                className="text-2xl font-bold text-blue-900"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {animal.name}
              </motion.h3>
              <motion.p
                className="text-gray-700 mt-2 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
              >
                {animal.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
