import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav,Navbar,  NavDropdown } from 'react-bootstrap';
import ReactDOM from "react-dom/client";
import App from '../App';
import Home from './Home';
import UserAdd from '../componet2/UserAdd';
import UserList from '../componet2/UserList';
import AddMarksheet from '../componet2/AddMarksheet';
import MarksheetList from '../componet2/MarksheetList';
import AddStudent from '../componet2/AddStudent';
import StudentList from '../componet2/StudentList';
import AddRole from '../componet2/AddRole';
import RollList from '../componet2/RollList';
import AddCollege from '../college/AddCollege';
import CollegeList from '../college/CollegeList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLockOpen, } from '@fortawesome/free-solid-svg-icons'
import Footer from '../componet2/Footer';
import Welcome from './Welcome';
export default class Dashboard extends Component {
   
    logout() {
        localStorage.clear();
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );

    }
    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                        <Container>
                            <img src={require("../image/Logo.jpg")} alt="..." width="100" height="50" style={{ borderRadius: "12px", marginLeft: "-55px", marginRight: "30px" }} />

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
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
                                    <NavDropdown title={<FontAwesomeIcon icon={faLockOpen} style={{ color: 'blue' }} />} id="basic-nav-dropdown">
                                        <NavDropdown.Item  ><button onClick={() => { this.logout() }}>Logout </button></NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                 
                    <Routes>
                        <Route exact path='/' element={<Home />} />

                        <Route path='/adduser' element={<UserAdd />} />
                        <Route path='/addmark' element={<AddMarksheet />} />
                        <Route path='/addstudent' element={<AddStudent name={"manoj"} />} />
                        <Route path='/addrole' element={<AddRole />} />
                        <Route path='/addcollege' element={<AddCollege />} />

                        <Route path='/userlist/' element={<UserList />} />
                        <Route path='/marklist' element={<MarksheetList />} />
                        <Route path='/studentlist' element={<StudentList />} />
                        <Route path='/rolelist' element={<RollList />} />
                        <Route path='/collegelist' element={<CollegeList />} />

                        <Route path='/adduser/:id' element={<UserAdd />} />
                        <Route path='/addmark/:id' element={<AddMarksheet />} />
                        <Route path='/addstudent/:id' element={<AddStudent />} />
                        <Route path='/addrole/:id' element={<AddRole />} />
                        <Route path='/addcollege/:id' element={<AddCollege />} />

                        <Route Component={Welcome } />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}
