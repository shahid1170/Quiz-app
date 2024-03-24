import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "./mystyle.css"



export default function App() {
  let [grades, setGrades] = useState([
    { id: 1, marks: 49, course: "C++" },
    { id: 2, marks: 52, course: "Dart" },
    { id: 3, marks: 48, course: "Python" },
    { id: 4, marks: 53, course: "Angular" },
    { id: 5, marks: 54, course: "Space" },
  ])

  const increment = (index) => {
    const copyGrades = [...grades];
    copyGrades[index].marks++;
    setGrades(copyGrades);

  }
  const decrement = (index) => {
    const copyGrades = [...grades];
    copyGrades[index].marks--;
    setGrades(copyGrades);
  }

  const onDelete = (id) => {
    setGrades(grades.filter(g => g.id !== id));

  }
  const onSelect = (id) => {
    copyGrades=[...grades]
    const course=copyGrades.find(g => g.id === id);
    course.selected=ture;
    setGrades(copyGrades);
  }
  return (
    <div className="container my-5">
      {
        grades.map((g, i) => (
          <div key={g.id}>
            <button onClick={() => increment(i)}>+</button>
            Your Marks are {g.marks} in {g.course}
            <button onClick={() => decrement(i)}>-</button>
            <button onClick={() => onDelete(g.id)}>Delete</button>
            <button onClick={()=> onSelect(g.id)}>Select</button>
          </div>
        ))}
        <hr />
        <h6>Selected Grades</h6>
        {grades.filter(g=>g.selected).map((g, i) => (
          <div key={g.id}>
            <button onClick={() => increment(i)}>+</button>
            Your Marks are {g.marks} in {g.course}
            <button onClick={() => decrement(i)}>-</button>
            
            
          </div>))}

    </div>
  )
}







