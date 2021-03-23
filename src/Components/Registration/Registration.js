import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../Registration/Registration.css';
import logo from '../../logos/Group1329.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import data from '../FakeData/FakeData.json';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}))

const Registration = () => {

    // const [users, setUsers] = useState(
    //  {
    //   name: '',
    //   email: '',
    //   date: '',
    //   description: '',
    //   books: ''
    // }
    // )

    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const [items] = useState(data);
    const [item, setItem] = useState([]);

    useEffect(() => {
      const newItem = items.find(it => it.id === parseInt(id));
      setItem(newItem);
    }, [])

    // const n = new Date();
    // const y = n.getFullYear();
    // const m = n.getMonth() + 1;
    // const d = n.getDate();
    // const currentDate = d + "/" + m + "/" + y;
    
    const [date, setDate] = useState(new Date());

    const { handleSubmit } = useForm();
    const [value, setValue] = useState("");
    const handleChange = (e) => {
      setValue(e.target.value);
    };

    const handleEvent = () => {
      const newUser = {
        name: loggedInUser.name,
        email: loggedInUser.email,
        date: date,
        description: item.name,
      }
      // const newUser = {...users};
      // newUser[e.target.name] = e.target.value;
      // setUsers(newUser);
      fetch('http://localhost:5000/sendEvent', {
        method : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
    }
    return (
       <div>
           <div>
            <img className="img" src={logo} alt=""/>
           </div>
            <div className="input-info text-center">
                <h5><strong>Register as a Volunteer</strong></h5>
                <form className={classes.root} noValidate autoComplete="on">
                    <TextField  style = {{width: 300}} className="text-field" name="name" id="standard-secondary" label="Full Name" color="secondary" value={loggedInUser.name} />
                    <br/>
                    <TextField style = {{width: 300}} id="standard-secondary" name="email" label="Email" color="secondary" value={loggedInUser.email} />
                    <br/>
                    <TextField style = {{width: 300}} id="standard-secondary" name="date" label="Date" color="secondary" value={date.toDateString()}/>
                    <br/>
                    <TextField onChange={handleChange} style = {{width: 300}} id="standard-secondary" name="description" value={item.name} label="Description" color="secondary" />  
                </form>
                <Link to={`/usersInfo`}>
                      <input onClick={handleEvent} className="reg-btn" type="submit" value="Registration"/>
                </Link>
            </div>
       </div>
    );
};

export default Registration;