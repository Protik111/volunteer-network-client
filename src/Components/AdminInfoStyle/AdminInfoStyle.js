import React, { useEffect } from 'react';
import '../AdminInfoStyle/AdminInfoStyle.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';

const AdminInfoStyle = (props) => {
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('https://serene-tor-03619.herokuapp.com/showAllEvens')
            .then(res => res.json())
            .then(data => setEvent(data));
    }, [])

    const {_id, name, email, date, description} = props.ev;
    // // const newId = id.toString();
    // console.log(_id, name);
    const handleDelete = () => {
        // console.log(id);
        fetch(`/delete/${_id}`, {
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
                <button onClick={handleDelete} className="btn-dlt"><DeleteIcon></DeleteIcon></button>
            </ul>
        </div>
    );
};

export default AdminInfoStyle;