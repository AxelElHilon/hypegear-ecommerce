import { useState, useEffect } from "react";
import Lottie from "lottie-react";

export default function LoadingScreen() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animation1.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error cargando animación:", error));
  }, []);

  if (!animationData) {
    return <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white">Cargando...</div>;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50">
      <Lottie
        animationData={animationData}
        loop
        className="w-48 h-48"
      />
      <h1 className="text-black mt-6 text-lg animate-pulse">
        Cargando Hype Gear...
      </h1>
    </div>
  );
}
