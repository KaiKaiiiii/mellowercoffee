import React, { useState } from "react";
import { Link } from "react-router-dom";

const Beans = () => {
  const [america, setAmerica] = useState(false);
  const [africa, setAfrica] = useState(false);
  const [asia, setAsia] = useState(false);
  console.log({
    america,
    africa,
    asia,
  });
  return (
    <div className="container ">
      <div className="bg-beanspage_bg  w-full h-full relative overflow-hidden">
        <div className=" w-full h-full  translate-x-32">
          <img
            src={
              america
                ? "bean/mapame.png "
                : africa
                ? "bean/mapafrica.png "
                : asia
                ? "bean/mapasia.png "
                : "bean/map.png "
            }
            alt=""
            className="w-11/12 h-full  object-cover "
          />
        </div>
        <Link to="america">
          <span
            onMouseEnter={() => {
              setAmerica(true);
              setAfrica(false);
              setAsia(false);
            }}
            className="absolute america translate-x-[38vw] -translate-y-[35vh] z-[1] font-medium tracking-tight uppercase underline 	underline-offset-4"
          >
            America
          </span>
        </Link>
        <Link to="africa">
          <span
            onMouseEnter={() => {
              setAmerica(false);
              setAfrica(true);
              setAsia(false);
            }}
            className="absolute africa translate-x-[63vw] -translate-y-[20vh] z-[1] font-medium tracking-tight uppercase underline 	underline-offset-4"
          >
            Africa
          </span>
        </Link>
        <Link to="asia">
          <span
            onMouseEnter={() => {
              setAmerica(false);
              setAfrica(false);
              setAsia(true);
            }}
            className="absolute asia translate-x-[83vw] -translate-y-[48vh] z-[1] font-medium tracking-tight uppercase underline 	underline-offset-4"
          >
            Asia
          </span>
        </Link>
        <div className="w-auto absolute  -translate-y-[150%] ml-8">
          <img
            src="bean/bean.png"
            alt=""
            className="w-1/2 h-full object-cover"
          />
        </div>
        <div className="absolute left-plane top-10 right-5 flex items-center gap-4">
          <img src="bean/plane.png" alt="" className="w-14 rotate-180 " />
          <span className="text-3xl uppercase">
            Discover mellower coffee beans all over the world
          </span>
        </div>
        <div className="absolute right-plane bottom-10 left-5 flex items-center gap-4">
          <span className="text-3xl uppercase">
            Discover mellower coffee beans all over the world
          </span>
          <img src="bean/plane.png" alt="" className="w-14  " />
        </div>
      </div>
    </div>
  );
};

export default Beans;
