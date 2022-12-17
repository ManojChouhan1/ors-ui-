import React, { Component } from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (

            <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav defaultActiveKey="/home" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link style={{textAlign: "center"}}>© RaysTech  Copyright: @2022-23 Sunil OS pvt ltd      </Nav.Link>
                            </Nav.Item>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        )
    }
}
