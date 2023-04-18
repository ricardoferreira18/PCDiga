import React from "react";

import data from "../../json/itemCard.json";

const ItemCard = () => {
  return (
    <div className=" container p-5 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6">
      {data.map((item) => {
        return (
          <div
            className="grow basis-1/5 mt-3 bg-white dark:bg-midnight dark:text-white font-bold rounded-lg"
            key={item.id}
          >
            <h2 className="text-2xl m-3">{item.title}</h2>
            <div className="flex gap-x-1 my-3 ml-3">
              {Object.keys(item.color || {}).map((colorKey) => {
                return (
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: item.color[colorKey] }}
                    key={colorKey}
                  >
                    <a href="#"></a>
                  </div>
                );
              })}
            </div>
            <img src={item.src} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
