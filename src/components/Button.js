import React from "react";

const Button = ({ name }) => {
    
  return (
    <div>
        <button className="px-5 m-2 rounded-md cursor-pointer hover:bg-gray-500 bg-gray-400 text-nowrap">
                {name}
              </button>
    </div>
  );
};

export default Button;
