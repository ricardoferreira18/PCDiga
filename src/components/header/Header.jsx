import React, { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const [poupanca, setPoupanca] = useState(true);
  const { theme, setTheme } = useTheme();
  const handlePoupanca = () => {
    setPoupanca((prevState) => !prevState);
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevState) => !nav);
  };

  return (
    <header className=" bg-main sm:bg-white sm:dark:bg-midnight">
      <nav className="  container p-5 ">
        <div className="hidden py-4 gap-y-3.5 sm:grid items-center container p-5">
          <ul className="hidden sm:flex gap-x-3 sm:gap-x-5 w-full items-center text-xs font-normal dark:text-white">
            <li>
              <button onClick={handleNav}>
                <svg
                  width="22"
                  height="14"
                  viewBox="0 0 22 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.499998 14H11V11.6667H0.499998V14ZM0.499998 8.16667H21.5V5.83333H0.499998V8.16667ZM0.499998 2.33333H21.5V0H0.499998V2.33333Z"
                    className="fill-black dark:fill-blue"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a href="www.pcdiga.pt" target="_blank">
                <img
                  src="/header/logo-desktop.svg"
                  className="hidden sm:block"
                  alt="pcdiga-logo"
                />
              </a>
            </li>
            <li>
              <a href="www.pcdiga.pt" target="_blank">
                <div className="hover-underline-animation flex-important gap-x-1 ">
                  Top
                  <span>vendas</span>
                </div>
              </a>
            </li>

            <li>
              <a
                href="www.pcdiga.pt"
                target="_blank"
                className="hover-underline-animation"
              >
                Promoções
              </a>
            </li>
            <li>
              <a
                href="www.pcdiga.pt"
                target="_blank"
                className="hover-underline-animation"
              >
                Campanhas
              </a>
            </li>
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5992 16.607L9.9009 10.891C7.36599 12.6985 3.87297 12.2564 1.86527 9.87395C-0.142421 7.49153 0.00499889 3.96361 2.20441 1.75802C4.40324 -0.448534 7.92122 -0.597024 10.2971 1.41644C12.673 3.42989 13.1141 6.93347 11.3118 9.47602L17.0101 15.192L15.6002 16.606L15.5992 16.607ZM6.43404 2.00001C4.54327 1.99958 2.91203 3.3307 2.52794 5.18745C2.14384 7.04421 3.11246 8.91629 4.84736 9.67026C6.58225 10.4242 8.60659 9.85285 9.69475 8.30207C10.7829 6.75129 10.6358 4.64734 9.34254 3.26402L9.94577 3.86402L9.26576 3.18402L9.2538 3.17202C8.50777 2.4192 7.49234 1.99715 6.43404 2.00001Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </span>
              <input
                className="w-[600px] bg-lightgray  dark:bg-darkSec rounded-md py-2 pl-9  shadow-sm focus:outline-none focus:none focus:none sm:text-xm placeholder:text-xs placeholder:font-normal hidden sm:block"
                placeholder="Escreva aqui o que procura"
                type="text"
                name="search"
              />
            </label>
            <li>
              <div className="flex">
                <button
                  onClick={() => {
                    setTheme("dark");
                  }}
                >
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.42 16.8876C18.33 16.8897 18.2398 16.8907 18.1494 16.8907C11.5222 16.8907 6.14972 11.3891 6.14972 4.60254C6.14972 4.50993 6.15072 4.41756 6.15272 4.32542C4.15571 5.96376 2.87707 8.48269 2.87707 11.3051C2.87707 16.2408 6.78431 20.242 11.6041 20.242C14.3603 20.242 16.8201 18.9326 18.42 16.8876ZM19.7487 14.5238C19.2283 14.6111 18.694 14.6565 18.1494 14.6565C12.7271 14.6565 8.33148 10.1552 8.33148 4.60254C8.33148 4.04482 8.37583 3.49772 8.4611 2.96471C8.60523 2.06387 8.86628 1.2033 9.22776 0.399902C8.28813 0.613673 7.39411 0.951545 6.56297 1.39585C3.07578 3.26003 0.695312 6.99791 0.695312 11.3051C0.695312 17.4747 5.57935 22.4762 11.6041 22.4762C15.8102 22.4762 19.4603 20.0385 21.2808 16.4675C21.7146 15.6164 22.0446 14.7009 22.2533 13.7387C21.4688 14.1089 20.6284 14.3762 19.7487 14.5238Z"
                      fill="black"
                      className=" fill-black dark:fill-white "
                    />
                  </svg>
                </button>
                <input type="checkbox" id="darkmode-toggle" />
                <label
                  htmlFor="darkmode-toggle"
                  className="label-darkmode"
                ></label>

                <button onClick={() => setTheme("light")}>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1951 24.3003H10.8571V20.7003H13.1951V24.3003ZM19.4658 21.6339L16.9863 19.0887L18.6393 17.3919L21.1199 19.9383L19.4681 21.6339H19.4658ZM4.58649 21.6339L2.93233 19.9371L5.41065 17.3907L7.06481 19.0875L4.58649 21.6327V21.6339ZM12.0261 18.3087C8.79375 18.3074 6.17432 15.6167 6.17518 12.2987C6.17604 8.98066 8.79687 6.29145 12.0292 6.29189C15.2616 6.29234 17.8817 8.98226 17.8817 12.3003C17.8785 15.6182 15.2584 18.3067 12.0261 18.3087ZM12.0261 8.69189C10.085 8.69322 8.51236 10.3093 8.51322 12.3019C8.51408 14.2944 10.0881 15.9091 12.0292 15.9087C13.9703 15.9083 15.5437 14.2928 15.5437 12.3003C15.5418 10.3073 13.9676 8.69255 12.0261 8.69189ZM23.7163 13.5003H20.2092V11.1003H23.7163V13.5003ZM3.84299 13.5003H0.335938V11.1003H3.84299V13.5003ZM18.6381 7.20989L16.9863 5.51189L19.4658 2.96549L21.1199 4.66349L18.6393 7.20869L18.6381 7.20989ZM5.41298 7.20989L2.93466 4.66469L4.58883 2.96789L7.06714 5.51429L5.41415 7.20869L5.41298 7.20989ZM13.1951 3.90029H10.8571V0.300293H13.1951V3.90029Z"
                      fill="#FFAD00"
                    />
                  </svg>
                </button>
              </div>
            </li>
            <li className="relative ">
              <button
                onClick={handlePoupanca}
                className=" hover-underline-animation"
              >
                <div className="flex-important items-center hover-underline-animation">
                  <div className="flex gap-x-1 mr-3 font-bold">
                    Poupa <span>energia</span>
                  </div>
                  <svg
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h3 w-3 stroke-3 fill-black dark:fill-white  hover-underline-animation"
                  >
                    <path d="M9.81725 18.3C4.85269 18.3 0.828125 14.2706 0.828125 9.30005C0.828125 4.32949 4.85269 0.300049 9.81725 0.300049C14.7818 0.300049 18.8064 4.32949 18.8064 9.30005C18.8009 14.2683 14.7795 18.2946 9.81725 18.3ZM2.62595 9.45485C2.66848 13.416 5.89898 16.5986 9.85548 16.5774C13.812 16.5561 17.0081 13.3388 17.0081 9.37745C17.0081 5.4161 13.812 2.19885 9.85548 2.17745C5.89898 2.15626 2.66848 5.33893 2.62595 9.30005V9.45485ZM11.6151 13.8H8.91833V10.2H8.01942V8.40005H10.7162V12H11.6151V13.8ZM10.7162 6.60005H8.91833V4.80005H10.7162V6.60005Z" />
                  </svg>
                </div>
              </button>
              <div className={poupanca ? "hidden" : ""}>
                <p className="absolute w-80  bg-white p-3 rounded-r3 shadow-md z-10 dark:bg-black dark:border-b-darkSec dark:text-white">
                  A opção Dark Mode permite-te poupar energia, reduzir a pegada
                  ecológica, além de causar menos cansaço visual.
                </p>
              </div>
            </li>
            <li>
              <svg
                width="16"
                height="16"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black dark:fill-white  hover-underline-animation"
              >
                <path d="M3.83505 6.39941C3.83505 3.39637 6.277 0.961914 9.2893 0.961914C12.3016 0.961914 14.7436 3.39637 14.7436 6.39941C14.7436 9.40246 12.3016 11.8369 9.2893 11.8369C6.277 11.8369 3.83505 9.40246 3.83505 6.39941ZM9.2893 9.66191C11.0967 9.66191 12.5619 8.20124 12.5619 6.39941C12.5619 4.59759 11.0967 3.13691 9.2893 3.13691C7.48192 3.13691 6.01675 4.59759 6.01675 6.39941C6.01675 8.20124 7.48192 9.66191 9.2893 9.66191Z" />
                <path d="M3.11852 15.4726C1.48193 17.1042 0.5625 19.317 0.5625 21.6244H2.7442C2.7442 19.8939 3.43377 18.2342 4.66122 17.0105C5.88866 15.7869 7.55343 15.0994 9.2893 15.0994C11.0252 15.0994 12.6899 15.7869 13.9174 17.0105C15.1448 18.2342 15.8344 19.8939 15.8344 21.6244H18.0161C18.0161 19.317 17.0967 17.1042 15.4601 15.4726C13.8235 13.841 11.6038 12.9244 9.2893 12.9244C6.97481 12.9244 4.75511 13.841 3.11852 15.4726Z" />
              </svg>
            </li>
            <li>
              <svg
                width="16"
                height="16"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black dark:fill-white  hover-underline-animation"
              >
                <path d="M11.3343 20.5372C10.6307 19.9151 9.83549 19.2681 8.99444 18.5797H8.98353C6.02187 16.1654 2.66532 13.4336 1.18286 10.1602C0.695811 9.11811 0.437701 7.98429 0.425794 6.83466C0.422541 5.25723 1.05716 3.74506 2.18623 2.63992C3.3153 1.53478 4.84352 0.929964 6.42549 0.96216C7.71338 0.964188 8.97353 1.33526 10.0558 2.03117C10.5314 2.3389 10.9617 2.71114 11.3343 3.13716C11.709 2.71281 12.1394 2.34079 12.6139 2.03117C13.6957 1.33512 14.9556 0.964029 16.2431 0.96216C17.8251 0.929964 19.3533 1.53478 20.4824 2.63992C21.6115 3.74506 22.2461 5.25723 22.2428 6.83466C22.2317 7.98612 21.9736 9.12189 21.4858 10.1657C20.0033 13.4391 16.6478 16.1698 13.6862 18.5797L13.6753 18.5884C12.8331 19.2724 12.039 19.9195 11.3354 20.5459L11.3343 20.5372ZM6.42549 3.13716C5.40937 3.12448 4.42931 3.51218 3.69836 4.21596C2.99409 4.90562 2.60048 5.85052 2.60742 6.83466C2.61986 7.67258 2.81022 8.49838 3.16602 9.25761C3.86582 10.67 4.81005 11.9481 5.95533 13.0334C7.03636 14.1209 8.27993 15.1736 9.35551 16.0588C9.65331 16.3035 9.95657 16.5504 10.2598 16.7973L10.4507 16.9528C10.742 17.1898 11.0431 17.4356 11.3343 17.677L11.3485 17.664L11.355 17.6586H11.3616L11.3714 17.6509H11.3769H11.3823L11.4019 17.6346L11.4467 17.5987L11.4543 17.5922L11.4663 17.5835H11.4729L11.4827 17.5748L12.207 16.9821L12.3968 16.8266C12.7033 16.5776 13.0066 16.3307 13.3044 16.086C14.38 15.2008 15.6246 14.1492 16.7057 13.0563C17.8511 11.9715 18.7954 10.6937 19.495 9.28154C19.8572 8.51572 20.0503 7.68129 20.0612 6.83466C20.0657 5.85356 19.6723 4.91228 18.9703 4.22466C18.2407 3.5177 17.2605 3.12681 16.2431 3.13716C15.0017 3.12664 13.8148 3.64542 12.9815 4.56287L11.3343 6.45512L9.68713 4.56287C8.85379 3.64542 7.66696 3.12664 6.42549 3.13716Z" />
              </svg>
            </li>
            <li>
              <svg
                width="16"
                height="16"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black dark:fill-white stroke-black dark:stroke-white  hover-underline-animation"
              >
                <path
                  d="M2.66797 3.32568H7.01797L7.6872 7.67568M7.6872 7.67568L9.19297 17.4632H20.068L21.6992 7.67568H7.6872Z"
                  strokeWidth="2.175"
                />
                <circle
                  cx="9.73281"
                  cy="22.3568"
                  r="1.63125"
                  className="fill-black dark:fill-white"
                />
                <circle
                  cx="19.5219"
                  cy="22.3568"
                  r="1.63125"
                  className="fill-black dark:fill-white"
                />
              </svg>
            </li>
          </ul>
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[100%] sm:w-[400px] h-full border-r dark:text-white dark:bg-midnight bg-white text-black ease-in-out duration-500 z-50"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <div className="flex justify-between  m-5">
            <img src="/public/header/logo-desktop.svg" />
            <button onClick={handleNav}>X</button>
          </div>

          <li className="p-4 ">Home</li>
          <li className="p-4 ">Company</li>
          <li className="p-4 ">Resources</li>
          <li className="p-4 ">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div className="sm:hidden">
          <div className="flex items-center gap-x-1 justify-between">
            <img src="/header/pcdiga-logo-mobile.svg" alt="" />
            <ul className="flex items-center gap-x-2 sm:hidden">
              <li>
                <div className="flex">
                  <button onClick={() => setTheme("dark")}>
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.42 16.8876C18.33 16.8897 18.2398 16.8907 18.1494 16.8907C11.5222 16.8907 6.14972 11.3891 6.14972 4.60254C6.14972 4.50993 6.15072 4.41756 6.15272 4.32542C4.15571 5.96376 2.87707 8.48269 2.87707 11.3051C2.87707 16.2408 6.78431 20.242 11.6041 20.242C14.3603 20.242 16.8201 18.9326 18.42 16.8876ZM19.7487 14.5238C19.2283 14.6111 18.694 14.6565 18.1494 14.6565C12.7271 14.6565 8.33148 10.1552 8.33148 4.60254C8.33148 4.04482 8.37583 3.49772 8.4611 2.96471C8.60523 2.06387 8.86628 1.2033 9.22776 0.399902C8.28813 0.613673 7.39411 0.951545 6.56297 1.39585C3.07578 3.26003 0.695312 6.99791 0.695312 11.3051C0.695312 17.4747 5.57935 22.4762 11.6041 22.4762C15.8102 22.4762 19.4603 20.0385 21.2808 16.4675C21.7146 15.6164 22.0446 14.7009 22.2533 13.7387C21.4688 14.1089 20.6284 14.3762 19.7487 14.5238Z"
                        fill="black"
                        className="fill-white sm:fill-black sm:dark:fill-white "
                      />
                    </svg>
                  </button>
                  <input type="checkbox" id="darkmode-toggle" />
                  <label
                    htmlFor="darkmode-toggle"
                    className="label-darkmode"
                  ></label>

                  <button onClick={() => setTheme("light")}>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.1951 24.3003H10.8571V20.7003H13.1951V24.3003ZM19.4658 21.6339L16.9863 19.0887L18.6393 17.3919L21.1199 19.9383L19.4681 21.6339H19.4658ZM4.58649 21.6339L2.93233 19.9371L5.41065 17.3907L7.06481 19.0875L4.58649 21.6327V21.6339ZM12.0261 18.3087C8.79375 18.3074 6.17432 15.6167 6.17518 12.2987C6.17604 8.98066 8.79687 6.29145 12.0292 6.29189C15.2616 6.29234 17.8817 8.98226 17.8817 12.3003C17.8785 15.6182 15.2584 18.3067 12.0261 18.3087ZM12.0261 8.69189C10.085 8.69322 8.51236 10.3093 8.51322 12.3019C8.51408 14.2944 10.0881 15.9091 12.0292 15.9087C13.9703 15.9083 15.5437 14.2928 15.5437 12.3003C15.5418 10.3073 13.9676 8.69255 12.0261 8.69189ZM23.7163 13.5003H20.2092V11.1003H23.7163V13.5003ZM3.84299 13.5003H0.335938V11.1003H3.84299V13.5003ZM18.6381 7.20989L16.9863 5.51189L19.4658 2.96549L21.1199 4.66349L18.6393 7.20869L18.6381 7.20989ZM5.41298 7.20989L2.93466 4.66469L4.58883 2.96789L7.06714 5.51429L5.41415 7.20869L5.41298 7.20989ZM13.1951 3.90029H10.8571V0.300293H13.1951V3.90029Z"
                        fill="#FFAD00"
                      />
                    </svg>
                  </button>
                </div>
              </li>
              <li>
                <img src="/header/user-icon.svg" />
              </li>
              <li>
                <img src="/header/cart.svg" />
              </li>
              <li>
                <button onClick={handleNav}>
                  <img src="/header/hamburger.svg" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative block sm:hidden">
          <span className="absolute top-1 left-1">
            <img src="/header/search.svg" />
          </span>
          <input type="search" name="search" className="w-full" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
