import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

var body;
class LoginNav extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
Logout() {
  body = { token: localStorage.getItem("AccessToken") }
  console.log(localStorage.getItem("AccessToken"))
        let token = localStorage.getItem("AccessToken");
  const url = "http://10.10.200.19:9000/users/signout";
  console.log(url)
  console.log(token);
  const AuthStr = 'Bearer '.concat(token);     
  let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

          headers.append('Authorization', AuthStr);
          console.log("Access Token"+AuthStr);

        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('PUT', 'GET');
        console.log("1")  
        console.log(JSON.stringify(body))
        fetch(url, {
            headers: headers,
            method: 'PUT',
            body :JSON.stringify(body)
        })
       localStorage.removeItem("AccessToken")
       this.props.history.push('/')
      
        .then(response =>{ })
        .then(contents => {     })
         .catch(() => console.log("Can’t access " + url + " response. "))          
}

render() {
  return (
    <MDBNavbar color="default-color" dark expand="md">
      <MDBNavbarBrand>
       <h3> <strong className="white-text">Booksplorer</strong></h3>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
      <MDBNavbarNav right>
      
          <MDBNavItem>
           <h5> <MDBNavLink to="/sellbook">Sell A Book</MDBNavLink></h5>
          </MDBNavItem>
        
          <MDBNavItem>
           
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
               <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="/profile">View Profile</MDBDropdownItem>
                <MDBDropdownItem href="#!">View Orders</MDBDropdownItem>
                <MDBDropdownItem href="/" onClick={this.Logout}>Logout</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
          <MDBNavItem>
        
          </MDBNavItem>
        
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default LoginNav;