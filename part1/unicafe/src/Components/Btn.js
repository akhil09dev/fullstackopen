import React from "react";

const Btn = ({text,handleClick}) => {
    return (
        
            <button onClick={handleClick}>{text}</button>
      
      );
}
 
export default Btn;