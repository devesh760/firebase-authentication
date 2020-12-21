import React, { Component } from 'react';
import './Auth.module.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import fire from './firebase/fire';
import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
class Auth extends Component {
    state = {
        email: '',
        password: ''
    }
    changeHandler = (e) => {
        e.preventDefault();
        this.setState({ [e.target.type]: e.target.value })
    }
    SignupBtnHandler = (e) => {
        e.preventDefault();
        console.log(this.state.email, this.state.password);
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log('success' + user);
                window.location ='/';
            }).catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (
            <div className='form'>
                <Form className='alert alert-dark'>
                    <h1>SIGNUP</h1>
                    <Form.Group>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type='text' placeholder='Your Name' />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={this.changeHandler} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.changeHandler} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Keep me loged in" />
                    </Form.Group>
                        <Button onClick={this.SignupBtnHandler} variant="dark" block size='lg' type="submit">
                            create a new Account </Button>
                    
                </Form>
                <p onClick={this.goToSignup} className='para'>Create a new account <Link to='/'> Login</Link></p>
            </div>
        );
    }
}

export default Auth;