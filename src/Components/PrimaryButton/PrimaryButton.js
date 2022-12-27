import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ path, text }) => {
   return (
      <Link to={path}>
         <button className="text-accent font-medium   bg-secondary px-5 py-3 rounded-md mt-5 block uppercase hover:scale-[0.9]">
            {text}
         </button>
      </Link>
   );
};

export default PrimaryButton;
