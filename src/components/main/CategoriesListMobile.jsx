import React from "react";

import data from "../../json/categoriasMobile.json";

const CategoriesListMobile = () => {
  return (
    <div className="container mx-auto px-4 sm:hidden">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="mt-4 flex flex-col justify-center  gap-2 bg-white dark:bg-midnight "
          >
            <h5 className="mt-4 ml-3 font-bold">{item.title}</h5>
            <div className="flex justify-between">
              <p className="mt-4 ml-3">{item.price}</p>
              <p className="mt-4 mr-3 underline underline-offset-2 font-bold">
                <a href="">Ver todos</a>
              </p>
            </div>
            <img src={item.src} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesListMobile;
