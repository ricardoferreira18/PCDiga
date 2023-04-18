import React from "react";
import { SwiperSlide } from "swiper/react";

const Card = ({ item }) => {
  return (
    <div className="w-[210px] sm:w-[245px] m-0 bg-white dark:bg-midnight p-2 h-full">
      <div className=" max-w-full overflow-hidden bg-white rounded-md flex justify-center h-52">
        <img src={item.src} alt="" style={{ width: "200px" }} />
      </div>
      <h3 className="h-8 mt-2 text-xs font-bold  rounded-md cursor-pointer sm:h-12 with-tab sm:text-base-sm sm:leading-6 line-clamp-2 hover-underline-animation ">
        <a href="#">{item.title}</a>
      </h3>
      <p className="h-8 text-xs mt-p3 sm:h-12 line-clamp-2 sm:line-clamp-3 sm:leading-4 text-gray-dark">
        {item.description}
      </p>
      <p className="mt-2 mb-1.5 h-4 lg:h-4 text-xxs sm:text-xs">{item.code}</p>
      <p className="flex flex-wrap items-center justify-between mt-1 gap-x-2 main-green">
        {item.stock}
      </p>
      <p className="font-medium main-green text-xs">{item.entrega}</p>
      <div className="flex justify-between flex-grow price_special_price_wrapper">
        <p className="text-lg font-extrabold sm:text-2xl main-color">
          {item.price}
        </p>
        <div>
          <p className="font-extrabold pvpr-gray text-xs">PVPR</p>
          <p className=" font-black line-through text-xs">{item.oldPrice}</p>
        </div>
      </div>
      <div className="mt-2 flex gap-x-2.5 h-6 justify-between">
        <div className="hidden sm:flex gap-2 items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.56532 14.0292C7.09751 13.6119 6.56878 13.1779 6.00959 12.7162H6.00234C4.0332 11.0968 1.80152 9.26446 0.815861 7.06885C0.492036 6.36985 0.320425 5.60934 0.312508 4.83823C0.310346 3.78017 0.732288 2.76588 1.48298 2.02461C2.23367 1.28334 3.24975 0.877662 4.30156 0.899258C5.15784 0.900618 5.99569 1.14951 6.71529 1.6163C7.03149 1.8227 7.31758 2.07238 7.56532 2.35814C7.81444 2.0735 8.10061 1.82397 8.41607 1.6163C9.13536 1.14942 9.97301 0.900511 10.8291 0.899258C11.8809 0.877662 12.897 1.28334 13.6477 2.02461C14.3984 2.76588 14.8203 3.78017 14.8181 4.83823C14.8107 5.61057 14.6391 6.37238 14.3148 7.0725C13.3291 9.26811 11.0982 11.0997 9.12902 12.7162L9.12177 12.722C8.56185 13.1808 8.03385 13.6148 7.56605 14.035L7.56532 14.0292ZM4.30156 2.35814C3.62597 2.34963 2.97435 2.60968 2.48836 3.08174C2.02011 3.54432 1.7584 4.17812 1.76302 4.83823C1.77129 5.40026 1.89785 5.95416 2.13442 6.46342C2.5997 7.41074 3.2275 8.26809 3.98896 8.99603C4.70772 9.72547 5.53453 10.4316 6.24966 11.0253C6.44766 11.1895 6.64929 11.355 6.85092 11.5206L6.97784 11.6249C7.17149 11.7839 7.37167 11.9488 7.56532 12.1107L7.57475 12.102L7.5791 12.0983H7.58345L7.58998 12.0932H7.59361H7.59723L7.61029 12.0823L7.64002 12.0582L7.6451 12.0538L7.65308 12.048H7.65743L7.66396 12.0422L8.14554 11.6446L8.27174 11.5403C8.47555 11.3733 8.67717 11.2077 8.87518 11.0436C9.5903 10.4498 10.4178 9.74443 11.1366 9.01135C11.8982 8.28378 12.526 7.42665 12.9911 6.47947C13.232 5.96579 13.3604 5.4061 13.3676 4.83823C13.3706 4.18016 13.109 3.54879 12.6423 3.08757C12.1572 2.61338 11.5055 2.35119 10.8291 2.35814C10.0037 2.35108 9.21456 2.69905 8.66049 3.31443L7.56532 4.58365L6.47015 3.31443C5.91608 2.69905 5.12698 2.35108 4.30156 2.35814Z"
              className="fill-black  dark:fill-white"
            />
          </svg>

          <p>Wishlist</p>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.40509 12.2994L1.77869 9.38168L5.40509 6.46393V8.65225H14.8337V10.1111H5.40509V12.2994ZM9.75677 6.46393V4.27561H0.328125V2.81673H9.75677V0.628418L13.3832 3.54617L9.75677 6.46393Z"
              className="fill-black  dark:fill-white"
            />
          </svg>

          <p>Comparar</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
