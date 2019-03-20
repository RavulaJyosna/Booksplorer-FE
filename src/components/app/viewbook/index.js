import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Cards from "../card/index";
import axios from "axios";
import "../homepage/Book.css";
import CondNav from "../condnav";

class ViewBook extends React.Component {
    state = {
        books: []
      };
    
    componentDidMount() {
        axios
          .get("http://10.10.200.19:9000/books")
          .then(response => {
            console.log(response)
            // create an array of contacts only with relevant data
            localStorage.getItem('token', response.data.token)
      
            this.setState({books: response.data});
    
            // store the new state object in the component's state
            
          })
          .then(contents => {console.log("in fetch: "+ JSON.stringify(contents));
         
        })        
          .catch(error => console.log(error));
     }
    


    render(){
      console.log(this.state.books)
      return(
          <div>
        <CondNav/><br/><br/><br/><br/>
        
        <Cards books={this.state.books} />
        
        </div>
      );
    }
       
}
export default ViewBook;