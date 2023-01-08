import React,{useState , useEffect} from 'react'
import Header from './Header'

function Apps() {

  const [todos, setTodos] =  useState([])
  const [task , setTask] = useState("")


  function createtodo(){
     

        setTask(evvent.target.value)
      }}/>
    <button onClick={createtodo}>Add</button>
    <ul>

    </ul>
  </div>
}

export default Apps