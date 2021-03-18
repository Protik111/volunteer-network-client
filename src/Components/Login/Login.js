import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FcGoogle } from 'react-icons/fc';
import '../Login/Login.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Group1329.png';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: ''
    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result);
                const {displayName, email} = result.user;
                const newUserInfo = {name: displayName, email};
                // // const newUserInfo = {...user};
                // setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }
    return (
        <div className="google">
            <div className="login-img">
            <img src={logo} alt=""/>
            </div>
            <div className="login-title">
                <h5><strong>Login With</strong></h5>
                <button onClick={handleGoogleSignIn}><FcGoogle></FcGoogle> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;