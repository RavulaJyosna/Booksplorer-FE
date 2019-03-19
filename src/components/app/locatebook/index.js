import React from 'react';
import { createBrowserHistory as createHistory } from "history";
import NavBar from '../homepage/navbar/index';
import Tables from '../homepage/table/index';
import axios from "axios";
var body;
class Locatebook extends React.Component {
  
    state = {
        users: []
      };
      componentDidMount() {
        axios
          .get("http://10.10.200.19:9000/users")
          .then(response => {
            console.log(response)
            // create an array of contacts only with relevant data
      
            this.setState({users: response.data});
    
            // store the new state object in the component's state
            
          })
          .then(contents => {console.log("in fetch: "+ JSON.stringify(contents));
         
        })        
          .catch(error => console.log(error));
     }


  render() {
    console.log(this.state.users)
    return (
        <div>
        <NavBar/><br/><br/><br/><br/>
        
        <Tables books={this.state.users} />
        
        </div>

      );
    }
}


export default Locatebook;