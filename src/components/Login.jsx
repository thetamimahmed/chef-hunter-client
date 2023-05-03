import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';

const Login = () => {
    const {logInUser} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('')

    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
        })
        .catch(error => {
            setErrorMessage(error.message)
        })
    }

    return (
        <div>
            <h3 className='text-center primary-color my-3'>Please Login Your Account</h3>
            <Form onSubmit={handleLogIn} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button className='custom-btn' variant="primary" type="submit">
                    Submit
                </Button>
                <p className='mt-2'>New in Italian Chef Hunter? <span><Link className='primary-color' to={"/register"}>Register</Link></span></p>
                <p className='mt-2fw-bold text-danger'>{errorMessage}</p>
            </Form>
        </div>
    );
};

export default Login;