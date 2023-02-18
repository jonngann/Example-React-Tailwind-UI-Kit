import React from "react";

export const CheckboxGroup = ({ text }: String | any) => {
  return (
    <fieldset>
      <legend className="text-gray-700 block mb-1 font-semibold">
        Checkbox Group
      </legend>
      <div>
        <label className="block">
          <input className="form-checkbox" type="radio" />
          <span className="ml-2">Option</span>
        </label>
      </div>
      <div>
        <label className="block">
          <input className="form-checkbox" type="radio" />
          <span className="ml-2">Option</span>
        </label>
      </div>
    </fieldset>
  );
};
