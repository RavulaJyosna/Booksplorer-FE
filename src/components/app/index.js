import React from "react";
import Background from './background/index';
import Homepage from './homepage/index';
import Login from './login/index';
import Register from './register/index';
import SearchDetails from './searchDetails/index'
import ViewBook from './viewbook/index';
import LoginNav from './homepage/loginnav/index'
import SellBook from './homepage/sellbook/index';
import Profile from './profile/index';
import AboutUs from './aboutus/index';
import Reachout from "./homepage/reachout";


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'



class App extends React.Component{
    state = {
        tableValues : []
    }

    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/viewbook" component={ViewBook}/>
                <Route exact path="/aboutus" component={AboutUs}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/search" component={SearchDetails}/>
                <Route exact path="/background" component={Background}/>
                <Route exact path="/loggedin" component={LoginNav}/>
                <Route exact path="/sellbook" component={SellBook}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/reachout" component={Reachout}/>
                <Redirect to="/" component={Homepage}/>
                </Switch>
             </Router>

        );

    }
} 




export default App;   