import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../Registration/Registration.css';
import logo from '../../logos/Group1329.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}))

const Registration = () => {
    const classes = useStyles();
    return (
       <div>
           <div>
            <img className="img" src={logo} alt=""/>
           </div>
            <div className="input-info text-center">
                <h5><strong>Register as a Volunteer</strong></h5>
                <form className={classes.root} noValidate autoComplete="on">
                    <TextField style = {{width: 300}} className="text-field" id="standard-secondary" label="Full Name" color="secondary" />
                    <br/>
                    <TextField style = {{width: 300}} id="standard-secondary" label="Email" color="secondary" />
                    <br/>
                    <TextField style = {{width: 300}} id="standard-secondary" label="Date" color="secondary" />
                    <br/>
                    <TextField style = {{width: 300}} id="standard-secondary" label="Description" color="secondary" />
                    <br/>
                    <TextField style = {{width: 300}} id="standard-secondary" label="Organize Books at Library" color="secondary" />
                    <br/>
                    <input className="reg-btn" type="button" value="Registration"/>
                </form>
            </div>
       </div>
    );
};

export default Registration;