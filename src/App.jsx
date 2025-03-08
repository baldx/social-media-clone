import { useState } from 'react'
import LandingPage from './components/Landingpage'
import Navbar from './components/Navbar'
import LogIn from './components/Login';
import Signup from './components/Signup';
import './App.css'


function App() {
  const status = ["notSignedUp", "notLoggedIn", "Logged in"]
  const [login, setLogin] = useState(status[0]);

  if (login === status[2]) {
    return (
      <>
        <Navbar/>
        <LandingPage/>
        <aside></aside>
      </>
      )
  } else if (login === status[1]) {
    return (
      <>
        <LogIn />
      </>
    )
  }
  else if (login === status[0]) {
    return (
      <>
        <Signup />
      </>
    )
  }

}

export default App
