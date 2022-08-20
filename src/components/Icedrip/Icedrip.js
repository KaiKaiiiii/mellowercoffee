import React from "react";

const Icedrip = ({
  iceDrip,
  setIceDripGeisha,
  setIceDripAro,
  setIceDripEy,
  setIceDripColom,
  setIceDripEthi,
  setIceDripSu,
  setSignature,
  setFrappe,
  setWhiskey,
  setEspresso,
  setTraditional,
  setIceDrip,
  sethandcraft,
  sethandcraftGeisha,
  sethandcraftAro,
  sethandcraftEy,
  sethandcraftColom,
  sethandcraftEthi,
  sethandcraftSu,
}) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full  ${
        iceDrip
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center  border-t-0 border-r-2">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
          CAFFEINE
        </span>
      </div>
      <div className="w-full ">
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl border-2 border-t-0 border-b-0  border-l-0 border-gray ">
          Ice Drip coffee
        </h2>
        <div className="grid grid-cols-3  ">
          <div
            className={`bg-gradient-to-b cursor-pointer from-geisha_gradient_1 to-geisha_gradient_2 opacity-70 py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
            onClick={() => {
              setIceDripGeisha(true);
              setIceDripAro(false);
              setIceDripEy(false);
              setIceDripColom(false);
              setIceDripEthi(false);
              setIceDripSu(false);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(false);
              sethandcraftAro(false);
              sethandcraftEy(false);
              sethandcraftColom(false);
              sethandcraftEthi(false);
              sethandcraftSu(false);
            }}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Flame of geisha
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-aro_gradient_1 to-aro_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
            onClick={() => {
              setIceDripGeisha(false);
              setIceDripAro(true);
              setIceDripEy(false);
              setIceDripColom(false);
              setIceDripEthi(false);
              setIceDripSu(false);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(false);
              sethandcraftAro(false);
              sethandcraftEy(false);
              sethandcraftColom(false);
              sethandcraftEthi(false);
              sethandcraftSu(false);
            }}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Aromatic Shadow
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-ey_gradient_1 to-ey_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
            onClick={() => {
              setIceDripGeisha(false);
              setIceDripAro(false);
              setIceDripEy(true);
              setIceDripColom(false);
              setIceDripEthi(false);
              setIceDripSu(false);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(false);
              sethandcraftAro(false);
              sethandcraftEy(false);
              sethandcraftColom(false);
              sethandcraftEthi(false);
              sethandcraftSu(false);
            }}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              enchanting Yunnan
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-colom_gradient_1 to-colom_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
            onClick={() => {
              setIceDripGeisha(false);
              setIceDripAro(false);
              setIceDripEy(false);
              setIceDripColom(true);
              setIceDripEthi(false);
              setIceDripSu(false);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(false);
              sethandcraftAro(false);
              sethandcraftEy(false);
              sethandcraftColom(false);
              sethandcraftEthi(false);
              sethandcraftSu(false);
            }}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Colombia
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-ethi_gradient_1 to-ethi_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
            onClick={() => {
              setIceDripGeisha(false);
              setIceDripAro(false);
              setIceDripEy(false);
              setIceDripColom(false);
              setIceDripEthi(true);
              setIceDripSu(false);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(false);
              sethandcraftAro(false);
              sethandcraftEy(false);
              sethandcraftColom(false);
              sethandcraftEthi(false);
              sethandcraftSu(false);
            }}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Ethiopia Yirgacheffe
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-su_gradient_1 to-su_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
            onClick={() => {
              setIceDripGeisha(false);
              setIceDripAro(false);
              setIceDripEy(false);
              setIceDripColom(false);
              setIceDripEthi(false);
              setIceDripSu(true);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(false);
              sethandcraftAro(false);
              sethandcraftEy(false);
              sethandcraftColom(false);
              sethandcraftEthi(false);
              sethandcraftSu(false);
            }}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Sumatra Mandheling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icedrip;
