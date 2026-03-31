import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './componets/AddTodo'
import Todolist from './componets/Todolist'

function App() {
  const [input, setInput] = useState("")
  const [editId, setEditId] = useState(null)

  return (
    <>
     <AddTodo 
     input={input} 
        setInput={setInput} 
        editId={editId} 
        setEditId={setEditId} />
     <Todolist
     setInput={setInput} 
        setEditId={setEditId}/>
    </>
  )
}

export default App
