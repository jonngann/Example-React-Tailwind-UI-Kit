import React from "react";
import { RefreshCw } from "react-feather";

export const ResetButton = ({ text }: String | any) => {
  return (
    <button className="inline-flex justify-center items-center align-middle px-4 py-2 border border-gray-300 text-sm leading-5 font-semibold rounded-md text-gray-700 bg-white  transition duration-150 ease-in-out hover:text-gray-800 hover:bg-gray-100 active:text-gray-900 active:bg-gray-100">
      <RefreshCw className="h-4 w-4 -ml-1 mr-2 align-middle text-gray-600" />
      <span>Reset</span>
    </button>
  );
};
