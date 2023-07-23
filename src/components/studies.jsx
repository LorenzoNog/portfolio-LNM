import React from "react";

const Studies = () => {
  return (
    <div data-aos="fade-right" className="mt-[5%]">
      <div className="flex flex-col p-5">
        <h2 className="uppercase text-gray-300 text-[105px] font-extrabold font-text">
          Estudios
        </h2>
        <div className=" grid-cols-3  flex justify-center gap-[5%] mt-[5%]">
          <div className="flex flex-col justify-center items-center">
            <img src="/backend.png" className="w-[400px] h-[270px] shadow-xl" />
            <h2 className="text-gray-400 text-[20px] font-bold mt-5 uppercase">
              Certificado backend
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src="/react.png" className="w-[400px] h-[270px] shadow-xl" />
            <h2 className="text-gray-400 text-[20px] font-bold mt-5 uppercase">
              Certificado react js
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="/javascript.png"
              className="w-[400px] h-[270px] shadow-xl"
            />
            <h2 className="text-gray-400 text-[20px] font-bold mt-5 uppercase">
              Certificado javascript
            </h2>
          </div>
        </div>
        <div className="grid-cols-2 flex justify-center gap-[5%] mt-[5%]">
          <div className="flex flex-col justify-center items-center">
            <img
              src="/desarrollo.png"
              className="w-[400px] h-[270px] shadow-xl"
            />
            <h2 className="text-gray-400 text-[20px] font-bold mt-5 uppercase">
              Certificado desarrollo web
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="/bussines.png"
              className="w-[400px] h-[270px] shadow-xl"
            />
            <h2 className="text-gray-400 text-[20px] font-bold mt-5 uppercase">
              Certificado business analytics
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[5%] gap-5">
          <li>
            <span className="text-[18px] font-text">
              2 años de Ingeniería Agrónoma en la Universidad Nacional de
              Tucumán.
            </span>
          </li>
          <li>
            <span className="text-[18px] font-text">
              Secundario completo: Bachiller en economía y administración de
              empresas.
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Studies;
