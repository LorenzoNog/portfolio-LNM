import React from "react";
import {BsCodeSlash} from 'react-icons/bs'
import {AiFillDatabase} from 'react-icons/ai'

const AboutMe = () => {
  return (
    <div data-aos="fade-right">
      <div className="flex flex-col p-5 ">
        <h2 className="text-center sm:text-start uppercase text-gray-300 text-[50px] sm:text-[105px] font-extrabold font-text">
          Sobre mí
        </h2>
        <div className="flex flex-col  sm:flex-row mt-10 gap-10 justify-center items-center">
          <img
            src="/bachi.png"
            className="w-[320px] h-[300px] rounded-full shadow-xl"
          />
          <p className="text-justify w-[100%] sm:w-[50%] font-text tracking-wider text-[18px]">
            Desarrollador Full Stack certificado con conocimientos básicos en
            diseño ux/ui. Poseo una base técnica y habilidades para abordar
            proyectos desde la planificación hasta la implementación. Soy un
            apasionado de la resolución de problemas y me gusta enfrentar nuevos
            desafíos de manera creativa. Además, tengo una actitud proactiva y
            me gusta trabajar en equipo, aportando ideas y colaborando para
            alcanzar los objetivos establecidos. Busco crear soluciones web de
            calidad que combinen un diseño atractivo con un rendimiento óptimo,
            brindando experiencias excepcionales a los usuarios finales.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center px-[20%] mt-[5%]">
          <div className="flex flex-col gap-5 mb-[25%] sm:mb-0">
            <div className="flex flex-col justify-center items-center gap-5">
              <h2 className="text-black text-[30px] font-bold">Frontend</h2>
              <BsCodeSlash className="text-gray-300 text-[80px]" />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <div className="flex flex-row gap-5">
                <div className="flex justify-center rounded-md p-1 bg-blue-gradient w-[105px]">
                  <span className="text-black font-medium">HTML5</span>
                </div>
                <div className="flex justify-center rounded-md p-1 bg-blue-gradient w-[105px]">
                  <span className="text-black font-medium">CSS3</span>
                </div>
                <div className="flex justify-center rounded-md p-1 bg-blue-gradient w-[105px]">
                  <span className="text-black font-medium">JavaScript</span>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex justify-center rounded-md p-1 bg-blue-gradient w-[105px]">
                  <span className="text-black font-medium">Tailwind css</span>
                </div>
                <div className="flex justify-center rounded-md p-1 bg-blue-gradient w-[105px]">
                  <span className="text-black font-medium">Typescript</span>
                </div>
                <div className="flex justify-center rounded-md p-1 bg-blue-gradient w-[105px]">
                  <span className="text-black font-medium">React JS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col justify-center items-center gap-5 mt-[-50px]">
              <h2 className="text-black text-[30px] font-bold">Backend</h2>
              <AiFillDatabase className="text-gray-300 text-[80px]" />
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <div className="flex flex-row gap-5">
                <div className="flex justify-center rounded-md p-1 bg-blue-gradient w-[105px]">
                  <span className="text-black font-medium">Node JS</span>
                </div>
                <div className="flex justify-center rounded-md p-1 bg-blue-gradient w-[105px]">
                  <span className="text-black font-medium">Express</span>
                </div>
                <div className="flex justify-center rounded-md p-1 bg-blue-gradient w-[105px]">
                  <span className="text-black font-medium">Mongo DB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
