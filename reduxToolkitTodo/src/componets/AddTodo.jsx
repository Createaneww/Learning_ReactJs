import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/TodoSlice"
import { updateTodo } from "../features/todo/TodoSlice"

function AddTodo({ input, setInput, editId, setEditId }) {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editId) {
      dispatch(updateTodo({ id: editId, text: input })) // 🔥 update
      setEditId(null)
    } else {
      dispatch(addTodo(input))
    }
    setInput("")
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 max-w-md mx-auto mt-6"
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm 
    focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
    transition"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="px-5 py-2 bg-green-600 text-white font-medium rounded-lg 
    hover:bg-green-700 active:scale-95 transition"
      >
        {editId ? "Update" : "Add"}
      </button>
    </form>
  )
}

export default AddTodo
