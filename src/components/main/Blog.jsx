import React from "react";

const Blog = () => {
  return (
    <section className="container p-5 grid sm:grid-cols-3 gap-2 h-72">
      <div className="blog item-1 flex flex-col justify-end rounded-lg">
        <p className="text-white font-bold ">Comprar Iphone 14 na PCDiga</p>
        <p className="text-white">Preços, Especificações e Disponibilidade</p>
      </div>
      <div className="blog item-2 hidden rounded-lg sm:flex flex-col justify-end">
        <p className="text-gray-500 font-bold ">
          Apple apresenta a potente Apple TV 4K de próxima geração
        </p>
      </div>
      <div className="blog item-3 hidden rounded-lg sm:flex flex-col justify-end">
        <p className="text-black font-bold ">
          O Headset da Apple poderá ser lançado em Janeiro
        </p>
      </div>
    </section>
  );
};

export default Blog;
