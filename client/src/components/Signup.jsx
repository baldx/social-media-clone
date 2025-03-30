import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { useEffect, useState } from 'react';
import axios from 'axios'; //package that simplifies fetching data from APIs and handling requests and responses
import { useNavigate } from 'react-router-dom';


function Signup() { //bootstrap code for sign up
    const [username, setUserName] = useState("");//create variables with use state
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); //used for redirecting user

  useEffect(() => { //redirects user when page started if user has already visited the page. //? same code for when doing log in page
    const user = localStorage.getItem("user"); //creates a variable in localstorage
    if (user) navigate("/feed"); //navigates if user returns 
  },[navigate]);


    const handleSubmit = async (e) => {
        e.preventDefault(); //prevents default  re loading of page
        try {
          const response = await axios.post('http://localhost:5000/signup', { username, password }); //method sends HTTP post request to /signup endpoint to backend and sends the data username and password
          setMessage(response.data.message); //shows the user success message
          console.log(response);

          if (response.status === 201) {
            setTimeout(() => navigate('/feed'), 5000); //route user after 5 seconds to main page
            localStorage.setItem("user", JSON.stringify({ username })); //store user information in local storage
          }
          
        } catch (error) { //error handling
          if (error.status === 409) { //
            setMessage('Username already taken. Try another username!') //display error message if username taken
          } else {
            setMessage(`Error signing up, status code ${error.status}`);
            
          }
          
        }
      };
    
    return (
        <div className="log-in-form">
          <div className='status-message'>{message}</div>
            <div className="log-in-container">
                <h1>Sign up</h1>
                <small>To use our platform, we first need you to create an account!</small>
                <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} required minLength={3} maxLength={15}/>
                <Form.Text className="text-muted">
                Your username will be displayed for other users to see!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required minLength={8} maxLength={30}/>
            </Form.Group>
            <Form.Group className="mb-3 TOS" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Agree to the TOS" required/>
                <Form.Text><a href="../TOS" className="TOS-text">Teams of service</a></Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" >
                Sign up
            </Button>
            </Form>
            
            </div>
        </div>

    )
}


export default Signup;