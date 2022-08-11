import React from "react";

const OrderButton = ({ btnColor, content }) => {
  if (!btnColor) {
    return (
      <button
        type="button"
        className="bg-hover btn-shadow px-8 mt-4 py-3 text-white uppercase"
      >
        {content ? content : "Order"}
      </button>
    );
  }
  if (btnColor === "geisha") {
    return (
      <button
        type="button"
        className="bg-geisha_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
      >
        {content ? content : "Order"}
      </button>
    );
  }
  if (btnColor === "aro") {
    return (
      <button
        type="button"
        className="bg-aro_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
      >
        {content ? content : "Order"}
      </button>
    );
  }
  if (btnColor === "colom") {
    return (
      <button
        type="button"
        className="bg-colom_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
      >
        {content ? content : "Order"}
      </button>
    );
  }
  if (btnColor === "ethi") {
    return (
      <button
        type="button"
        className="bg-ethi_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
      >
        {content ? content : "Order"}
      </button>
    );
  }
  if (btnColor === "su") {
    return (
      <button
        type="button"
        className="bg-su_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
      >
        {content ? content : "Order"}
      </button>
    );
  }
  if (btnColor === "ey") {
    return (
      <button
        type="button"
        className="bg-ey_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
      >
        {content ? content : "Order"}
      </button>
    );
  }
};

export default OrderButton;
