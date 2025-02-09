"use client";

import { useEffect, useState } from "react";

const BubbleAnimation = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 30 }).map((_, index) => ({
        id: index,
        size: Math.random() * 20 + 10, // Taille entre 10px et 30px
        left: Math.random() * 100, // Position horizontale aléatoire
        top: Math.random() * 100, // Position verticale aléatoire (bulles partout)
        animationDuration: Math.random() * 5 + 3, // Durée d'animation entre 3s et 8s
        delay: Math.random() * 5, // Délai de départ aléatoire
      }));
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bg-white rounded-full opacity-50"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: `${bubble.top}vh`, // On place la bulle aléatoirement sur toute la hauteur
            animation: `bubble-rise ${bubble.animationDuration}s infinite ease-in ${bubble.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes bubble-rise {
          0% {
            transform: translateY(0);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-200vh); /* Pour qu'elles partent bien hors écran */
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BubbleAnimation;
