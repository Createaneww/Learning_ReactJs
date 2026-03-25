
import './App.css'
import CardUi from './Components/CardUi'
import Themebtn from './Components/Themebtn'
import ThemeContextProvider from './Context/ThemeContextProvider'
function App() {


  return (
  <ThemeContextProvider>
  <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <CardUi/>
                    </div>
                </div>
          </div>
    </ThemeContextProvider>
  )
}

export default App
