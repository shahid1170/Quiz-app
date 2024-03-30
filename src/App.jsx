import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import "./mystyle.css"
import questions from "./mylib/data.json"



export default function App() {

const [allQues, setAllQues]= useState(questions);

const onSelect=(qid, op)=>{
  console.log(qid, op)
  const copyQues=[...allQues];
  const ques=copyQues.find(q=>q.id===qid)
  ques.selectedOption=op;
  setAllQues(copyQues);
  console.log(allQues);
}
  
const getStyle=(q,op)=>{
  let style="list-group-item"
  if(q.selectedOption){
    if(q.answer===q.selectedOption)
    style=style + "bg-success"
  else
    style=style + "bg-danger"
  }
  return style;

}
  return (

    <div className='container my-3'>
      {allQues.map((q) => (
        <div className="card my-2" key={q.id}>
          <div className="card-header">{q.statement}</div>
          <ul className="list-group list-group-flush">
            {q.options.map((op) =>
              <li
                key={op}
                className={getStyle} onClick={() =>onSelect(q.id, op)}>{op}</li>
            )}

            
          </ul>
        </div>
      ))}


    </div>
  )
}







