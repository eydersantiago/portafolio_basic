import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useTranslation } from "react-i18next";

import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/Loading.jsx";

const Education = () => {
  const { t } = useTranslation(); // Hook para las traducciones
  const [animationName, setAnimationName] = useState("idle");

  // Datos de la línea del tiempo de educación
  const educationData = [
    {
      date: t("education.date1"),
      description: t("education.technologyStart"),
    },
    {
      date: t("education.date2"),
      description: t("education.engineeringStart"),
    },
    {
      date: t("education.date3"),
      description: t("education.technologyGraduation"),
    },
    {
      date: t("education.current"),
      description: t("education.currentSemester"),
    },
  ];

  return (
    <section className="c-space my-20" id="education">
      <div className="w-full text-white-600">
        <p className="head-text">{t("education.heading")}</p>

        {/* Contenedor principal */}
        <div className="work-container">
          {/* Canvas interactivo */}
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          {/* Contenido de la línea del tiempo */}
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName("wave")}
                  onPointerOver={() => setAnimationName("wave")}
                  onPointerOut={() => setAnimationName("idle")}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <div className="w-10 h-10 rounded-full bg-gray-600 flex justify-center items-center text-white font-bold">
                        {index + 1}
                      </div>
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.date}</p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
