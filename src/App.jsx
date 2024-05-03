import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './tailwind.css'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
