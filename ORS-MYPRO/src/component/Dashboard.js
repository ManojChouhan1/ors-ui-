import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLockOpen, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons'
export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            mode: 'light'
        }
    }
    handleMode = () => {
        if (this.state.mode === "light") {
            this.setState({ mode: "dark" })
            document.body.style.background = "rgb(5 17 34)";
            document.body.style.color = "#636464";
            // document.getElementById('ta').style.color = "white"
           
           
        } else {
            this.setState({ mode: "light" })
            document.body.style.background = "#e9ecef";
            document.body.style.color = "black";
            // document.getElementById('ta').style.color = "black"
        }
    }
    logout() {
        window.localStorage.clear();
        window.location.pathname = "/login";
    }
    render() {
        const Nam = localStorage.getItem("Name"); //
        // console.log("GetItem", Nam);  
        return (
            <div className='App'>

                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Container>
                        <img src={require("../image/Logo.jpg")} alt="..." width="100" height="50" style={{ borderRadius: "12px", marginLeft: "-55px", marginRight: "30px" }} />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">


                            {!Nam ?
                                <Nav className="me-auto">
                                    <Nav defaultActiveKey="/home" as="ul">
                                        <Nav.Item as="li">
                                            <Nav.Link ><Link to="/adduser"><FontAwesomeIcon icon={faUser} style={{ color: "blue", fontSize: "20px", marginLeft: "20px", textDecoration: "none" }} />Registration</Link></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Nav defaultActiveKey="/home" as="ul">
                                        <Nav.Item as="li">
                                            <Nav.Link  ><Link  to="/login"><FontAwesomeIcon icon={faSignIn} style={{ color: "blue", fontSize: "20px", marginLeft: "20px" }} />Login</Link></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Nav>
                                :

                                <Nav className="me-auto">


                                    <Nav defaultActiveKey="/home" as="ul">
                                        <Nav.Item as="li">
                                            <Nav.Link ><Link to="/"><FontAwesomeIcon icon={faHome} style={{ color: "blue", fontSize: "20px", marginLeft: "20px" }} /></Link></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <NavDropdown title="User" id="basic-nav-dropdown">
                                        <NavDropdown.Item >  <Link to="/adduser">Add User</Link> </NavDropdown.Item>
                                        <NavDropdown.Item ><Link to="/userlist">User List</Link> </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Student" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link to="/addstudent">Add Student</Link></NavDropdown.Item>
                                        <NavDropdown.Item > <Link to="/studentlist">Student List</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="College" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link to="/addcollege">Add College</Link></NavDropdown.Item>
                                        <NavDropdown.Item > <Link to="/collegelist">College List</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Marksheet" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link to="/addmark">Add Marksheet</Link></NavDropdown.Item>
                                        <NavDropdown.Item > <Link to='/marklist'>Marksheet List</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Role" id="basic-nav-dropdown">
                                        <NavDropdown.Item ><Link to="/addrole">Add Role</Link></NavDropdown.Item>
                                        <NavDropdown.Item > <Link to="/rolelist">Role List</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title={localStorage.Name} id="basic-nav-dropdown">
                                        <NavDropdown.Item > {localStorage.Name}</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Logout" id="basic-nav-dropdown">
                                        <NavDropdown.Item  ><button onClick={() => { this.logout() }}> {<FontAwesomeIcon icon={faLockOpen} style={{ color: 'blue' }} />}Logout</button></NavDropdown.Item>
                                        {/* <NavDropdown.Item  >{name && (
                                                <Link to="/login" onClick={() => { window.location.href = "/login" }} >
                                                    <button className="btn btn-success logout-button" onClick={() => { this.logout() }} >Logout</button>
                                                </Link>
                                            )}</NavDropdown.Item> */}
                                    </NavDropdown>



                                </Nav>
                            }
                            <div className="form-check form-switch form-check-reverse">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.handleMode} />
                                <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">{this.state.mode.charAt(0).toUpperCase() + this.state.mode.slice(1)}Mode</label>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        )
    }
}
