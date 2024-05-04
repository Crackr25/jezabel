import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Bookkeeping Services",
          "Financial Reporting Services",
          "Budgeting and Forecasting Services",
          "Tax Preparation Services",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
