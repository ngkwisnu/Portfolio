import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './tailwind.css'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'
import MobileView from './component/MobileView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='hidden lg:block'>
        <Header/>
        <Main/>
        <Footer/>
      </div>
      <div className='block lg:hidden'>
        <MobileView/>
      </div>
    </>
  )
}

export default App
