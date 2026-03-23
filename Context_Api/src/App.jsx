import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import LoginPage from './Components/LoginPage'
import Profile from './Components/Profile'
function App() {

  return (
    <UserContextProvider>
      <LoginPage/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
