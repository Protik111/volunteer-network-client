import React, { useState, useEffect } from 'react';
import '../AdminInfo/AdminInfo.css';
import photo from '../../logos/Group1329.png';
import GroupIcon from '@material-ui/icons/Group';
import AdminInfoStyle from '../AdminInfoStyle/AdminInfoStyle';

const AdminInfo = () => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('https://serene-tor-03619.herokuapp.com/showAllEvens')
            .then(res => res.json())
            .then(data => setEvent(data));
    }, [])
    return (
        <div>
            <div className="volunteer-container">
                <div className="col-md-2">
                    <img src={photo} alt="" />
                    <p style={{ color: 'deepskyblue', marginTop: '15px', marginLeft: '10px' }}><strong><GroupIcon></GroupIcon>Volunteer Lists</strong></p>
                </div>
                <div className="col-md-10">
                    <h5 style={{ marginLeft: '50px' }}><strong>Volunteer Register List</strong></h5>
                    <div className="list-name" style={{ display: 'flex' }}>
                        <h5>Name</h5>
                        <h5 className="email">Email</h5>
                        <h5 className="date">Date</h5>
                        <h5 className="description">Description</h5>
                        <h5 className="action">Action</h5>
                    </div>
                    {
                        event.map(ev => <AdminInfoStyle ev={ev}></AdminInfoStyle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminInfo;