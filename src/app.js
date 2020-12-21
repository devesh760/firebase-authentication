import React, { Component } from 'react';
import fire from './firebase/fire'
import  './app.module.css';
import Home from './Home';
import Login from './Login';
import {Route,Link} from 'react-router-dom';
import SignUp from './Signup'
import firebase from 'firebase';
class app extends Component {
    state = {
        user:{},
        userName:'',
        userImagePath:''
    }

    LoginBtnHandler = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log('success' + user);
            }).catch((err) => {
                console.log(err);
            })
    }
    loginWithGoogle = (e) => {
        e.preventDefault();
        let GoogleProvider = new firebase.auth.GoogleAuthProvider();
        fire.auth().signInWithPopup(GoogleProvider).then((result) => {
            console.log(result.user);
            this.setState({
                userName:result.user.displayName,
                userImagePath:result.user.photoURL
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    loginWithGithub = (e) => {
        e.preventDefault();
        let GithubProvider = new firebase.auth.GithubAuthProvider();
        fire.auth().signInWithPopup(GithubProvider).then((result) => {
            console.log(result.user);
        }).catch((err) => {
            console.log(err);
        })
    }
    loginWithFacebook = (e) => {
        e.preventDefault();
        let facebookProvider = new firebase.auth.FacebookAuthProvider();
        fire.auth().signInWithPopup(facebookProvider).then((result) => {
            console.log(result.user);
            this.setState({
                userName: result.user.displayName,
                userImagePath:result.user.photoURL
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    componentDidMount(){
        this.authorizedorNot();
    }
    authorizedorNot(){
        fire.auth().onAuthStateChanged((user)=>{
            console.log(user);
            if(user){
                this.setState({user})
                this.setState({
                    userName: user.displayName,
                    userImagePath: user.photoURL
                })
            }
            else{
                this.setState({user:null})
            }
        })
    }
    render(){
        let ToDisplay =null;
        if(this.state.user){
            ToDisplay = <Route render={()=><Home imgSrc={this.state.userImagePath} name={this.state.userName}/>} exact path='/' />
        }
        else{
            ToDisplay = <Route render={()=><Login loginWithFacebook={this.loginWithFacebook} loginWithGithub={this.loginWithGithub} loginWithGoogle={this.loginWithGoogle} LoginBtnHandler={this.LoginBtnHandler} />} exact path='/' />
        }
        return(
            <div className='app'>
                {ToDisplay}
                <Route component={SignUp} path='/Sign-up'/>
            </div>
        );
    }
}
export default app;