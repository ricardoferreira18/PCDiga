import React from "react";

import data from "../../../json/categorias.json";

const CategoriesList = () => {
  return (
    <div className="flex overflow-x-scroll scroll-smooth snap-x sm:overflow-x-hidden sm:justify-center mt-5">
      {data.map((item) => {
        return (
          <div key={item.id} className="shrink-0 snap-center  dark:text-white">
            <a
              href="#"
              target="_blank"
              className="flex flex-col justify-center items-center"
            >
              <img src={item.src} className="w-32 aspect-auto object-contain" />
              <p className="hover-underline-animation">{item.title}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
