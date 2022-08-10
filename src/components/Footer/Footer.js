import React from "react";

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 border-t-2 border-gray h-[200px]">
      <ul className="flex h-full ">
        <li className="px-7 flex flex-col justify-center w-[525px]  ">
          <img
            src="SVG_ICON/logoM.svg"
            alt=""
            className="w-[117px] h-auto cursor-pointer"
          />
          <p>©2022 MELLOWER COFFEE HCM CO., LTD. </p>
          <p>All rights reserved</p>
        </li>
        <li className="flex flex-col  items-center justify-center">
          <a
            href=""
            className="flex items-center justify-center block w-full h-full px-7 "
          >
            <img src="SVG_ICON/ig.svg" alt="" className="w-[34px] h-auto" />
          </a>
          <a
            href=""
            className="flex items-center justify-center block w-full h-full border-t-2 border-gray px-7 "
          >
            <img src="SVG_ICON/ig.svg" alt="" className="w-[34px] h-auto" />
          </a>
        </li>
        <li className="px-7 flex items-center justify-center flex-1">
          <div className="flex gap-4 max-w-sm text-sm">
            <p className="tracking-widest font-extrabold ">OFFICE</p>
            <div className="">
              <p>
                No.18, D1 Street, Saigon Pearl Villas, 90-92 Nguyen Huu Canh,
                Ward 22, Binh Thanh District, HCMC.
              </p>

              <p className="mt-5">(028) 3822 5806</p>
              <p>info@mellowerhcm.com</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col">
          <div className="flex-1 flex items-end pb-4 text-right ml-auto">
            <div className="flex items-center">
              <a href="" className="tracking-wider ">
                VISIT OUR STORE
              </a>
              <img
                src="SVG_ICON/arrow.svg"
                alt=""
                className="w-auto h-[30px] -rotate-90"
              />
            </div>
          </div>
          <div className="bg-black text-white px-4 py-2 tracking-widest text-sm">
            JUST FOR A CUP OF GOOD COFFEE
          </div>
        </li>
        <li className="flex flex-col justify-center px-10 cursor-pointer">
          <p className="tracking-widest ">TO TOP</p>
          <img src="SVG_ICON/arrowontop.svg" alt="" className="h-auto" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
