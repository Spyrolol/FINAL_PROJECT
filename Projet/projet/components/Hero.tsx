"use client";

import Image from "next/image";

import CustomButton from './CustomButton';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Animaux marins en voie d'extinction
        </h1>

        <p className=" text-white">
          Approfondisser vos connaissances sur les espèces marines en danger.
        </p>

        <CustomButton
          title="Explore le monde aquatique"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/Aquaman-Logo.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
