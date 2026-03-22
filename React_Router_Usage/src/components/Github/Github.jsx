import React from 'react'
import { useState ,useEffect } from 'react'

function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/Createaneww")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setData(res)
    })
    
  }, [])
  
  return (
    <div className='flex bg-slate-400 text-center'>
      <img src={data.avatar_url} alt="github img" width={100} />
      My github followers : {data.followers}
    </div>
  )
}

export default Github
