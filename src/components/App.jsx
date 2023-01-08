import React,{useState , useEffect} from 'react'
import Header from './Header'

function Apps() {

  const [todos, setTodos] =  useState([])
  const [task , setTask] = useState("")


  function createtodo(){
     

  }
  return <div>
    <h1>Best To-Do App </h1>
    <input type="text " value={task} onChange={event => {
        setTask(evvent.target.value)
      }}/>
    <button onClick={createtodo}>Add</button>
    <ul>

    </ul>
  </div>
}

export default Apps