import React from "react";
import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part part={props.p1} no={props.e1}/>
            <Part part={props.p2} no={props.e2}/>
            <Part part={props.p3} no={props.e3}/>
            
        </div>
      );
}
 
export default Content;