import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';

function LogIn() { //component for the form input from bootstrap
    
    return (
        <div className="log-in-form">
            <div className="log-in-container">
                <h1>Log in</h1>
                <small>To use our platform, we first need you to log in!</small>
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
                <Button variant="primary" type="submit" onClick={e => {e.preventDefault()}}>
                    Log in
                </Button>
                </Form>
            </div>
        </div>

    )
}


export default LogIn;