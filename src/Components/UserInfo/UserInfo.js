import React, { useState, useEffect } from 'react';
import { Nav, Button, Form, FormControl } from 'react-bootstrap';
import '../Header/Header.css';
import logo from '../../logos/Group1329.png';
import { UserContext } from '../../App';
import { useContext } from 'react';
import '../UserInfo/UserInfo.css';
import UserInfoStyle from '../UserInfoStyle/UserInfoStyle';

const UserInfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/showEvent?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setEvent(data));
    }, [])
    return (
        <div className="container-root">
            <div className="col-md-12">
                <Nav className="justify-content-end" id="menu" activeKey="/home">
                        <div className="col-md-6">
                            <img className="d-inline-block align-top" src={logo} alt=""/>
                        </div>
                    <Nav.Item>
                        <Nav.Link className="link" href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link" eventKey="link-1">Donations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link" eventKey="link-2">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link" eventKey="link-2">Blogs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="loggedName">
                        <p><strong>{loggedInUser.name}</strong></p>
                    </Nav.Item>
                </Nav>
            </div>
            <div className="userContainer">
                {
                    event.map(evnt => <UserInfoStyle evnt={evnt}></UserInfoStyle>)
                }
            </div>
        </div>
    );
};

export default UserInfo;