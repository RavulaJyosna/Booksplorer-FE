import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';



export default class NavBar extends React.Component  {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div class="container">
      <div class="row">
          <Navbar color="dark" fixed="top" dark expand="md" scrolling dark>
          <div class="col">
          <NavbarBrand href="/" style={{ fontstyle : "italic"}}>Booksplorer</NavbarBrand>
          </div>
          
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto">
          
          <NavItem>
          <NavbarBrand href="/aboutus" >About Us</NavbarBrand>
          <NavbarBrand href="/viewbook" >ViewBook</NavbarBrand>
          
          <NavbarBrand href="/reachout" >Reach Out!</NavbarBrand>
          <NavbarBrand href="/login" >Login</NavbarBrand>
          
          </NavItem>
          
          </Nav>    
          </Collapse>
         
          </Navbar>
          
        </div>
    </div>
    );
  }
}