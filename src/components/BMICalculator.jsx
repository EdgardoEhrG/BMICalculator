import React, { useState, useEffect } from "react";

import FormInput from "./FormInput";

const BMICalculator = () => {
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [unit, settUnit] = useState("Metric");
  const [count, setCount] = useState({
    heightCount: "0",
    inchesCount: "0",
    weightCount: "0",
  });

  useEffect(() => {}, [unit]);

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

  const { heightCount, weightCount, inchesCount } = count.data;

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
        <button className="btn btn-secondary" type="submit">
          Reset
        </button>
      </div>
    </>
  );
};

export default BMICalculator;
