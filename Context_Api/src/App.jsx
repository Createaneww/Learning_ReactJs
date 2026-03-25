import './App.css'
import LoginPage from './Components/LoginPage'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <LoginPage/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
