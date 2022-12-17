import axios from "axios";
import React, { Component } from "react";
// import * as ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
// import { createRoot } from "react-dom/client";
import Dashboard from "./Dashboard";
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginId: "",
      password: ""
    };
  }
  valid() {
    if (this.state.loginId === '' && this.state.password === "") {
      this.setState({ data: "Enter id & password" })
    } else if (this.state.loginId === '') {
      this.setState({ data: "Enter LoginId " })
    } else if (this.state.password === '') {
      this.setState({ data: "Enter Password " })
    } else { return true }
  }


  submit(event) {
    event.preventDefault();
    if (this.valid()) {
      this.setState({ data: "" })
      const url = "http://api.sunilos.com:9080/ORSP10/Auth/login"
      axios.post(url, this.state).then((response) => {
        console.log(response.data)
        if (response.data.success) {

          localStorage.setItem("Name", response.data.result.data.name)
          // alert("form has been submitted");
          // first way
          // return ReactDOM.render(
          //   <React.StrictMode>
          //     <Dashboard/>
          //   </React.StrictMode>,
          //   document.getElementById("root")
          // );

          //Second way


          const root = ReactDOM.createRoot(document.getElementById("root"));
          root.render(
            <React.StrictMode>
              <Dashboard />
            </React.StrictMode>
          );


          // third way
          // const root = createRoot("root");
          // root.render( <Dashboard />);


        } else { this.setState({ data: "Invalid ID or Password" }) }
      })
    }
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '80px', width: "30%", border: "1px solid gray", padding: "30px",borderRadius:"50px" }}>
        <h1 className="text-uppercase text-center mb-5">LOGIN FORM</h1>
        <form >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(event) => {
                this.setState({ loginId: event.target.value });
              }}
              name="loginId"
              value={this.state.loginId}
            />
          </div>&nbsp;
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
              name="password"
              value={this.state.password}
            />
          </div>
          <h3 style={{ color: "red", margin: "10px" }}>{this.state.data}</h3>
          &nbsp;
          <div className="d-flex justify-content-center mt-1">
            <button
              type="submit"
              onClick={(event) => this.submit(event)}
              className="btn btn-primary"
            >Submit
            </button>
          </div>


          <p className="text-center text-muted mt-5 mb-0">
            You have no an account?{" "}
            <Link to="/registration" className="fw-bold text-body">
              <u>Create an account</u>
            </Link>
          </p>
        </form>
      </div>
    );
  }
}
