import React, { useContext } from "react";

const TodoContext =  React.createContext({
    todos:[
        {
            id:1,
            text: "I am Todo",
            isCompleted: false
        }
    ],
    addTodo : (text)=>{},
    deleteTodo : (id)=>{},
    editTodo : (id , text)=>{},
    toggleTodo : (id)=>{}
})

export default TodoContext

//humne phele context de diya taki bar bar na dena pade , seedha useTodo use karo
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider