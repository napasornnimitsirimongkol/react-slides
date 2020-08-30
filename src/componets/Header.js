/*
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/">หน้าหลัก</Link>
                <Link to="About/">เกี่ยวกับเรา</Link>
                <Link to="Product/">สินค้า</Link>
                <Link to="Contact/">ติดต่อเรา</Link>
                <Link to="Profile/">ข้อมูลส่วนตัว</Link>
            </div>
        )
    }
} 
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="success" dark expand="md">
        <NavbarBrand tag={Link}to="/">napasorn</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link}to="/about">เกี่ยวกับเรา</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link}to="/contact">ติดต่อเรา</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link}to="/products">สินค้า</NavLink>
            </NavItem>
            
          
          </Nav>
          <Nav className="ml-auto" navbar>
            
              <NavItem>
              <NavLink tag={Link}to="/profile">ข้อมูลส่วนตัว</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link}to="/profile">เข้าระบบ</NavLink>
            </NavItem>
            <NavItem>
            <NavLink tag={Link}to="/profile">สมัครสมาชิก</NavLink>
            </NavItem>
            </Nav>
            
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;