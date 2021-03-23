import React from 'react';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registration from './Components/Registration/Registration';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import UserInfo from './Components/UserInfo/UserInfo';
import AdminInfo from './Components/AdminInfo/AdminInfo';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/registration/:id">
            <Registration></Registration>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/usersInfo">
            <UserInfo></UserInfo>
          </Route>
        </Switch>
        <Route path="/showAdmin">
          <AdminInfo></AdminInfo>
        </Route>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
