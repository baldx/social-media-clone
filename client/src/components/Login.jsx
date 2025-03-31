import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogIn() { //component for the form input from bootstrap
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
          const response = await axios.post('http://localhost:5000/login', { username, password }); //method sends HTTP post request to /signup endpoint to backend and sends the data username and password
          setMessage(response.data.message); //shows the user success message
          console.log(response);

          if (response.status === 201) {
            setTimeout(() => navigate('/feed'), 5000); //route user after 5 seconds to main page
            localStorage.setItem("user", JSON.stringify({ username })); //store user information in local storage
          } 
          
        } catch (error) { //error handling
            console.log(error);
            
          if (error.response) {
            setMessage(error.response.data.message);
          } else {
            setMessage("Error logging in")
          }
          
        }
      };

    return (
        <div className="log-in-form">
            <div className='status-message'>{message}</div>
            <div className="log-in-container">
                <h1>Log in</h1>
                <small>To use our platform, we first need you to log in!</small>
                    <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} required minLength={3} maxLength={15} />
                    <Form.Text className="text-muted">
                    Your username will be displayed for other users to see!
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required minLength={8} maxLength={30}/>
                    <Form.Text>Dont have an account? <Link to={"/signup"}>Sign up here</Link></Form.Text>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Log in
                </Button>
                </Form>
            </div>
        </div>

    )
}


export default LogIn;