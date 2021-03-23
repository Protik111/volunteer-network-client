import React from 'react';
import photo from '../../extraVolunteer.png';
import '../UserInfoStyle/UserInfoStyle.css';
import { Button } from 'react-bootstrap';

const UserInfoStyle = (props) => {
    const {id, date, description} = props.evnt;
    return (
        <div className="root-style">
            {/* <div>
                <img src={photo} alt=""/>
            </div> */}
            <div className="col-md-3 single-container">
                <h6><strong>{description}</strong></h6>
                <p><small><strong>{date}</strong></small></p>
                <Button className="cancel-btn" variant="danger">Cancel</Button>
            </div>
        </div>
    );
};

export default UserInfoStyle;