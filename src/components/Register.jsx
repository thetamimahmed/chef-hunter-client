import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3 className='text-center my-3 primary-color'>Please Register Your Account</h3>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name='photourl' placeholder="Enter photo url" required />
                </Form.Group>
                <Button className='custom-btn' variant="primary" type="submit">
                    Submit
                </Button>
                <p className='mt-2'>Already have an account? <span><Link className='primary-color' to={"/login"}>Log In</Link></span></p>
            </Form>
        </div>
    );
};

export default Register;