import { useState } from "react";

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);

  function toggleSection(section) {
    setActiveSection(section === activeSection ? null : section);
  }
  return (
    <footer className="bg-white dark:bg-midnight ">
      <div className="sm:h-28 text-xs  px-4 py-5  main-bg-color w-full justify-between container sm:w-3/5 sm:rounded-md">
        <div className="text-white sm:flex sm:items-center sm:justify-between sm:h-full">
          <div>
            <p className="font-bold mb-1.5 sm:mb-0 ">
              RECEBA AS PROMOÇÕES, NOVIDADES E DIAS PCDIGUIANOS.
            </p>
            <p>Diretamente no seu Email.</p>
          </div>
          <form className="relative mt-5 sm:w-[500px] sm:mt-0 ">
            <input
              type="email"
              className=" py-4 pl-4 pr-16 w-full rounded-md dark:bg-midnight dark:placeholder:bg-midnight"
              placeholder="O seu email"
            />
            <button className="absolute right-3 top-0 flex h-full items-center text-primary text-lg">
              <img src="/footer/seta-direita.svg" />
            </button>
          </form>
        </div>
      </div>
      <div className="container p-5 dark:text-white">
        <div className="flex flex-col sm:grid grid-cols-[200px_minmax(30%,70%)] justify-between sm:gap-3">
          <div className="sm:flex sm:flex-col ">
            <img src="/footer/logo-white.svg" alt="" className="sm:w-[130px]" />
            <p className="mt-5">
              PCDIGA Online - Loja de Informática Nº1 em Portugal.
            </p>
            <ul className="flex gap-2 mt-5">
              <li>
                <a href="#" target="_blank">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover-underline-animation"
                  >
                    <circle
                      cx="16.8607"
                      cy="16.8607"
                      r="16.3607"
                      className="stroke-midnight dark:stroke-white "
                    />
                    <g clipPath="url(#clip0_465_793)">
                      <path
                        d="M15.371 25.5464V17.3951H13.2842V14.4603H15.371V11.9536C15.371 9.98374 16.6037 8.1748 19.4442 8.1748C20.5942 8.1748 21.4446 8.28868 21.4446 8.28868L21.3776 11.0293C21.3776 11.0293 20.5103 11.0206 19.5639 11.0206C18.5396 11.0206 18.3755 11.5081 18.3755 12.3173V14.4603H21.459L21.3249 17.3951H18.3755V25.5464H15.371Z"
                        className="fill-midnight dark:fill-white "
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_465_793">
                        <rect
                          className="fill-midnight dark:fill-white "
                          width="8.17486"
                          height="17.3716"
                          transform="translate(13.2842 8.1748)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover-underline-animation"
                  >
                    <circle
                      cx="16.9534"
                      cy="16.8607"
                      r="16.3607"
                      className="stroke-midnight dark:stroke-white "
                    />
                    <path
                      d="M16.9554 24.1746C14.9654 24.1746 14.7308 24.1641 13.9541 24.1301C13.3485 24.1102 12.7507 23.9871 12.1865 23.7661C11.2104 23.3862 10.4385 22.614 10.0589 21.6377C9.84643 21.0714 9.73181 20.4731 9.71999 19.8684C9.67468 19.0934 9.67468 18.8394 9.67468 16.8647C9.67468 14.869 9.6852 14.636 9.71999 13.8634C9.73207 13.2596 9.84669 12.6621 10.0589 12.0966C10.4381 11.119 11.2112 10.3462 12.189 9.96744C12.7541 9.75403 13.3517 9.63911 13.9558 9.62767C14.7283 9.58398 14.9823 9.58398 16.9554 9.58398C18.9617 9.58398 19.1922 9.5945 19.9567 9.62767C20.5623 9.63921 21.1615 9.75412 21.7284 9.96744C22.7058 10.3466 23.4788 11.1193 23.8584 12.0966C24.0745 12.6704 24.1897 13.2771 24.199 13.8901C24.2443 14.6651 24.2443 14.9183 24.2443 16.8922C24.2443 18.8661 24.2329 19.125 24.199 19.8911C24.1869 20.4964 24.072 21.0952 23.8592 21.6619C23.4787 22.6389 22.7056 23.4114 21.7284 23.7911C21.1623 24.0032 20.5643 24.1178 19.9599 24.1301C19.1874 24.1746 18.9342 24.1746 16.9554 24.1746ZM16.9279 10.8646C14.9492 10.8646 14.7437 10.8743 13.9711 10.9091C13.51 10.9152 13.0533 11.0003 12.621 11.1607C11.9825 11.405 11.4773 11.9082 11.2303 12.5456C11.0687 12.9827 10.9836 13.4444 10.9787 13.9104C10.9359 14.6943 10.9359 14.8997 10.9359 16.8647C10.9359 18.8063 10.9431 19.0417 10.9787 19.8207C10.986 20.282 11.071 20.7387 11.2303 21.1717C11.4776 21.8087 11.9828 22.3115 12.621 22.5558C13.053 22.7173 13.5099 22.8024 13.9711 22.8074C14.7542 22.8527 14.9605 22.8527 16.9279 22.8527C18.9123 22.8527 19.1178 22.843 19.8839 22.8074C20.3453 22.8018 20.8024 22.7167 21.2349 22.5558C21.8695 22.3094 22.3714 21.8078 22.6182 21.1733C22.7795 20.7359 22.8646 20.274 22.8698 19.8078H22.8787C22.9135 19.0344 22.9135 18.8281 22.9135 16.8518C22.9135 14.8755 22.9046 14.6676 22.8698 13.895C22.8626 13.4342 22.7775 12.978 22.6182 12.5456C22.372 11.9102 21.87 11.4076 21.2349 11.1607C20.8024 10.9995 20.3454 10.9144 19.8839 10.9091C19.1016 10.8646 18.897 10.8646 16.9279 10.8646ZM16.9554 20.6014C15.4426 20.6023 14.0783 19.6919 13.4986 18.2945C12.9189 16.8972 13.2381 15.2883 14.3074 14.2181C15.3766 13.148 16.9852 12.8274 18.3831 13.4058C19.7809 13.9843 20.6925 15.3479 20.6929 16.8607C20.6906 18.9244 19.0192 20.5974 16.9554 20.6014ZM16.9554 14.4321C15.6151 14.4321 14.5285 15.5187 14.5285 16.8591C14.5285 18.1994 15.6151 19.286 16.9554 19.286C18.2958 19.286 19.3823 18.1994 19.3823 16.8591C19.3792 15.52 18.2945 14.4353 16.9554 14.4321ZM20.8385 13.8554C20.3575 13.8536 19.9688 13.4627 19.9697 12.9817C19.9705 12.5007 20.3607 12.1112 20.8417 12.1112C21.3227 12.1112 21.7129 12.5007 21.7138 12.9817C21.714 13.2137 21.6218 13.4363 21.4576 13.6003C21.2933 13.7642 21.0705 13.856 20.8385 13.8554Z"
                      className="fill-midnight dark:fill-white "
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover-underline-animation"
                  >
                    <circle
                      cx="17.0462"
                      cy="16.8607"
                      r="16.3607"
                      className="stroke-midnight dark:stroke-white "
                    />
                    <path
                      d="M22.8331 13.0157C23.482 12.6278 23.9675 12.017 24.199 11.2973C23.5893 11.6591 22.9222 11.9139 22.2266 12.0508C21.2621 11.0306 19.7341 10.7823 18.4963 11.4447C17.2585 12.1071 16.6174 13.5162 16.9311 14.8846C14.4337 14.7592 12.1069 13.5795 10.5297 11.639C9.70661 13.0587 10.1272 14.8735 11.4909 15.7864C10.9978 15.7706 10.5156 15.6371 10.0846 15.397C10.0846 15.41 10.0846 15.4231 10.0846 15.4361C10.0848 16.915 11.1271 18.1888 12.5767 18.4819C12.1193 18.6064 11.6395 18.6247 11.1739 18.5355C11.5816 19.8002 12.7472 20.6666 14.0757 20.6925C12.9754 21.5561 11.6165 22.0244 10.2177 22.0221C9.96981 22.0225 9.72208 22.0082 9.47583 21.9794C10.8962 22.8922 12.5494 23.3766 14.2378 23.3749C16.5868 23.3911 18.8442 22.465 20.5051 20.8039C22.1661 19.1429 23.0919 16.8854 23.0756 14.5364C23.0756 14.4018 23.0725 14.2679 23.0662 14.1347C23.6745 13.695 24.1996 13.1504 24.6166 12.5264C24.0499 12.7776 23.4487 12.9425 22.8331 13.0157Z"
                      className="fill-midnight dark:fill-white "
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover-underline-animation"
                  >
                    <circle
                      cx="17.139"
                      cy="16.8607"
                      r="16.3607"
                      className="stroke-midnight dark:stroke-white"
                    />
                    <path
                      d="M17.1428 21.9361H17.1283C17.0834 21.9361 12.5936 21.9274 11.4608 21.6197C10.8379 21.4519 10.3514 20.9652 10.184 20.3422C9.98029 19.1931 9.88193 18.0277 9.89012 16.8607C9.88486 15.6917 9.98588 14.5247 10.192 13.374C10.364 12.7505 10.8483 12.2615 11.4702 12.0835C12.5719 11.7939 16.9379 11.7939 17.1232 11.7939H17.1384C17.184 11.7939 21.6854 11.8026 22.8066 12.1103C23.4282 12.2789 23.9137 12.7647 24.082 13.3863C24.2922 14.5398 24.3908 15.7108 24.3766 16.8831C24.3816 18.0506 24.2804 19.2162 24.074 20.3654C23.9044 20.9876 23.4176 21.4733 22.795 21.6415C21.6948 21.9332 17.3281 21.9361 17.1428 21.9361ZM15.6951 14.6928L15.6915 19.0357L19.464 16.8643L15.6951 14.6928Z"
                      className="fill-midnight dark:fill-white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover-underline-animation"
                  >
                    <circle
                      cx="17"
                      cy="17"
                      r="16.3485"
                      className="stroke-midnight dark:stroke-white"
                      strokeWidth="1.30303"
                    />
                    <path
                      d="M17.8285 10.0127C18.6444 10 19.4557 10.0075 20.2661 10C20.3152 10.9568 20.6584 11.9314 21.3571 12.6078C22.0543 13.3011 23.0405 13.6185 24 13.7258V16.2427C23.1008 16.2131 22.1974 16.0256 21.3814 15.6375C21.026 15.4762 20.6949 15.2686 20.3709 15.0562C20.3667 16.8826 20.3783 18.7066 20.3592 20.5254C20.3105 21.3992 20.023 22.2688 19.5161 22.9888C18.7005 24.1875 17.2851 24.9689 15.8313 24.9933C14.9395 25.0444 14.0487 24.8006 13.2889 24.3515C12.0296 23.6071 11.1435 22.2444 11.0144 20.7818C10.9981 20.4721 10.9956 20.1617 11.0069 19.8518C11.1191 18.6625 11.706 17.5248 12.6169 16.7508C13.6494 15.8494 15.0957 15.42 16.4499 15.6741C16.4626 16.5999 16.4256 17.5248 16.4256 18.4506C15.807 18.25 15.084 18.3062 14.5435 18.6827C14.148 18.9438 13.8491 19.3281 13.6929 19.7763C13.5638 20.0932 13.6008 20.4452 13.6082 20.7818C13.7565 21.8075 14.7403 22.6696 15.7906 22.5763C16.4869 22.5688 17.1542 22.1638 17.517 21.5708C17.6344 21.3631 17.7658 21.1508 17.7728 20.9065C17.8341 19.7885 17.8097 18.6751 17.8172 17.5571C17.8224 15.0375 17.8097 12.5248 17.8289 10.0131L17.8285 10.0127Z"
                      className="fill-midnight dark:fill-white"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links sm:grid sm:grid-cols-3 sm:grid-row-2 sm:gap-x-2">
            <div className="sm:grid-cols-2">
              <div className="flex justify-between h-5 w-full mt-5 sm:mt-0">
                <button
                  className="flex justify-between items-center footer collapsible w-full"
                  onClick={() => toggleSection(1)}
                >
                  <h3 className="font-bold text-lg  hover-underline-animation ">
                    Informações
                  </h3>
                  <img src="/footer/close.svg" className="sm:hidden" />
                </button>
              </div>

              <ul
                className={
                  activeSection === 1
                    ? "sm:grid gap-y-3.5 sm:grid-cols-2 sm:gap-y-1 sm:mt-3 text-base sm:text-xs"
                    : "hidden sm:grid  sm:grid-cols-2 sm:gap-y-1 sm:mt-3 text-base sm:text-xs"
                }
              >
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Modos de pagamento
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Envio de encomendas e Portes
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Trocas e devoluções
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Garantia / RMA
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Termos / Politica de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    FAQs (Perguntas frequentes)
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Resolução de Litígios Online
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Seguros MAPFRE WARRANTY
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Crédito Cetelem
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Livro de reclamação online
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:grid-cols-2">
              <div className="flex justify-between h-5 w-full mt-5 sm:mt-0">
                <button
                  className="flex justify-between items-center footer collapsible w-full"
                  onClick={() => toggleSection(2)}
                >
                  <h3 className="font-bold text-lg  hover-underline-animation ">
                    Loja
                  </h3>
                  <img src="/footer/close.svg" className="sm:hidden" />
                </button>
              </div>
              <ul
                className={
                  activeSection === 2
                    ? "grid gap-y-3.5 sm:grid sm:grid-cols-2 sm:gap-y-1 sm:mt-3"
                    : "hidden sm:grid  sm:grid-cols-2 sm:gap-1 sm:mt-3 text-xs"
                }
              >
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Área de Cliente
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Campanhas Especiais e Ofertas
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Novidades
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Recondicionados
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Sobre a PCDIGA
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Recrutamento
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    PCDIGA Empresas
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Lojas PCDDIGA
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Centro de ajuda
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:grid-cols-2">
              <div className="flex justify-between h-5 w-full mt-5 sm:mt-0">
                <button
                  className="flex justify-between items-center footer collapsible w-full"
                  onClick={() => toggleSection(3)}
                >
                  <h3 className="font-bold text-lg  hover-underline-animation ">
                    Informações
                  </h3>
                  <img src="/footer/close.svg" className="sm:hidden" />
                </button>
              </div>
              <ul
                className={
                  activeSection === 3
                    ? "grid gap-y-3.5 sm:grid sm:grid-cols-2 sm:gap-y-1 sm:mt-3"
                    : "hidden sm:grid  sm:grid-cols-2 sm:gap-1 sm:mt-3 text-xs"
                }
              >
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Modos de pagamento
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Envio de encomendas e Portes
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Trocas e devoluções
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Garantia / RMA
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Termos / Politica de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    FAQs (Perguntas frequentes)
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Resolução de Litígios Online
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Seguros MAPFRE WARRANTY
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Crédito Cetelem
                  </a>
                </li>
                <li>
                  <a
                    className=" hover-underline-animation"
                    href="#"
                    target="_blank"
                  >
                    Livro de reclamação online
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:container sm:p-5 sm:flex-row sm:justify-between">
        <svg
          className="self-center mt-5 w-[130px] sm:w-[130px]"
          viewBox="0 0 127 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_7391)">
            <path
              d="M32.5569 10.8628H45.3906V13.2832H40.3377V26.9252H37.5679V13.2832H32.5355L32.5569 10.8628ZM44.8413 15.296H47.2092V17.5448H47.2512C47.3423 17.2136 47.4927 16.9016 47.6951 16.6242C47.9107 16.3126 48.1749 16.0377 48.4775 15.81C48.779 15.5533 49.1222 15.3504 49.4922 15.2102C49.8467 15.0584 50.2277 14.9782 50.6132 14.9743C50.9089 14.9743 51.1205 14.9957 51.226 14.9957C51.3372 15.0206 51.4506 15.0349 51.5645 15.0386V17.5019C51.3834 17.4624 51.1998 17.4348 51.0151 17.4194C50.833 17.3945 50.6496 17.3802 50.4658 17.3765C50.0504 17.3751 49.6395 17.4629 49.2608 17.6339C48.8816 17.813 48.5432 18.0682 48.2667 18.3838C47.9707 18.7552 47.7418 19.1757 47.5905 19.6261C47.4131 20.1773 47.3271 20.7539 47.336 21.3329V26.86H44.7992L44.8413 15.296ZM63.194 26.9277H60.6993V25.2976H60.6573C60.3352 25.8915 59.8513 26.3815 59.262 26.7107C58.695 27.0573 58.0443 27.2424 57.3801 27.2461C56.7844 27.3042 56.1833 27.2328 55.6177 27.0369C55.0522 26.841 54.5354 26.5252 54.1029 26.111C53.3549 25.1328 52.9936 23.9126 53.0882 22.6842V15.296H55.6258V22.4276C55.543 23.1977 55.7546 23.9706 56.2179 24.5906C56.4263 24.8101 56.6799 24.9813 56.9612 25.0923C57.2424 25.2033 57.5445 25.2514 57.8462 25.2333C58.3037 25.2474 58.7586 25.1595 59.178 24.9759C59.5157 24.8286 59.8131 24.6023 60.0453 24.3159C60.2778 24.0194 60.4435 23.6761 60.5312 23.3095C60.6364 22.8967 60.6862 22.4717 60.6795 22.0457V15.296H63.2154V26.9277H63.194ZM67.5073 23.2014C67.5172 23.5129 67.5986 23.818 67.7453 24.0928C67.892 24.3677 68.1 24.6049 68.3532 24.7861C68.8849 25.097 69.4929 25.2527 70.1083 25.2357C70.3774 25.2332 70.6461 25.2117 70.9122 25.1714C71.2019 25.1354 71.4861 25.0634 71.758 24.9569C72.0169 24.8639 72.245 24.7008 72.4169 24.4859C72.5937 24.2616 72.677 23.9775 72.6492 23.6931C72.6461 23.5403 72.6127 23.3897 72.5511 23.2499C72.4895 23.1102 72.4007 22.9841 72.2901 22.8789C72.0386 22.6617 71.7527 22.488 71.4442 22.3649C71.0584 22.224 70.6614 22.1161 70.2574 22.0424C69.8135 21.9599 69.3695 21.8494 68.9042 21.7429C68.4388 21.6365 67.9735 21.507 67.5296 21.3577C67.1022 21.22 66.7016 21.0099 66.3452 20.7365C65.9945 20.4804 65.7118 20.1422 65.5216 19.7515C65.2961 19.2927 65.1872 18.7852 65.2045 18.2741C65.1803 17.7088 65.344 17.1515 65.6698 16.6893C65.9728 16.2612 66.3709 15.9093 66.8328 15.6615C67.3215 15.3937 67.8498 15.2058 68.3977 15.1046C68.9346 15.0044 69.4797 14.9542 70.026 14.9545C70.5955 14.9516 71.1634 15.0164 71.7177 15.1475C72.2385 15.2611 72.7333 15.4719 73.1763 15.7687C73.6158 16.0502 73.984 16.43 74.252 16.8783C74.5572 17.3796 74.745 17.9437 74.8013 18.5281H72.1591C72.1289 18.2708 72.0386 18.0243 71.8955 17.8084C71.7524 17.5926 71.5606 17.4135 71.3355 17.2858C70.8663 17.0648 70.3525 16.955 69.8341 16.9649C69.6652 16.9649 69.4321 16.9863 69.1999 17.0078C68.9623 17.0422 68.7287 17.0997 68.5023 17.1794C68.2966 17.2625 68.1098 17.3862 67.9529 17.5432C67.8752 17.6262 67.8146 17.7239 67.7747 17.8305C67.7349 17.9371 67.7165 18.0506 67.7206 18.1643C67.7144 18.3051 67.7397 18.4455 67.7945 18.5752C67.8494 18.7049 67.9325 18.8208 68.0377 18.9142C68.2893 19.1266 68.5754 19.294 68.8836 19.4092C69.2687 19.5494 69.6648 19.6567 70.068 19.7301C70.5119 19.8126 70.9739 19.9231 71.4426 20.0295C71.9112 20.136 72.3486 20.2655 72.7958 20.4148C73.2251 20.5479 73.6264 20.7584 73.9802 21.036C74.3266 21.2941 74.6148 21.6224 74.826 21.9995C75.0493 22.4438 75.1583 22.9369 75.1431 23.4341C75.1637 24.0526 75.0019 24.6635 74.6778 25.1904C74.3634 25.6639 73.9514 26.0644 73.4695 26.3651C72.9565 26.6665 72.4013 26.8889 71.8223 27.025C71.2322 27.1585 70.63 27.2303 70.0251 27.2395C69.347 27.2451 68.6712 27.1586 68.0163 26.9821C67.441 26.8283 66.8971 26.5745 66.4094 26.2323C65.9637 25.899 65.6016 25.4663 65.3519 24.9685C65.0783 24.408 64.9339 23.7931 64.9294 23.1693H67.4876V23.1907L67.5073 23.2014ZM75.8588 15.2985H77.7828V11.7834H80.3204V15.2746H82.6043V17.181H80.3204V23.3953C80.3219 23.6315 80.3359 23.8675 80.3624 24.1023C80.3828 24.2746 80.433 24.4421 80.5107 24.5972C80.5992 24.7295 80.7239 24.8334 80.8698 24.8967C81.0866 24.9739 81.3159 25.0102 81.546 25.0039C81.7225 25.0075 81.8991 25.0003 82.0747 24.9825C82.2524 24.9654 82.429 24.9379 82.6035 24.9V26.8914C82.3284 26.9343 82.0541 26.9557 81.7799 26.9739C81.5069 27.01 81.2315 27.0244 80.9562 27.0168C80.414 27.0335 79.8723 26.9685 79.3494 26.8237C78.992 26.7178 78.6656 26.5268 78.3981 26.2669C78.1652 26.0061 78.0047 25.6887 77.9327 25.3463C77.8459 24.923 77.7963 24.493 77.7845 24.061V17.2025H75.858V15.2531L75.8588 15.2985ZM84.38 15.2985H86.7685V16.8783H86.8122C87.1283 16.2394 87.6508 15.7263 88.2947 15.4222C88.9428 15.1178 89.6512 14.9641 90.3669 14.9726C91.1843 14.9474 91.9958 15.1171 92.7349 15.4676C93.3909 15.7681 93.9642 16.2239 94.4052 16.7958C94.8646 17.3793 95.2026 18.0491 95.3993 18.7657C95.8356 20.2895 95.8501 21.9035 95.4413 23.4349C95.2524 24.1316 94.946 24.7909 94.5353 25.3842C94.1113 25.9778 93.5483 26.4581 92.8958 26.783C92.2433 27.1079 91.5212 27.2675 90.7928 27.2478C90.4238 27.2439 90.056 27.208 89.6932 27.1405C89.3292 27.0761 88.9742 26.9684 88.6357 26.8196C88.2992 26.6733 87.9857 26.4788 87.705 26.2422C87.4214 26.0131 87.1783 25.7378 86.986 25.4279H86.944V31.2322H84.4015V15.296L84.38 15.2985ZM93.2364 21.1218C93.2414 20.6072 93.1712 20.0947 93.0281 19.6006C92.9068 19.1306 92.699 18.6874 92.4153 18.2939C92.1499 17.9236 91.813 17.6105 91.4245 17.3732C91.0052 17.1377 90.5304 17.0195 90.0499 17.0309C89.5874 17.0023 89.1251 17.089 88.7043 17.2834C88.2836 17.4778 87.9176 17.7736 87.6391 18.1445C87.0674 19.0365 86.7865 20.0844 86.8353 21.1432C86.8258 21.6932 86.8971 22.2416 87.0469 22.7708C87.1712 23.2371 87.3868 23.674 87.6811 24.0561C87.952 24.4131 88.2986 24.7055 88.6958 24.9124C89.1198 25.1335 89.5926 25.2438 90.0704 25.2333C90.5807 25.248 91.0853 25.1222 91.5291 24.8695C91.9184 24.632 92.2563 24.319 92.5232 23.9488C92.7866 23.5517 92.973 23.1084 93.0725 22.6421C93.1809 22.1425 93.2374 21.633 93.2414 21.1218H93.2364ZM97.7005 10.8628H100.237V13.2832H97.7005V10.8628ZM97.7005 15.296H100.237V26.9277H97.7005V15.296ZM102.5 10.8628H105.037V26.9252H102.5V10.8628ZM112.775 27.2469C111.934 27.2645 111.098 27.104 110.322 26.7759C109.638 26.4808 109.02 26.0511 108.504 25.5121C108.001 24.9463 107.619 24.2828 107.383 23.5628C107.116 22.7691 106.98 21.937 106.981 21.0995C106.97 20.2681 107.106 19.4414 107.383 18.6577C107.624 17.9399 108.005 17.2772 108.504 16.7083C109.01 16.158 109.631 15.7265 110.322 15.4445C111.101 15.1266 111.935 14.9665 112.775 14.9735C113.617 14.9559 114.453 15.1164 115.228 15.4445C115.918 15.7332 116.538 16.1657 117.047 16.7133C117.551 17.279 117.932 17.9426 118.168 18.6626C118.435 19.4489 118.571 20.2739 118.57 21.1044C118.583 21.9429 118.447 22.777 118.168 23.5677C117.919 24.2817 117.539 24.9428 117.047 25.517C116.541 26.0663 115.919 26.4968 115.227 26.7776C114.45 27.0967 113.616 27.2563 112.776 27.2469H112.775ZM112.775 25.2126C113.285 25.222 113.788 25.0965 114.234 24.8488C114.639 24.6161 114.986 24.2939 115.249 23.9068C115.522 23.5099 115.722 23.0674 115.841 22.6C116.095 21.6239 116.095 20.599 115.841 19.6228C115.727 19.154 115.526 18.7108 115.249 18.3161C114.98 17.94 114.634 17.6261 114.234 17.3955C113.787 17.1504 113.285 17.025 112.775 17.0317C112.266 17.0224 111.762 17.1479 111.317 17.3955C110.917 17.6267 110.571 17.9406 110.302 18.3161C110.025 18.7108 109.824 19.154 109.71 19.6228C109.456 20.599 109.456 21.6239 109.71 22.6C109.824 23.0689 110.025 23.5121 110.302 23.9068C110.57 24.2892 110.916 24.6103 111.317 24.8488C111.76 25.103 112.265 25.2281 112.776 25.2102L112.775 25.2126ZM119.33 15.2968H121.254V11.7834H123.793V15.2746H126.077V17.181H123.793V23.3953C123.794 23.6315 123.808 23.8675 123.835 24.1023C123.855 24.2746 123.905 24.4421 123.983 24.5972C124.072 24.7295 124.196 24.8334 124.342 24.8967C124.559 24.9739 124.788 25.0102 125.018 25.0039C125.195 25.0075 125.371 25.0003 125.547 24.9825C125.725 24.9654 125.901 24.9379 126.076 24.9V26.8914C125.801 26.9343 125.527 26.9557 125.252 26.9739C124.979 27.01 124.704 27.0244 124.429 27.0168C123.886 27.0335 123.345 26.9685 122.822 26.8237C122.464 26.7178 122.138 26.5268 121.87 26.2669C121.638 26.0061 121.477 25.6887 121.405 25.3463C121.318 24.923 121.269 24.493 121.257 24.061V17.2025H119.333V15.2531L119.33 15.2968Z"
              className="fill-midnight dark:fill-white"
            />
            <path
              d="M29.8242 10.3052H18.4302L14.9224 0L11.394 10.3052H0L9.21468 17.615L5.68299 28.5141L14.9018 21.7718L24.1165 28.5141L20.6095 17.6183L29.8242 10.3052Z"
              fill="#00B67A"
            />
            <path
              d="M20.3352 20.0675L19.6763 17.6521L14.9125 21.7257L20.3352 20.0675Z"
              fill="#005128"
            />
            <path
              d="M42.7032 45.2728L37.5201 48.0001L38.5085 42.2255L34.3179 38.1346L40.1088 37.2915L42.7032 32.0342L45.2926 37.2899L51.0835 38.133L46.8929 42.2239L47.8813 47.9984L42.7032 45.2728Z"
              fill="#FFAD00"
            />
            <path
              d="M61.6819 45.2728L56.4989 48.0001L57.4872 42.2255L53.2966 38.1346L59.0875 37.2915L61.6819 32.0342L64.2714 37.2899L70.0623 38.133L65.8717 42.2239L66.86 47.9984L61.6819 45.2728Z"
              fill="#FFAD00"
            />
            <path
              d="M80.6614 45.2728L75.4784 48.0001L76.4667 42.2255L72.2761 38.1346L78.067 37.2915L80.6614 32.0342L83.2509 37.2899L89.0418 38.133L84.8512 42.2239L85.8395 47.9984L80.6614 45.2728Z"
              fill="#FFAD00"
            />
            <path
              d="M99.6401 45.2728L94.4571 48.0001L95.4454 42.2255L91.2548 38.1346L97.0457 37.2915L99.6401 32.0342L102.23 37.2899L108.02 38.133L103.83 42.2239L104.818 47.9984L99.6401 45.2728Z"
              fill="#FFAD00"
            />
            <path
              d="M118.62 45.2728L113.437 48.0001L114.425 42.2255L110.234 38.1346L116.025 37.2915L118.62 32.0342L121.209 37.2899L127 38.133L122.809 42.2239L123.798 47.9984L118.62 45.2728Z"
              fill="#FFAD00"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_7391">
              <rect width="127" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <img
          src="/footer/metodos-pagamento.svg"
          className=" self-center mt-5"
        />
        <p className="text-center mt-5 sm:hidden">
          @ 2021 PCDIGA. Todos os direitos reservados.
        </p>
        <p className="text-center mt-5 sm:hidden">
          As imagens apresentadas podem não corresponder às especificações do
          produto no Mercado Português. Por questões técnicas, as cores
          apresentadas podem deferir ligeiramente das cores reais.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
