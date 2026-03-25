import React, { useState  , useEffect} from 'react'
import ThemeContext from './ThemeContext'

function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState("light")
    const toggleTheme = ()=>{
        setTheme(prev => (prev === "light" ? "dark":"light"))
    }

    useEffect(() => {
      if(theme === "dark"){
        document.documentElement.classList.add("dark")
      }else{
        document.documentElement.classList.remove("dark")
      }
    }, [theme])

  return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider


