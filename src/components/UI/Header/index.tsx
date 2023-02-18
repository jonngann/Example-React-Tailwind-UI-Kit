import React from "react";

export const Header = ({ text }: String | any) => {
  return (
    <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {text}
    </h3>
  );
};
