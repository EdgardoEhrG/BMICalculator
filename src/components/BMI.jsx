import React from "react";

import BMICalculator from "./BMICalculator";

const BMI = () => {
  return (
    <>
      <div className="calculator">
        <h3>Body Mass Index Calculator</h3>
        <div className="bmi-result-container">
          <div className="bmi-result">
            <div className="bmi-resul-number"></div>
            <div className="bmi-category"></div>
          </div>
        </div>
        <BMICalculator />
      </div>
    </>
  );
};

export default BMI;
