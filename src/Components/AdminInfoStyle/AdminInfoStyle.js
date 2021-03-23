import React, { useEffect } from 'react';
import '../AdminInfoStyle/AdminInfoStyle.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';

const AdminInfoStyle = (props) => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/showAllEvens')
            .then(res => res.json())
            .then(data => setEvent(data));
    }, [])

    const {name, email, date, description} = props.ev;
    const handleDelete = (id) => {
        // console.log(description);
        fetch(`/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('deleted');
        })
    }
    return (
        <div>
            <ul className="list">
                <li><small>{name}</small></li>
                <li><small>{email}</small></li>
                <li><small>{date}</small></li>
                <li><small>{description}</small></li>
                <button onClick={handleDelete(event.id)} className="btn-dlt"><DeleteIcon></DeleteIcon></button>
            </ul>
        </div>
    );
};

export default AdminInfoStyle;