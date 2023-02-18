import React from "react";

export const Input = ({ text }: String | any) => {
  return (
    <div>
      <label className="text-gray-700 block mb-1 font-semibold">Label</label>
      <input className="form-input leading-5" />
    </div>
  );
};
