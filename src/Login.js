import React, { Component } from 'react';
import './Auth.module.css';
import Form from 'react-bootstrap/Form' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import fire from './firebase/fire';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
const Login=(props)=> {
        return(
            <div className='form'>
                <Form className='alert alert-dark'>
                    <h1>LOGIN</h1>
                    <div className='otherLoginMethod'>
                        <p>Login With</p>
                        <div>
                            <button onClick={props.loginWithGoogle}><i className="fab fa-google"></i></button>
                            <button onClick={props.loginWithFacebook}><i className="fab fa-facebook"></i></button>
                            <button onClick={props.loginWithGithub}><i className="fab fa-github"></i></button>
                        </div>
                    </div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={props.changeHandler} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={props.changeHandler} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={props.LoginBtnHandler} variant="dark" block size='lg' type="submit">
                        Login </Button>
                </Form>
                
                <p onClick={props.goToSignup} className='para'>Create a new account<Link to='/sign-up'> SignIn</Link></p>
                
            </div>
        );
}

export default Login;