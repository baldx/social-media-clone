import { useState } from 'react'
import LandingPage from './components/Landingpage'
import Navbar from './components/Navbar'
import LogIn from './components/Login';
import Signup from './components/Signup';
import './App.css'


function App() {
  const status = ["notSignedUp", "notLoggedIn", "Logged in"]; // options to display different parts of the webbpage
  const [login, setLogin] = useState(status[2]); //sets the status if user is logged in

  if (login === status[2]) { //if user is logged in display the page
    return (
      <>
        <Navbar/>
        <LandingPage/>
        <aside></aside>
      </>
      )
  } else if (login === status[1]) { //if not logged in display login page
    return (
      <>
        <LogIn />
      </>
    )
  }
  else if (login === status[0]) { //if not signed up then display sign up page
    return (
      <>
        <Signup />
      </>
    )
  }

}

export default App
