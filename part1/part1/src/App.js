import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

import { useState } from "react"
import Display from "./components/Display"
import Btn from "./components/Btn"
// const hello=()=>{
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }
//   return(
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

function App() {
  const [counter,setCounter]= useState(0)
  const reset=()=>setCounter(0)
  const increment=()=>setCounter(counter+1)
  const course ={
    name:'Half Stack application development',
  parts:[
  {
      name : 'Fundamentals of React',
     excercises: 10
    },
  {
      name : 'Using props to pass data',
     excercises: 7
    },
  {
      name : 'State of a component',
     excercises: 14
    }
  ]
}
  

////part1_c

// const name = 'Peter'
// const age = 10

  return (
    <div className="App">
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    <Btn text={'increment'}  clickHandler={increment}/>
      <Display counter={counter}/>
      <Btn text={'Reset'}  clickHandler={reset}/>

    </div>

    
  //   //-----------------part__c
  //   <div>
  //   <h1>Greetings</h1>
  //   <Hello name="Maya" age={26 + 10} />
  //   <Hello name={name} age={age} />
  // </div>
  );
}

export default App;
