import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './customer/components/Navigation/Navigation'
import Homepage from './customer/components/Pages/Homepage'

function App() {
  

  return (
    <>
     <Navigation/>
     <div>
      <Homepage/>
     </div>
    </>
  )
}

export default App
