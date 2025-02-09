
/*
Source :https://www.youtube.com/watch?v=pUNSHPyVryU
*/
import { Hero } from "@/components"; 
import CallToAction from "@/components/CallToAction"; 
import MarineEcosystems from "@/components/MarineEcosystems"; 
import OceanMap from "@/components/OceanMap"; 
import Boxes from "@/components/Boxes"; 
import UnityProject from "@/components/UnityProject"; 
import BubbleAnimation from "@/components/BubbleAnimation"; // Import des bulles

export default function Home() {
  return (
    <main className="overflow-hidden relative bg-blue-900 text-white">
      {/* Bulles sur toute la page */}
      <BubbleAnimation />

      <Hero />

      <div className="mt-12 padding-x padding-y max-width relative z-10" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold text-white">Découvrez l'océan</h1>
          <p className="home__subtitle">
            Plongez dans l'océan et explorez les merveilles des profondeurs.
          </p>
        </div>
      </div>

      {/* Carte des océans */}
      <OceanMap />

      {/* Autres sections */}
      <MarineEcosystems />
      <Boxes />

      {/* Intégration du projet Unity */}
      <UnityProject />

      <CallToAction />
    </main>
  );
}
