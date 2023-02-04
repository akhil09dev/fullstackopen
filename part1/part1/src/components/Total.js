import React from "react";

const Total = ({parts}) => {
    
     var total =0
     parts.map(e=> total+=e.excercises
        )
    return ( 
        <div>

<p>Number of exercises {total}</p>
        </div>
     );
}
 
export default Total;