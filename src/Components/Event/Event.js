import React from 'react';
import '../Event/Event.css';
import { Link } from 'react-router-dom';

const Event = (props) => {
    const {id, name, img} = props.event;
    const color = props.colors;
    const sectionStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        height: '240px',
        margin: '0 20px',
        marginTop: '15px',
        borderRadius: '5px'
    }
    const titleStyle = {
        background: `${color}`,
        backgroundSize: 'cover',
        width: '150px',
        height: '60px',
        padding: '15px',
        borderRadius: '10px'
    }
    return (
        <Link to ="/registration">
            <div className="root-container justify-content-center">
                <div className="col-md-2 event-container" style={sectionStyle}>
                    <div className="title2 event-container2">
                        <h6 style={titleStyle}>{name}</h6>
                    </div>
                </div>
            </div>
        </Link>
       
    );
};

export default Event;