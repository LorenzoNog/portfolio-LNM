import React from "react";

const Presentation = () => {
  return (
    <div className="p-[17%] mb-[5%] overflow-x-hidden">
      <div className="absolute z-[3] left-[-20px] top-0 w-[25%] h-[20%] rounded-full blue-gradient" />
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="font-title text-[65px] text-center ">
          Lorenzo Noguera Martínez
        </h1>
        <p className="font-text text-[30px] font-medium">
          Full Stack Developer
        </p>
      </div>
      <div className="absolute z-[3] right-[-20px] bottom-0 w-[25%] h-[20%] rounded-full blue-gradient" />
    </div>
  );
};

export default Presentation;
