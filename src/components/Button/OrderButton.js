import React from "react";
import { Link } from "react-router-dom";

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
      <Link to="/beans/geisha">
        <button
          type="button"
          className="bg-geisha_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
  if (btnColor === "aro") {
    return (
      <Link to="/beans/aromatic">
        <button
          type="button"
          className="bg-aro_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
  if (btnColor === "colom") {
    return (
      <Link to="/beans/colombia">
        <button
          type="button"
          className="bg-colom_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
  if (btnColor === "ethi") {
    return (
      <Link to="/beans/ethiopia">
        <button
          type="button"
          className="bg-ethi_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
  if (btnColor === "su") {
    return (
      <Link to="/beans/sumatra">
        <button
          type="button"
          className="bg-su_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
  if (btnColor === "ey") {
    return (
      <Link to="/beans/eyunnan">
        <button
          type="button"
          className="bg-ey_btn btn-shadow px-8 mt-4 py-3 text-white uppercase"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
};

export default OrderButton;
