"use client"; // 🚀 Ajoute ça en haut du fichier !

import CustomButton from "./CustomButton"; 
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CallToAction = () => {
  const [bubbles, setBubbles] = useState([]);
  
  useEffect(() => {
    // Générer des bulles avec des positions aléatoires
    const randomBubbles = [];
    for (let i = 0; i < 5; i++) {
      randomBubbles.push({
        id: i,
        x: Math.random() * 100 - 50, // Déplacement horizontal entre -50% et 50% de la largeur
        y: Math.random() * 100 - 50, // Déplacement vertical entre -50% et 50% de la hauteur
        size: Math.random() * 20 + 5, // Taille aléatoire des bulles
      });
    }
    setBubbles(randomBubbles);
  }, []);

  // Fonction de redirection au clic sur le bouton
  const handleExploreNowClick = () => {
    console.log("Button clicked!"); // Log to verify the function is called
    window.location.href = "https://www.theoceanagency.org/"; // Redirige vers le site Web
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-600 to-blue-900 text-white py-20 overflow-hidden">
      {/* Effet de lumière sous-marine */}
      <div className="absolute inset-0 bg-opacity-30 bg-blue-400 mix-blend-overlay animate-pulse"></div>

      {/* Animation du sous-marin sur une trajectoire définie */}
      <motion.div
        className="absolute"
        animate={{
          x: [0, 300, 0, -300, 0], // Déplacement horizontal suivant une trajectoire en "zigzag"
          y: [0, 100, 200, 100, 0], // Mouvement vertical
        }}
        transition={{
          repeat: Infinity, // Répétition infinie du trajet
          repeatType: "loop", // Type de répétition
          duration: 10, // Durée d'un cycle de déplacement
          ease: "easeInOut", // Type d'animation fluide
        }}
      >
        {/* Corps du sous-marin */}
        <div className="relative w-64 h-20 bg-yellow-500 rounded-full shadow-xl">
          {/* Hublots */}
          <div className="absolute top-2 left-4 w-10 h-10 bg-blue-200 rounded-full shadow-lg"></div>
          <div className="absolute top-2 right-4 w-10 h-10 bg-blue-200 rounded-full shadow-lg"></div>
          
          {/* Périscope */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-16 bg-gray-800 rounded-t-full shadow-lg"></div>
        </div>
      </motion.div>

      {/* Bulles aléatoires */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="bg-white rounded-full opacity-50"
            style={{
              width: bubble.size,
              height: bubble.size,
            }}
            animate={{
              y: ["0%", "80%", "0%"],  // Animation verticale de montée
              x: [`${bubble.x}%`, `${bubble.x + Math.random() * 50 - 25}%`],  // Déplacement horizontal aléatoire
              opacity: [0.5, 1, 0.5],  // Fluctuation de l'opacité pour effet naturel
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: Math.random() * 4 + 3, // Durée de l'animation de manière aléatoire
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-extrabold tracking-wide uppercase drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Rejoignez l'Aventure Océanique
        </motion.h2>

        <motion.p 
          className="text-lg mt-4 text-blue-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Plongez dans un monde sous-marin fascinant et aidez à préserver ses merveilles. 
          Ensemble, explorons, comprenons et protégeons les océans.
        </motion.p>

        {/* Effet d'animation du bouton */}
        <motion.div 
          className="mt-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <CustomButton
            title="Explorer Maintenant"
            btnType="button"
            containerStyles="text-white font-semibold text-lg rounded-full bg-green-500 px-6 py-3 hover:bg-green-700 shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={handleExploreNowClick} // Ajout du gestionnaire d'événements
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;