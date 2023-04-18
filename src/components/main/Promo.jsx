import React from "react";
import data from "../../../json/promo.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Card from "../Card";

const Promo = () => {
  return (
    <section className="container p-5 hidden sm:block dark:text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl dark:text-white hover-underline-animation">
          <a href="#" target="_blank">
            Promoções
          </a>
        </h2>
        <div className=" hover-underline-animation">
          <a href="#" target="_blank">
            Ver mais
          </a>
        </div>
      </div>
      <Swiper slidesPerView={4} spaceBetween={50}>
        {data.map((item) => {
          return (
            <SwiperSlide className="mt-5" key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Promo;
