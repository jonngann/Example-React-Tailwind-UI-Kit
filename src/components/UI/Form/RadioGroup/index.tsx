import React from "react";

export const RadioGroup = ({ text }: String | any) => {
  return (
    <fieldset>
      <legend className="text-gray-700 block mb-1 font-semibold">
        Radio Group
      </legend>
      <div>
        <label className="block">
          <input className="form-radio" type="radio" />
          <span className="ml-2">Option</span>
        </label>
      </div>
      <div>
        <label className="block">
          <input className="form-radio" type="radio" />
          <span className="ml-2">Option</span>
        </label>
      </div>
    </fieldset>
  );
};
