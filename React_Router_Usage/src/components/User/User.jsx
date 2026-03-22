import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-slate-500 p-4 w-3/4 ml-40'>
      My Params : {userid}
    </div>
  )
}

export default User
