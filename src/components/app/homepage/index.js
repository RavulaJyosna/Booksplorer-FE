 import React from "react";
import NavBar from './navbar/index';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import "./home.css"
import Center from 'react-center';
import Search from "../homepage/search";
import Footer from "../footer";
//import Footer from "../footer";
const Homepage = () => {

  return (
   <div> 
      <NavBar/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div class="container mt-5">
    <Search/>
    </div>
   <div class="footer">
   <Footer/>
   </div>
   </div>
   
     
  );
};

export default Homepage;