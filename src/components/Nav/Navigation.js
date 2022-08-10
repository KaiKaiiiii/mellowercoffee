import React, { useState } from "react";
import OrderButton from "../Button/OrderButton";
import Submenu from "../Submenu/Submenu";

const Navigation = () => {
  const [signature, setSignature] = useState(false);
  const [frappe, setFrappe] = useState(false);
  const [whiskey, setWhiskey] = useState(false);
  const [espresso, setEspresso] = useState(false);
  const [traditional, setTraditional] = useState(false);
  const [iceDrip, setIceDrip] = useState(false);
  const [handCraft, setHandCraft] = useState(false);

  return (
    <nav className="relative top-0 left-0 right-0 ">
      <ul className="flex border-b-2 border-t-2 border-gray">
        <li className="px-7 py-9">
          <a href="">
            <img
              src="SVG_ICON/logoMellowercoffee.svg"
              className="w-[90%] h-full"
              alt="text-logo"
            />
          </a>
        </li>

        <ElementFather desc="BEVERAGES">
          <Submenu
            setSignature={setSignature}
            setFrappe={setFrappe}
            setWhiskey={setWhiskey}
            setEspresso={setEspresso}
            setTraditional={setTraditional}
            setHandCraft={setHandCraft}
            setIceDrip={setIceDrip}
          ></Submenu>
        </ElementFather>

        <ElementFather desc="Beans"></ElementFather>

        <li className="px-5 flex items-center justify-center w-[350px]">
          <img
            src="SVG_ICON/search.svg"
            alt="search-icon"
            className="w-12 h-12 inline-block fill-gray"
          />
          <input
            type="text"
            name=""
            id=""
            className="border-b-[1px] border-gray inline-block outline-none w-full"
          />
        </li>

        <ElementFather desc="barista"></ElementFather>

        <ElementFather desc="bar"></ElementFather>

        <li className="flex flex-col ">
          <a href="" className="px-3 py-5 border-b-2 border-gray hover">
            ABOUT US
          </a>
          <div className="flex items-center justify-evenly h-full">
            <button
              type="button"
              className="w-full h-full border-r-2 pr-[2px] border-gray hover"
            >
              EN
            </button>
            <button type="button" className="w-full h-full hover">
              VN
            </button>
          </div>
        </li>
        <li className="px-5 flex flex-1 items-center justify-center">
          <p className="font-extrabold text-right tracking-widest ml-auto w-1/2 break-words inline-block">
            INTERNATIONAL SPECIALTY COFFEE CHAIN
          </p>
        </li>
      </ul>
      <Signature signature={signature}></Signature>
      <Frappe frappe={frappe}></Frappe>
      <Whiskey whiskey={whiskey}></Whiskey>
      <Espresso espresso={espresso}></Espresso>
      <Traditional traditional={traditional}></Traditional>
      <Icedrip iceDrip={iceDrip}></Icedrip>
      <Handcraft handCraft={handCraft}></Handcraft>
    </nav>
  );
};

export default Navigation;

const ElementFather = ({ desc, children }) => {
  return (
    <li
      className={`relative flex flex-col items-center justify-center  px-4 cursor-pointer group hover hover:fill-white`}
    >
      <p className="text-sm uppercase tracking-widest pt-4">{desc}</p>
      {/* <img
        src="SVG_ICON/arrow.svg"
        alt="arrow icon"
        className="mx-auto w-8 h-auto fill-white"
      /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#958B8B"
        height="48"
        width="48"
        className="mx-auto h-auto group-hover:fill-white"
      >
        <path d="M24 29 13.8 18.8l.8-.8 9.4 9.4 9.4-9.4.8.8Z" />
      </svg>
      {children}
    </li>
  );
};

const Signature = ({ signature }) => {
  return (
    <div
      className={`w-full border-2 border-t-0 border-gray inset-0 relative h-full max-h-[620px] ${
        signature
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center  border-t-0 border-l-0">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
          BEVERAGES
        </span>
      </div>
      <div className="">
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl border-r-2  border-gray ">
          signature
        </h2>
        <div className="flex h-full items-stretch justify-center max-h-[540px] ">
          <div
            className={`bg-saigon  flex px-7  flex-col items-center justify-end py-14 border-2 border-l-0  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/saigon.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide"> SAIGON IMPRESSION</p>
              <span className="italic tracking-wide">118.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-pandan  flex px-7 flex-col items-center justify-end py-14 border-2 border-r-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/pandan.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide">ONE KAFFEE</p>
              <span className="italic tracking-wide">118.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-icedCitrus px-7 flex flex-col items-center justify-end py-14 border-2  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/icy.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide">ICED CITRUS YIRGACHEFFE</p>
              <span className="italic tracking-wide">118.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="uppercase tracking-widest text-center py-6 text-2xl border-t-0   border-gray ">
          seasonal beverages
        </h2>
        <div className="flex  justify-center py-16 items-center max-h-[540px]   relative">
          <div className="absolute z-0 w-full h-full border-t-2 border-b-2 border-gray">
            <img
              src="Beverages/bg-gradient.png"
              alt=""
              className="w-full h-full object-cover  "
            />
          </div>
          <div className="z-10 flex flex-col items-center justify-center">
            <div className="w-72  ">
              <img
                src="Beverages/mangote 2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide">
                Passion Fruit Jasmine Hibiscus Tea
              </p>
              <span className="italic tracking-wide">99.000 VND</span>
            </div>
            <OrderButton></OrderButton>
            <img
              src="SVG_ICON/arrow.svg"
              alt=""
              className="absolute left-0 rotate-90"
            />
            <img
              src="SVG_ICON/arrow.svg"
              alt=""
              className="absolute right-0 -rotate-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Frappe = ({ frappe }) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full max-h-[620px]  ${
        frappe
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center border-t-0 ">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest border-t-0  max-w-[150px]  ">
          CAFFEINE
        </span>
      </div>
      <div className="w-full">
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl border-r-0 border-gray ">
          frappe Coffee
        </h2>
        <div className="flex justify-center max-h-[540px] ">
          <div
            className={`bg-espressoFrappe grow  flex px-7  flex-col items-center justify-end py-14 border-2 border-l-0  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/espresso.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center text-white">
              <p className="uppercase tracking-wide text-white">espresso</p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-caramelFrappe grow py-[50px] flex px-7 flex-col items-center justify-end py-14 border-2 border-r-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/caramel.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center text-white">
              <p className="uppercase tracking-wide text-white">caramel</p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-mochaFrappe grow px-7 flex flex-col items-center justify-end py-14 border-2  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/mocha.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center text-white">
              <p className="uppercase tracking-wide text-white">mocha</p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Whiskey = ({ whiskey }) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full max-h-[620px] ${
        whiskey
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center border-t-0 border-r-2">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
          CAFFEINE
        </span>
      </div>
      <div className="w-full">
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl border-2 border-b-0 border-t-0 border-l-0 border-gray ">
          whiskey coffee
        </h2>
        <div className="grid grid-cols-2 max-h-[540px] ">
          <div
            className={`bg-whiskeySour grow  flex py-[50px] flex-col items-center justify-end py-14 border-2 border-l-0  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/not_a_whisky.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center text-white">
              <p className="uppercase tracking-wide ">Not a whiskey sour</p>
              <span className="italic tracking-wide">118.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-wildBerryWhiskey grow py-[50px] flex flex-col items-center justify-end py-14 border-2  border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/wild_berry.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center text-white">
              <p className="uppercase tracking-wide ">
                wildberry espresso whiskey soda
              </p>
              <span className="italic tracking-wide">118.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Espresso = ({ espresso }) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full  ${
        espresso
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
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl border-2 border-b-0 border-t-0  border-l-0 border-gray ">
          espresso based coffee
        </h2>
        <div className="grid grid-cols-3  ">
          <div
            className={`bg-soloEspresso grow  flex py-[50px] flex-col items-center justify-end py-14 border-2 border-l-0 border-b-0  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/solo_espresso.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">SOLO espresso</p>
              <span className="italic tracking-wide">58.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-doppioEspresso grow py-[50px] flex flex-col items-center justify-end py-14 border-2  border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/solo_espresso.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">doppio espresso</p>
              <span className="italic tracking-wide">78.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-americano grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-r-0 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/americano.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">americano</p>
              <span className="italic tracking-wide">78.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-macchiato grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/machiatto.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">espresso macchiatto</p>
              <span className="italic tracking-wide">68.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-piccolo grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/piccolo.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">piccolo latte</p>
              <span className="italic tracking-wide">68.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-flatWhite grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/flatWhite.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">flat white</p>
              <span className="italic tracking-wide">78.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-capu grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/cappuccino.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">cappuccino</p>
              <span className="italic tracking-wide">88.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-latte grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/latte.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">caffè latte</p>
              <span className="italic tracking-wide">78.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-mocha grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/cafe_mocha.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">caffè mocha </p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-whiteLatte grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/whiteChoco.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">whitle choco Latte</p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-whiteMint grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/whiteChoco.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">white choco mint latte</p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-babycino grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/babycino.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">babyccino</p>
              <span className="italic tracking-wide">78.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Traditional = ({ traditional }) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full  ${
        traditional
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center border-t-0  ">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
          CAFFEINE
        </span>
      </div>
      <div className="w-full ">
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl border-2 border-b-0 border-t-0  border-l-0 border-gray ">
          traditional vietnamese coffee
        </h2>
        <div className="grid grid-cols-3  ">
          <div
            className={`bg-cfTrung grow  flex py-[50px] flex-col items-center justify-end py-14 border-2 border-l-0 border-b-0  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/cftrung.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">hanoi egg coffee</p>
              <span className="italic tracking-wide">88.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-cfPhinBlack grow py-[50px] flex flex-col items-center justify-end py-14 border-2  border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/cfphinden.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">black phin coffee</p>
              <span className="italic tracking-wide">69.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-cfPhinWhite grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-r-0 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/cfphin.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">white phin coffee</p>
              <span className="italic tracking-wide">75.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-cfd grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/cfd.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">black coffee</p>
              <span className="italic tracking-wide">69.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-cfsd grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="Beverages/cfsd.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">White coffee</p>
              <span className="italic tracking-wide">75.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-bacXiu grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-24 ">
              <img
                src="Beverages/bacxiu.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">
                vietnamese style latte{" "}
              </p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Icedrip = ({ iceDrip }) => {
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
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Flame of geisha
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-aro_gradient_1 to-aro_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Aromatic Shadow
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-ey_gradient_1 to-ey_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              enchanting Yunnan
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-colom_gradient_1 to-colom_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Colombia
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-ethi_gradient_1 to-ethi_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Ethiopia Yirgacheffe
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-su_gradient_1 to-su_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
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

const Handcraft = ({ handCraft }) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full  ${
        handCraft
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
          handcrafted coffee
        </h2>
        <div className="grid grid-cols-3  ">
          <div
            className={`bg-gradient-to-b cursor-pointer from-geisha_gradient_1 to-geisha_gradient_2 opacity-70 py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Flame of geisha
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-aro_gradient_1 to-aro_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Aromatic Shadow
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-ey_gradient_1 to-ey_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              enchanting Yunnan
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-colom_gradient_1 to-colom_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Colombia
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-ethi_gradient_1 to-ethi_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase text-white">
              Ethiopia Yirgacheffe
            </p>
          </div>
          <div
            className={`bg-gradient-to-b cursor-pointer from-su_gradient_1 to-su_gradient_2  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
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
