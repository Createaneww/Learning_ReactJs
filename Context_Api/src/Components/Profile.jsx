import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  
    if (!user) return <div className='text-black p-10'>Please login</div>

    return(
        <div className='p-10'>Welcome:{user.username}</div>
    )
}

export default Profile
