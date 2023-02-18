import React from "react";

export const SubmitButton = ({ text }: String | any) => {
  return (
    <button className="inline-flex justify-center items-center align-middle px-4 py-2 border border-transparent text-sm leading-5 font-semibold rounded-md text-white bg-blue-600  transition duration-150 ease-in-out hover:bg-blue-500 active:bg-blue-700">
      Submit
    </button>
  );
};
