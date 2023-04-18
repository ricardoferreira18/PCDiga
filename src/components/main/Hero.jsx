import React from "react";

export const Hero = () => {
  return (
    <div className="relative sm:container sm:p-5">
      <div className="hidden sm:block w-100 absolute z-10 left-10 inset-y-1/2">
        <div className=" bg-midnight w-[20px] h-[30px] flex justify-center items-center rounded">
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 1L2 9L10 17" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <img
        className="sm:hidden w-full"
        src="/main/hero/main-banner-mobile.svg"
      />
      <img
        src="/main/hero/main-banner.svg"
        className="hidden sm:block w-full"
      />
      <div className="hidden sm:block w-100 absolute z-10 right-10 inset-y-1/2">
        <div className=" bg-midnight w-[20px] h-[30px] flex justify-center items-center rounded">
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 17L9 9L1 0.999999" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};
