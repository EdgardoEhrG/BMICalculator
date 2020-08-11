import React from "react";

import BMICalculator from "./BMICalculator";

const BMI = () => {
  return (
    <>
      <div className="calculator">
        <h3>Body Mass Index Calculator</h3>
        <div className="bmi-result-container">
          <div className="bmi-result">
            <div className="bmi-result-number">Body Mass Index (BMI) = 23</div>
            <div className="bmi-category">Underweight</div>
          </div>
        </div>
        <BMICalculator />
      </div>
    </>
  );
};

export default BMI;
