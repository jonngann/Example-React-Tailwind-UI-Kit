import React from "react";

export const Card = ({ children }: any) => {
  return (
    <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-full flex-col justify-center gap-4 p-6">
        {children}
      </div>
    </div>
  );
};
