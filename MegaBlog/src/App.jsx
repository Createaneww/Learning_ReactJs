import { useState , useEffect } from 'react'
import {login , logout} from './store/authSlice'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  }, [])
  

 return !loading ? (
  <div className="bg-gray-400 min-h-screen flex flex-wrap content-between text-center">
    <div className='w-full block'>
     <Header/>
     <main>
      {/* {Outlet} */}
     </main>
     <Footer/>
    </div>
  </div>
) : null;
}

export default App
