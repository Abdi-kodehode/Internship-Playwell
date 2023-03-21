import React from "react";

const Spiner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid gap-2">
        <div className="flex items-center justify-center ">
          <div className="w-24 h-24 border-l-4 border-red-900 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Spiner;
