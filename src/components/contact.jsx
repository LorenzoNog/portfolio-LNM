import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import CustomButton from "./customButton";

const Contact = () => {
  return (
    <div data-aos="fade-left" className="overflow-x-hidden mb-[3%]">
      <div className="absolute z-[3] left-[-20%] top-[30vh] w-[25%] h-[20%] rounded-full blue-gradient" />
      <div className="flex flex-col p-5 mt-[5%]">
        <h2 className="uppercase text-gray-300 text-[50px] sm:text-[105px] font-extrabold font-text text-center sm:text-end">
          Contacto
        </h2>
        <div className="flex flex-col justify-center items-center gap-10 mt-[5%]">
          <div
            className="flex flex-col gap-5 justify-center items-center cursor-pointer"
            onClick={() => window.open("https://gmail.com")}
          >
            <AiOutlineMail className="text-[70px]" />
            <span className="text-[20px] text-gray-400">
              lorenzonm01@gmail.com
            </span>
          </div>
          <div
            className="flex flex-col gap-5 justify-center items-center cursor-pointer"
            onClick={() =>
              window.open("https://www.linkedin.com/in/lorenzonoguera/")
            }
          >
            <AiFillLinkedin className="text-[70px]" />
            <span className="text-[20px] text-gray-400">
              Lorenzo Noguera Martínez
            </span>
          </div>
          <div
            className="flex flex-col gap-5 justify-center items-center cursor-pointer "
            onClick={() => window.open("https://github.com/LorenzoNog")}
          >
            <AiFillGithub className="text-[70px]" />
            <span className="text-[20px] text-gray-400">
              Lorenzo Noguera Martínez
            </span>
          </div>
          <div>
            <a href="archivos/cv.pdf" download="Lorenzo Noguera C.V.">
              <CustomButton
                title="Descargar C.V."
                styles="rounded-xl hover:scale-[1.1]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute z-[3] right-[0%] bottom-[20vh] w-[15%] h-[10%] rounded-full blue-gradient" />
    </div>
  );
};

export default Contact;
