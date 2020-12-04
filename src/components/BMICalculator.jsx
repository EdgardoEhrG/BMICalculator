import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import FormInput from "./FormInput";

const BMICalculator = (props) => {
  const { getBmiValue } = props;

  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [unit, settUnit] = useState("Metric");
  const [count, setCount] = useState({
    heightCount: "0",
    inchesCount: "0",
    weightCount: "0",
  });

  const { heightCount, weightCount, inchesCount } = count;

  useEffect(() => {
    metricBMI(heightCount, weightCount);
    imperialBMI(heightCount, weightCount, inchesCount);
    // eslint-disable-next-line
  }, [heightCount, weightCount, inchesCount]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setCount((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSelectTag = (e) => {
    settUnit(e.target.value);
    if (e.target.value === "Metric") {
      setHeightUnit("cm");
      setWeightUnit("kg");
    } else {
      setHeightUnit("ft");
      setWeightUnit("lbs");
    }
  };

  const metricBMI = (height, weight) => {
    if (height > 0 && weight > 0) {
      const heightToMeter = height / 100;
      const bmi = weight / heightToMeter ** 2;
      getBmiValue(Math.round(bmi));
    }
  };

  const imperialBMI = (height, weight, inches) => {
    if (height > 0 && weight > 0 && inches > 0) {
      const heightToInches = height * 12 + parseInt(inches);
      const bmi = 703 * (weight / (heightToInches * heightToInches));
      getBmiValue(Math.round(bmi));
    }
  };

  const resetData = (e) => {
    e.preventDefault();
    getBmiValue(0);
    settUnit("Metric");
    setCount({
      heightCount: "0",
      inchesCount: "0",
      weightCount: "0",
    });
    setHeightUnit("cm");
    setWeightUnit("kg");
  };

  return (
    <>
      <div className="bmi-inputs">
        <div className="inputs-fields">
          <div>
            <span className="label-unit">Unit</span>
            <div className="unit">
              <select
                className="form-control form-control-sm"
                name="unit"
                value={unit}
                onChange={onSelectTag}
              >
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
          </div>
          <FormInput
            type="text"
            name="heightCount"
            title={`Height (${heightUnit})`}
            value={heightCount}
            onChange={onChangeInput}
          />
          {unit === "Imperial" ? (
            <FormInput
              type="text"
              name="inchesCount"
              title={`(in)`}
              value={inchesCount}
              onChange={onChangeInput}
            />
          ) : (
            ""
          )}
          <FormInput
            type="text"
            name="weightCount"
            title={`Weight (${weightUnit})`}
            value={weightCount}
            onChange={onChangeInput}
          />
        </div>
        <button className="btn btn-secondary" type="submit" onClick={resetData}>
          Reset
        </button>
      </div>
    </>
  );
};

BMICalculator.propTypes = {
  getBmiValue: PropTypes.func.isRequired,
};

export default BMICalculator;
