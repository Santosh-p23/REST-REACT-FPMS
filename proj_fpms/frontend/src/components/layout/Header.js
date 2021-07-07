import React, { Component } from 'react'
import {Navbar, Form, FormControl, Button, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export class Header extends Component {

  static propTypes ={
    auth: PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired
  }

    render() {
      const { isAuthenticated, user} = this.props.auth
        return (
  <Navbar bg="light" expand="lg">
    <div className="container">

    <Navbar.Brand href="#">Paperclip</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation"/>
    <Navbar.Collapse id="basic-navbar-nav justify-content-end">

      { isAuthenticated ?(<Nav className="nav ">
       
         <Link to="/profile" className ="navbar nav-link " >Profile</Link>
         <button onClick={this.props.logout} className =" nav-link btn btn-primary">Log Out</button>
        
         </Nav>):(<Nav className="mr-auto">
         <Link to="/register" className ="nav-link">Register</Link>
         <Link to="/login" className ="nav-link">Login</Link>
         </Nav>)
     }
      
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
     
     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
     <NavDropdown.Divider />
     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown> */}
 
    <Form className="inline" >
      <FormControl type="text" placeholder="Search" style={{}} className="ml-auto-sm-2" />
    </Form>
      <Button variant="outline-primary ">Search</Button>

     </Navbar.Collapse>
    </div>
    </Navbar>
        )

        
  }
}


const mapStateToProps = state =>({
  auth : state.auth
})


export default connect(mapStateToProps,{logout})(Header)
