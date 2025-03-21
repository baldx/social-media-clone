import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';

function Signup() { //bootstrap code for sign up
    
    return (
        <div className="log-in-form">
            <div className="log-in-container">
                <h1>Sign up</h1>
                <small>To use our platform, we first need you to create an account!</small>
                <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                <Form.Text className="text-muted">
                Your username will be displayed for other users to see!
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3 TOS" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Agree to the TOS"  />
                <Form.Text><a href="../TOS" className="TOS-text">Teams of service</a></Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={e => {e.preventDefault()}}>
                Sign up
            </Button>
            </Form>
            </div>
        </div>

    )
}


export default Signup;