import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full h-screen bg-white pb-20 pt-12 md:p-7">
      {children}
    </div>
  );
};

export default Container;
