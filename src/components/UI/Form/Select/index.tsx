import React from "react";

export const Select = ({ text }: String | any) => {
  return (
    <div>
      <label className="text-gray-700 block mb-1 font-semibold">Label</label>
      <select className="form-select leading-5">
        <option>One</option>
        <option>Two</option>
      </select>
    </div>
  );
};
