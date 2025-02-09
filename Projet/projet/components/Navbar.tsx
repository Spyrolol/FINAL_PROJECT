"use client"; // Assurez-vous que ce fichier est marqué côté client

import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("ocean-exploration");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Image
          src="/Aquaman-Logo.png"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />

       
      </nav>
    </header>
  );
};

export default NavBar;
