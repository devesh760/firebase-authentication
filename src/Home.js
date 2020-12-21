import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import './app.module.css';
import fire from './firebase/fire';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    signOutHandler = ()=>{
        fire.auth().signOut();
    }
    render() { 
        return (
            <div className='Home'>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        <img style={{width:'100px',height:'100px'}} src={this.props.imgSrc} />
                        <p>{this.props.name}</p>
                    </p>
                    <p>
                        <Button variant="dark" >Learn more</Button>
                        <Button onClick={this.signOutHandler} variant="outline-dark" >Log out</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}
 
export default Home;