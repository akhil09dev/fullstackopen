import React from "react";

const Part = (props) => {
    return ( 
        <div>
            <p>
        {props.name} {props.excercises}
      </p>
        </div>
     );
}
 
export default Part;