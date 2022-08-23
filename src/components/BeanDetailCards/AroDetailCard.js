import React from "react";
import OrderButton from "../Button/OrderButton";

const AroDetailCard = () => {
  return (
    <div className=" col-span-1 text-white flex flex-col relative  border-gray ">
      <div className="absolute inset-0  bg-gradient-to-b from-aro_gradient_1 to-aro_gradient_2 z-0"></div>
      <div className="grow pt-8 pb-16 px-5 text-lg flex flex-col  z-10">
        <h2 className="uppercase text-3xl font-bold pb-3 border-b-2 border-white">
          AROMATIC SHADOW
        </h2>
        <div className="pt-8 flex justify-between ">
          <span className="capitalize">Origin</span>
          <span className="uppercase">ETHIOPIA</span>
        </div>
        <div className="pt-3 flex justify-between ">
          <span className="capitalize">Roast level</span>
          <span className="uppercase">MEDIUM</span>
        </div>
        <h3 className="mt-20 pb-3  capitalize border-b-2 border-white ">
          Cupping notes
        </h3>
        <ul className="mt-4 icedrip-detail-list ">
          <li>White flowers</li>
          <li>Citrus</li>
          <li>Molasses</li>
          <li>Medium Body</li>
          <li>Round Mouthfeel</li>
        </ul>
        <OrderButton btnColor="aro" content="View More"></OrderButton>
      </div>
      <div className="w-full max-h-20 z-10">
        <img
          src="/Beverages/aro_detail.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AroDetailCard;
