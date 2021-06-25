import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from "./components/Home/Home";
import AddBlog from "./components/Admin/AddBlog/AddBlog";
import Login from './components/Login/Login'
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

 <Router>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/addBlog">
            <AddBlog/>
          </Route>
          <Route path="/addAdmin">
             <AddAdmin/>
          </Route>
          <Route path="/login">
             <Login/>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
