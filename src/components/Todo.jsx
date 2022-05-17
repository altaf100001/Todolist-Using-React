import React from 'react'

import styles from "./todo.module.css"

import { TodoItem } from './TodoItem'

export const Todo = () => {

    let [newTodos,setTodo] =React.useState("")
    const [todos,setTodos] = React.useState([])
    
const inhandelchange=(e)=>
{
    setTodo (e.target.value)
}
const onDelete =(id)=>{
let newTodos = todos.filter(todo=>todo.id!==id)
setTodos(newTodos)
}

  return (
   <div>
       <h1>Todo</h1>
       <input type="text" placeholder='Enter Todos'onChange={inhandelchange} value={newTodos}/>

       <button onClick={() => {
           
           
           setTodos([...todos, {id:Date.now(),value:newTodos,isCompleted:false},])
           setTodo("")
       }}>Add</button>

  <div>
    {todos.map((todo) =>(
        <TodoItem  key={todo.id} todo={todo} onDelete={onDelete}/>
        ))}

</div>

   </div>
  )
}

