import { useState } from 'react'
import './App.css'
import Login from './pages/login/login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='p-4 h-screen flex flex-col items-center justify-center'>

    {/* <Login/> */}
    
    {/* <Signup/> */}

    <Home/>

   </div>
  )
}

export default App
 