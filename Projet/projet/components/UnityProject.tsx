'use client';

import React, { useState } from 'react';
import './QuizStyles.css'; // Assurez-vous d'inclure votre fichier CSS

const FishExtinctionInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="info-container">
      <h2 className="title">Les poissons en voie d'extinction</h2>
      <p className="intro">
        Les poissons en voie d'extinction souffrent de la pêche excessive, de la pollution et du réchauffement climatique.
        Certaines espèces emblématiques, comme le thon rouge et le saumon, sont en danger.
      </p>

      <button className="info-toggle-btn" onClick={handleToggleInfo}>
        {showInfo ? 'Masquer les détails' : 'Voir plus de détails'}
      </button>

      {showInfo && (
        <div className="details fade-in">
          <h3 className="subtitle">Causes principales de l'extinction</h3>
          <ul className="causes-list">
            <li><span className="cause">Pollution de l'eau :</span> Perturbation des habitats naturels.</li>
            <li><span className="cause">Pêche illégale :</span> Épuisement des stocks de poissons.</li>
            <li><span className="cause">Réchauffement climatique :</span> Modifications des écosystèmes marins.</li>
          </ul>

          <h3 className="subtitle">Solutions pour la préservation</h3>
          <ul className="solutions-list">
            <li><span className="solution">Pêche durable :</span> Adoption de pratiques de pêche respectueuses des écosystèmes.</li>
            <li><span className="solution">Réduire la pollution :</span> Limiter les déchets plastiques et chimiques dans les océans.</li>
            <li><span className="solution">Réserves marines :</span> Création d'espaces protégés pour préserver la biodiversité marine.</li>
            <li><span className="solution">Initiatives locales :</span> Restauration des habitats marins dégradés.</li>
          </ul>

          <p className="closing-text">
            En adoptant ces solutions, nous pouvons inverser la tendance et protéger la vie marine pour les générations futures.
          </p>
        </div>
      )}
    </div>
  );
};

export default FishExtinctionInfo;
