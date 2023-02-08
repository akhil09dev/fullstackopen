import React, { useState } from "react";
import Display from "./Display";
const Stats = ({ratings, statistics}) => {


   
    return (  
        <div>
            <h2>Statistics</h2>
        {ratings.map((p)=>{
            return <Display text={p.rating} count={p.count}/>
            
        })}
        

        </div>
    );
}
 
export default Stats;