import React from "react"
import { useState } from "react"
import "./App.css" 
let globalID = 0


function App(){
    // 
    const [task, setTask] = useState()
    const [todos, setTodos] = useState([])

    const addFn = (e) => {
        e.preventDefault()
        setTodos(oldtodos=>{
            setTask('')
            return [...oldtodos, {todo: task, id: globalID++}]
        })
    }
    
     const del = (itemID) => {
        setTodos(oldtodos=> oldtodos.filter(item => item.id !== itemID))
     }
    
    return <form onSubmit={addFn}>
        <h1>Hello, This is a Practise session todo</h1>
        <input type="text" value={task} onChange={e=>{
            setTask(e.target.value)
        }} />
        <button type="submit" >Add ToDo</button>
        <ul>
            {todos.map((item, index)=>{
                return <div key={item.id}>
                    <li>{item.todo}</li>
                    <button onClick={() => del(item.id)}>Clear</button>
                </div>
            })}
        </ul>
    </form>
}

export default App