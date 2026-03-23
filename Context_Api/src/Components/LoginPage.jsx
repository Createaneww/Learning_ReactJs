import { useState , useContext} from "react"
import UserContext from "../Context/UserContext"

function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username , password})
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
  <div className="bg-white p-8 rounded-2xl shadow-lg">
    
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Login Form
    </h2>

    <div className="flex flex-col gap-4">
      
      <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <button
      onClick={handleSubmit}
      className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
    >
      Submit
    </button>

  </div>
</div>
  )
}

export default LoginPage
