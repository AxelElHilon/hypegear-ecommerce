import { useState, useEffect } from "react";
import Lottie from "lottie-react";

export default function LoadingScreen({ fadeOut }) {
  const [animationData, setAnimationData] = useState(null);
  const [currentText, setCurrentText] = useState(0);
  
  const texts = [
    "Ajustando la facha... 👟",
    "Subiendo el hype...🚀",
    "Preparando tu outfit...👕",
    "Activando el modo hype...💎",
    "Acomodando el drip...🧢✨"
  ];

  useEffect(() => {
    fetch("/animation1.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error cargando animación:", error));
  }, []);

    // 2) Cambiar el texto automáticamente cada 1.5 segundos
    useEffect(() => {
      const textTimer = setInterval(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
      }, 1500);
  
      return () => clearInterval(textTimer);
    }, []);

  if (!animationData) {
    return <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white">Cargando...</div>;
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`transition-all duration-500 ${
          fadeOut ? "scale-75 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <Lottie
          animationData={animationData}
          loop
          className="w-48 h-48"
        />
      </div>
      <h1 className="text-black mt-6 text-lg animate-pulse">
        {texts[currentText]}
      </h1>
    </div>
  );
}
