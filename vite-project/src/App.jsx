import React, { useEffect, useRef } from 'react'
import { useState , useCallback } from 'react'
const App = () => {
  const [password, setPassword] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [length, setLength] = useState(8)
  
  //useRef hook
  const passwordRef = useRef(null)
  const copyPasswordToClipBoard = useCallback(
    () => {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,51)
      window.navigator.clipboard.writeText(password)
    },
    [password],
  )
  

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str += "01234566789"
      if(charAllowed) str += "!@#$%^&*()"

      for (let i = 0; i <=length; i++) {
        let char = Math.floor(Math.random() * str.length - 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    },
    [numberAllowed , charAllowed,length , setPassword]  //(fn  , [dependencies])
  )

  useEffect(()=>{ // ye run karvata he bar bar agar dependencies me change hua too
    passwordGenerator()
  } , [length , numberAllowed , charAllowed , passwordGenerator])
 
  return (
    <>
    <div className=' bg-slate-700 max-w-md mx-auto shadow-md rounded-xl py-5  my-24 ' >
    <p className='text-center text-white my-3 text-2xl'>Password Generator</p>
    <div className=' flex justify-evenly shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text" 
      placeholder='password'
      value={password} 
      className='outline-none w-full py-1 px3'
      readOnly 
      ref={passwordRef}
      />
      <button onClick={copyPasswordToClipBoard}
      className=' text-white bg-slate-800 hover:bg-slate-950'>Copy</button>
    </div>
    <div className='text-white flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
         min={6}
         max={50}
         value={length}
         className='cursor-pointer '
         onChange={(e)=>{setLength(e.target.value)}}   
       />
       <label>Length : {length}</label>
      </div>
    <div className='flex items-center gap-x-1'>
    <input 
    type="checkbox"
    defaultChecked={numberAllowed}
    id='numberInput'
    onChange={() =>{
      setNumberAllowed((prev) => !prev)
    }} />
    <label htmlFor="numberInput">Number</label>
    </div>
    <div className='flex items-center gap-x-1'>
    <input 
    type="checkbox"
    defaultChecked={charAllowed}
    id='charInput'
    onChange={() =>{
      setCharAllowed((prev) => !prev)
    }} />
    <label htmlFor="charInput">Character</label>
    </div>
    </div>
    
</div>

    </>
  )
}

export default App


