import React from "react";
import { useState } from "react";

const HomePage = () => {
  const [cupLeft, setCupLeft] = useState(0);

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

  // console.log(cupLeft);
  return (
    <div className="">
      <div className="p-32 bg-hover">
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
      </div>
    </div>
  );
};

export default HomePage;
