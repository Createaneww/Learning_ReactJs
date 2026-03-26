import { TodoContextProvider} from './context/TodoContext'
import './App.css'
import { useEffect, useState } from 'react'
import TodoForm from './Componets/TodoForm'
import TodoItem from './Componets/TodoItem'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, isCompleted: false }])
  }

  const editTodo = (id, text) => {
    setTodos((prev) => prev.map((t) => t.id === id ? { ...t, text } : t))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((t) => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
  }

  //getting stored_todos frm local storage
  useEffect(() => {
    const storedtodods = JSON.parse(localStorage.getItem("todos") || "[]")
    if(storedtodods.length > 0){
      setTodos(storedtodods)
    }
  }, [])

  //setting todos in localstorage
  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <TodoContextProvider value={{ todos, addTodo, editTodo, deleteTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=>(
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
