import { useState } from "react";
import Title from "./Components/Title";
import Btn from "./Components/Btn";
import Stats from "./Components/Stats";

function App() {

  const [ratings , setRatings]= useState(
    
    [
      {
        rating:'Good',
        count:0,
       key:1
      },
      {
        rating:'Neutral',
        count:0,
        key:2
      },
      {
        rating:'Bad',
        count:0,
        key:3
      }
    ]
    
     )

  const statistics={
    total:0,
    avg:0,
    postv:0
  }

const updateStats=(ratings)=>{
 
}
  


  // const [good , setGood] = useState(0);
  // const [bad , setBad] = useState(0);
  // const [neutral , setNeutral] = useState(0);
  return (
    <div className="App">
     <Title/>
        { ratings.map((p)=>{

          return (<Btn text={p.rating} handleClick={()=>{

            const newRatings =[...ratings]
           newRatings.map((e)=>{
            if(e.rating==p.rating){
              e.count++
            }
           })
            
            setRatings(newRatings)
           
          }} 
          />)
        })
}
<Stats ratings={ratings} statistics={statistics}/>
    </div>
  );
}

export default App;
