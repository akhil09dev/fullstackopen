import React from "react";
import Part from "./Part";

const Content = ({parts}) => {
    return (
        <div>
           {parts.map(e=>{
            return(<Part name={e.name} excercises={e.excercises}/>)
           }
            
            )}
            
        </div>
      );
}
 
export default Content;