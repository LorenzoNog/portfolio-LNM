import React from "react";
import { cards } from "../../data/data";
import CustomButton from "../customButton";

const ProjectCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {cards.map((card) => {
        return (
          <div key={card.id} className="flex flex-col mt-[8%]">
            <img
              src={card.imagen}
              className="w-[600px] h-[300px] rounded-xl shadow-xl"
            />
            <h2 className="text-gray-400 border-b-[1px] text-center mt-5 text-[25px] uppercase font-bold">
              {card.title}
            </h2>
            <div className="flex flex-row gap-4 mt-5 justify-center">
              <CustomButton
                title="GitHub"
                styles="rounded-xl hover:scale-[1.1]"
                handleClick={()=> window.open(card.repositorio)}
              />
              <CustomButton
                title="Demo"
                styles="rounded-xl hover:scale-[1.1]"
                handleClick={()=> window.open(card.demo)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
