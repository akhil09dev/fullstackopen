import React from "react";

const Btn = ({text,clickHandler}) => {
    return ( <button onClick={clickHandler}>
        {text}
    </button> );
}
 
export default Btn;