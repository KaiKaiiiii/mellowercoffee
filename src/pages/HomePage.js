import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [cupLeft, setCupLeft] = useState(0);
  const [america, setAmerica] = useState(false);
  const [africa, setAfrica] = useState(false);
  const [asia, setAsia] = useState(false);
  const [videoStopped, setVideoStopped] = useState(false);

  function onMouseDown(event) {
    const slider = document.querySelector("#slider");
    const thumb = document.querySelector(".thumb");
    event.preventDefault();
    let shiftX = event.clientX - thumb.getBoundingClientRect().left;
    console.log(thumb);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    function onMouseMove(event) {
      let newLeft =
        event.clientX - shiftX - slider.getBoundingClientRect().left;

      // the pointer is out of slider => lock the thumb within the bounaries
      if (newLeft < 0) {
        newLeft = 0;
      }
      let rightEdge = slider.offsetWidth - thumb.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }

      setCupLeft(newLeft);
      thumb.style.left = newLeft + "px";
    }

    function onMouseUp() {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }
  }

  return (
    <div className="mt-100">
      <div className="p-32 pb-8 bg-hover">
        <div className="mx-auto  w-full text-center pb-32 tracking-widest ">
          <h1 className="text-7xl font-medium  ">How many flavors are</h1>
          <br />
          <h1 className="text-7xl font-medium   ">in your coffee cup?</h1>
          <p className="text-2xl font-medium mt-7">
            not only bitterness but also
          </p>
        </div>
        <div className="relative w-full  flex items-center " id="slider">
          <div className="upper-line w-full h-11 bg-upperLine absolute left-0 -translate-y-1/2"></div>

          <div className="under-line w-full   h-11 absolute left-0 -translate-y-1/2  "></div>
          <div
            className={`notes bg-homePage_note_1 ${
              cupLeft > 40 ? "active" : ""
            }`}
          >
            <p
              className={`${
                cupLeft > 40 ? "active" : ""
              } notes-desc text-homePage_note_1`}
            >
              spices
            </p>
          </div>
          <div
            className={`notes bg-homePage_note_2 ${
              cupLeft > 120 ? "active" : ""
            }`}
          ></div>
          <div
            className={`notes bg-homePage_note_3 ${
              cupLeft > 200 ? "active" : ""
            }`}
          ></div>
          <div
            className={`notes bg-homePage_note_4 ${
              cupLeft > 280 ? "active" : ""
            }`}
          >
            <p
              className={`${
                cupLeft > 280 ? "active" : ""
              } notes-desc text-homePage_note_4`}
            >
              NUTTY/ cocoa
            </p>
          </div>
          <div
            className={`notes bg-homePage_note_5 ${
              cupLeft > 360 ? "active" : ""
            }`}
          ></div>
          <div
            className={`notes bg-homePage_note_6 ${
              cupLeft > 440 ? "active" : ""
            }`}
          >
            <p
              className={`${
                cupLeft > 440 ? "active" : ""
              } notes-desc text-homePage_note_6`}
            >
              Sweet
            </p>
          </div>
          <div
            className={`notes bg-homePage_note_7 ${
              cupLeft > 520 ? "active" : ""
            }`}
          ></div>
          <div
            className={`notes bg-homePage_note_8 ${
              cupLeft > 600 ? "active" : ""
            }`}
          ></div>
          <div
            className={`notes bg-homePage_note_9 ${
              cupLeft > 680 ? "active" : ""
            }`}
          ></div>
          <div
            className={`notes bg-homePage_note_10 ${
              cupLeft > 760 ? "active" : ""
            }`}
          ></div>
          <div
            className={`notes bg-homePage_note_11 ${
              cupLeft > 840 ? "active" : ""
            }`}
          >
            <p
              className={`${
                cupLeft > 840 ? "active" : ""
              } notes-desc text-homePage_note_11`}
            >
              Floral
            </p>
          </div>
          <div
            className={`notes bg-homePage_note_12 ${
              cupLeft > 920 ? "active" : ""
            }`}
          ></div>
          <div
            className={`notes bg-homePage_note_13 ${
              cupLeft > 1000 ? "active" : ""
            }`}
          ></div>
          <div
            className={`notes bg-homePage_note_14 ${
              cupLeft > 1040 ? "active" : ""
            }`}
          >
            <p
              className={`${
                cupLeft > 1040 ? "active" : ""
              } notes-desc text-homePage_note_14`}
            >
              Fruity
            </p>
          </div>
          <div
            className={`notes bg-homePage_note_15 ${
              cupLeft > 1080 ? "active" : ""
            }`}
          ></div>

          <div
            className="absolute left-0 h-24 bottom-0 -translate-y-1/4 cursor-grab flex justify-end thumb "
            //     onDragStart={(e) => setCupWidth(cupWidth + 0.1)}
            onMouseDown={onMouseDown}
          >
            <img
              src="/SVG_ICON/cup.png"
              alt=""
              className=" h-full object-contain"
            />
          </div>
        </div>
        <div className="text-center flex flex-col items-center">
          <p className="text-2xl font-medium mt-14 ">
            over 100 flavors to explore
          </p>
          <img src="/SVG_ICON/arrowblack.png" alt="" className="w-8 mt-4" />
        </div>
      </div>
      <div className="py-20">
        <div className="tracking-widest font-medium text-5xl text-center leading-6">
          <h2 className="">The growing region</h2>
          <br />
          <h2 className="">can affect specific flavors</h2>
          <br />
          <h2 className="">and characteristics of the coffee.</h2>
        </div>
        <p className="text-2xl font-medium mt-10 tracking-widest text-center">
          choose the origin you want to visit
        </p>
        <img src="/bean/plane.png" alt="" className="mt-16 mx-auto w-16" />
      </div>
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
        <Link to="beans/america">
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
        <Link to="beans/africa">
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
        <Link to="beans/asia">
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
      </div>
      <div className="py-20">
        <div className="tracking-widest font-medium text-5xl text-center leading-6">
          <h2 className="">Enjoy fascinating coffee flavors</h2>
          <br />
          <h2 className="">all over the world</h2>
          <br />
          <h2 className=""> just at Mellower Coffee now!</h2>
        </div>

        <img src="/SVG_ICON/star.png" alt="" className="mt-16 mx-auto w-16" />
      </div>
      <div className="relative">
        <video
          width="100%"
          height="780"
          controls
          autoPlay
          muted
          loop
          onClick={() => {
            setVideoStopped(!videoStopped);
          }}
        >
          <source src="/video/MT_video.mp4" type="video/mp4" />
        </video>

        {videoStopped && (
          <div
            className={`absolute inset-0 bg-black bg-opacity-20  flex items-center justify-center pointer-events-none`}
          >
            <img
              src="/SVG_ICON/play.png"
              alt=""
              className="w-40 cursor-pointer"
            ></img>
          </div>
        )}
      </div>
      <div className="py-20 pb-56">
        <div className="tracking-widest font-medium text-5xl text-center leading-6 pb-20">
          <h2 className="">What are you waiting for?</h2>
        </div>
        <div className="grid grid-cols-2 text-4xl tracking-widest border-y-2 border-gray">
          <button
            type="button"
            className="text-center border-r-2 border-gray py-20 hover"
          >
            Visit the nearest store
          </button>
          <button type="button" className="text-center  py-20 hover">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
