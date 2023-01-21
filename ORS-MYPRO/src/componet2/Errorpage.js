import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Errorpage extends Component {
    render() {
        return (
            <div style={{ marginTop: "200px", textAlign: "center" }}>
                <h1>404 Error</h1>
                <h1>Page Not Found</h1>
                <p>You have Enterd wrong url Click here go to Home.:-  <Link to="/">Go to Home</Link> </p>
            </div>
        )
    }
}
