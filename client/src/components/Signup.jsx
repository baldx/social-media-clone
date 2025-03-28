import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { useEffect, useState } from 'react';
import axios from 'axios'; //package that simplifies fetching data from APIs and handling requests and responses

function Signup() { //bootstrap code for sign up
    const [username, setUserName] = useState("");//create variables with use state
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); //prevents default  re loading of page
        try {
          const response = await axios.post('http://localhost:5000/signup', { username, password }); //method sends HTTP post request to /signup endpoint to backend and sends the data username and password
          setMessage(response.data.message); //shows the user success message
        } catch (error) { //error handling
          setMessage('Error signing up');
        }
      };
    
    return (
        <div className="log-in-form">
            <div className="log-in-container">
                <h1>Sign up</h1>
                <small>To use our platform, we first need you to create an account!</small>
                <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} required/>
                <Form.Text className="text-muted">
                Your username will be displayed for other users to see!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3 TOS" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Agree to the TOS"  />
                <Form.Text><a href="../TOS" className="TOS-text">Teams of service</a></Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" >
                Sign up
            </Button>
            </Form>
            
            </div>
            {message && <p>{message}</p>}
        </div>

    )
}


export default Signup;