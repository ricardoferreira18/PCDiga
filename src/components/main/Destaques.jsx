import React from "react";
import data from "../../../json/destaques.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import "swiper/swiper.min.css";

const Destaques = () => {
  return (
    <section className="container p-5 dark:text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl dark:text-white hover-underline-animation">
          <a href="#" target="_blank">
            Em destaque
          </a>
        </h2>
        <div className=" hover-underline-animation">
          <a href="#" target="_blank">
            Ver mais
          </a>
        </div>
      </div>
      <Swiper className="h-[29rem] mt-5" slidesPerView={2}>
        <SwiperSlide>
          <div className="bg-destaque  flex flex-col justify-between h-full w-[200px]">
            <h2 className="font-black upparcase text-4xl	">apple days</h2>
            <img src="/main/destaque/time.svg" alt="time" />
            <img src="/main/destaque/promo-date.svg" alt="promo-date" />
            <button className="pointer uppercase">ver produtos</button>
          </div>
        </SwiperSlide>
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Destaques;
