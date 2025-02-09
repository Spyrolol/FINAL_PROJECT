import React from "react";

const UnityProject = () => {
  return (
    <section className="py-12 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-8">
          Explorez les Profondeurs de l'Océan
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-6">
          Plongez dans une simulation marine fascinante et découvrez les merveilles 
          cachées des abysses. Des récifs coralliens éclatants aux mystérieuses fosses 
          abyssales, explorez la beauté et la complexité du monde sous-marin.
        </p>
        <div
          className="relative w-full h-[800px] border-4 border-blue-300 rounded-lg overflow-hidden shadow-lg"
        >
          {/* Assurez-vous que le chemin d'accès au fichier est correct */}
          <iframe
            src="Build/Build/index.html" // Vérifiez que ce chemin correspond à l'emplacement réel du fichier index.html de votre build Unity
            style={{ width: "100%", height: "100%", border: "none" }}
            title="Simulation Sous-Marine Unity"
          />
        </div>
      </div>
    </section>
  );
};

export default UnityProject;
