import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photourl.value;

        setErrorMessage('')
        if(password.length < 6){
            setErrorMessage('Provide 6 character password')
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset()
                //user profile update
                updateProfile(loggedUser, {
                    displayName: name, photoURL: photoUrl
                })
                .then(() => {
                    
                  })
                  .catch((error) => {
                    
                  });
                  setSuccess(toast('Register Successfull'))
            })
            .catch(error => {
                // setErrorMessage(error.message)
            })

    }

    return (
        <div>
            <h3 className='text-center my-3 primary-color'>Please Register Your Account</h3>
            <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotourl">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name='photourl' placeholder="Enter photo url" required />
                </Form.Group>
                <Button className='custom-btn' variant="primary" type="submit">
                    Submit
                </Button>
                <p className='mt-2'>Already have an account? <span><Link className='primary-color' to={"/login"}>Log In</Link></span></p>
                <p className='mt-2fw-bold text-danger'>{errorMessage}</p>
            </Form>
            <ToastContainer/>
        </div>
    );
};

export default Register;