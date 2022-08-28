import React from "react";
import OrderButton from "../Button/OrderButton";

const GeishaDetailCard = () => {
  return (
    <div className=" col-span-1  text-white flex flex-col relative  border-gray ">
      <div className="absolute inset-0 opacity-70 bg-gradient-to-b from-geisha_gradient_1 to-geisha_gradient_2 z-0"></div>
      <div className="grow pt-8 pb-12 px-5 text-lg flex flex-col  z-10">
        <h2 className="uppercase text-3xl font-bold pb-3 border-b-2 border-white">
          FLAME OF GEISHA
        </h2>
        <div className="pt-8 flex justify-between ">
          <span className="capitalize">Origin</span>
          <span className="uppercase">panama</span>
        </div>
        <div className="pt-3 flex justify-between ">
          <span className="capitalize">Roast level</span>
          <span className="uppercase">light</span>
        </div>
        <h3 className="mt-20 pb-3  capitalize border-b-2 border-white ">
          Cupping notes
        </h3>
        <ul className="mt-4 icedrip-detail-list ">
          <li>Jasmine Flower</li>
          <li>Sweet Orange</li>
          <li>Red Plum</li>
          <li>Chocolate Liqueur</li>
          <li>Preserved Fruit</li>
        </ul>
        <OrderButton btnColor="geisha" content="View More"></OrderButton>
      </div>
      <div className="w-full max-h-20 z-10">
        <img
          src="/Beverages/geisha_detail.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default GeishaDetailCard;
