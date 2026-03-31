import { useSelector , useDispatch } from "react-redux"
import { removeTodo , updateTodo } from "../features/todo/TodoSlice"

function Todolist({setInput , setEditId}) {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
    const handleEdit = (todo) => {
    setInput(todo.text)   // 🔥 input fill
    setEditId(todo.id)    // 🔥 edit mode on
  }
  return (
    <>
  <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-lg rounded-xl">
    
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
      Todos
    </h2>

    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200 transition"
        >
          <span className="text-gray-700">{todo.text}</span>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
          >
            Delete
          </button>
          <button
            onClick={()=> handleEdit(todo)}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
          >
            Edit
          </button>
        </li>
      ))}
    </ul>

  </div>
</>
  )
}

export default Todolist
