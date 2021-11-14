import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menu.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Menu = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" className="border bg-color" >
                <Container>
                    <Navbar.Brand className="fw-bold"> <p className="fw-bold fs-3"> AmarGhori</p> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fs-5 ">
                            <Nav.Link as={Link} to='/home' className="p-3 text-dark">Home</Nav.Link>
                            <Nav.Link as={Link} to='/explore' className="p-3 text-dark" >Explore</Nav.Link>



                            {
                                user.email ?
                                    <div className="admin">

                                        <Nav.Link as={Link} to='/dashboard' className="p-3 text-dark">Dashboard</Nav.Link>

                                        <button onClick={logout}>Logout</button>
                                    </div>

                                    :
                                    <Nav.Link as={Link} to='/login' className="ps-3 pt-3 text-dark  " ><i classname="fas fa-user"></i> Login</Nav.Link>
                            }

                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;