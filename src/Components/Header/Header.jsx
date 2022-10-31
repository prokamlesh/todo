import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
  } from 'reactstrap';
  import { Link } from "react-router-dom";

const Header = () => {
    
    return(
        <div>
            
            <h1>LOGO</h1>
          
            
            <Navbar>
        
          
            <NavItem>
              <Link className="link"
        to="/home">HOME</Link>
            </NavItem>
            <NavItem>
              <Link className="link"
<<<<<<< HEAD
        to="/task">
=======
        to="/task
       ">
>>>>>>> 35d4708c0ac3347a46ceb50aeffe2a679312e1fc
                TASK
              </Link>
            </NavItem>
            <NavItem>
              <Link className="link"
        to="/user">USER</Link>
            </NavItem>
            
          
          
        
      </Navbar>
        </div>
    );
    
}
export default Header;
