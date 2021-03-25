import React from 'react';
import { Nav, Button, Form, FormControl } from 'react-bootstrap';
import '../Header/Header.css';
import logo from '../../logos/Group1329.png';
import { Link } from 'react-router-dom';
// import fakeData from '../FakeData/FakeData.json';

const Header = () => {
    //inserting bulk data to Db
    const handleEvent = () =>{
        fetch('https://serene-tor-03619.herokuapp.com/sendEventToDb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }
    return (
        <>
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
                <Nav.Item className="menu-btn">
                    <Button variant="primary">Registor</Button>
                    <Link to="/showAdmin">
                        <Button variant="dark">Admin</Button>
                    </Link>
                </Nav.Item>
            </Nav>
        </div>
        <div className="title-search text-center">
            <h2 style={{marginTop: '50px'}}><strong>I GROW BY HELPING PEOPLE IN NEED</strong></h2>
            <Form inline className="justify-content-center" style={{marginTop: '20px'}}>
                <FormControl style={{width: '300px'}} type="text" placeholder="Search" className="mr-sm-0" />
                <Button type="submit">Search</Button>
            </Form>
        </div>
        </>
    );
};

export default Header;