import { useState } from 'react'
import './App.css'
import LandingPage from './components/Landingpage'
import Navbar from './components/Navbar'
import LogIn from './components/Login';

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Navbar/>
        <LandingPage/>
        <aside></aside>
      </>
      )
  } else {
    return (
      <>
        <LogIn />
      </>
    )
  }

}

export default App
