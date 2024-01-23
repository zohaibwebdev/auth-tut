import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full justify-center items-center bg-gradient-to-br from-blue-400 to-blue-700">
      {children}
    </div>
  );
};

export default layout;
