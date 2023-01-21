import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import withRouter from "./withRouter"

class UserAdd extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list:[],
      firstName: '',
      lastName: '',
      loginId: '',
      password: '',
      roleId: '',
      message: '',
      id: '',
      epassword: '',
      inputerror: {
        "firstName": "",
        "lastName": "",
        "loginId": "",
        "roleId": ""
      }
    }
    if (this.props.params.id) {
      this.get()
    }
  }
  get() {
    const url = "http://api.sunilos.com:9080/ORSP10/Auth/get/" + this.props.params.id;
    axios.get(url).then((response) => {
      this.setState({
        firstName: response.data.result.data.firstName,
        lastName: response.data.result.data.lastName,
        loginId: response.data.result.data.loginId,
        password: response.data.result.data.password,
        roleId: response.data.result.data.roleId,
        id: response.data.result.data.id
      });
    });
  }
  reset() {
    this.setState({
      firstName: '',
      lastName: '',
      loginId: '',
      password: '',
      roleId: '',
      message: '',
      data: '',
      epassword: '',
      inputerror: {
        "firstName": "",
        "lastName": "",
        "loginId": "",
        "roleId": ""
      }
    })
  }
  componentDidMount() {
    axios.post("http://api.sunilos.com:9080/ORSP10/Role/search", this.state).then((response) => {
      this.setState({ list: response.data.result.data })
      // console.log("response", response.data.result.data)
    })
  }
  submit(event) {
    event.preventDefault();
    this.setState({
      epassword: '',
      inputerror: {
        "firstName": "", "lastName": "", "loginId": "", "roleId": ""
      }
    })
    let url = "http://api.sunilos.com:9080/ORSP10/User/save";
    axios.post(url, this.state).then((response) => {
      if (response.data.result.inputerror && this.state.password === "") {
        this.setState({ inputerror: response.data.result.inputerror, epassword: 'must not be empty' })
      } if (response.data.result.inputerror) {
        this.setState({ inputerror: response.data.result.inputerror })
      } if (this.state.password === "") {
        this.setState({ epassword: 'must not be empty' })
      } else if (response.data.result.message === "loginId already exists") {
        this.props.showAlert("loginId already exists", "info")
      } else if (!response.data.success) {
        this.props.showAlert("Role id incorrect", "danger")
      } else {
        this.props.showAlert("UserId save successfully!!!", "success")
      }
    })
  }
  handleChange = (event) => {
    // console.log("event",event)
    this.setState({ roleId: event.target.value })
    // console.log("roll",this.state.roleId)
  }
  render() {
    return (
      <div>
        <section
          className="vh-100 bg-image"
          // style={{ backgroundImage: (require("../image/home.jpg")) }}
        >
          <div className="mask d-flex align-items-center h-50 gradient-custom-3">
            <div className="container h-50" style={{ width: "600px" }}>
              
              <div className="row d-flex justify-content-center align-items-center h-50">
                <div className="col-12 col-md-9 col-lg-8 col-xl-7">
                  
                  <div className="card" style={{ borderRadius: '30px', marginBottom: "100px" }}>
                  
                    <div className="card-body p-1">
                    <h3 className=" d-flex justify-content-center align-items-center">
                      {
                        localStorage.Name === null || localStorage.Name === undefined ? "SIGN-IN-USER" :
                          <p>{this.props.params.id ? "EDIT USER" : "ADD USER"}</p>
                      }
                    </h3>
                      <form >
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example1cg"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ firstName: event.target.value }) }}
                            name='firstName'
                            value={this.state.firstName}
                            placeholder="Enter first name"
                          />
                          <div style={{ color: "red" }}> <p>{this.state.inputerror.firstName}</p></div>
                        </div>
                        <div className="form-outline mb24">
                          <label
                            className="form-label"
                            htmlFor="form3Example2cg"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="form3Example2cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ lastName: event.target.value }) }}
                            name='lastName'
                            value={this.state.lastName}
                            required
                            placeholder="Enter last name"
                          />
                          <div style={{ color: "red" }}> <p>{this.state.inputerror.lastName}</p></div>
                        </div>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example3cg"
                          >
                            Email id
                          </label>
                          <input
                            type="email"
                            id="form3Example3cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ loginId: event.target.value }) }}
                            name="loginId"
                            value={this.state.loginId}
                            required
                            placeholder="Enter email id"
                          />
                          <div style={{ color: "red" }}> <p>{this.state.inputerror.loginId}</p></div>
                        </div>
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ password: event.target.value }) }}
                            name="password"
                            value={this.state.password}
                            placeholder="Enter password"
                          />
                          <div style={{ color: "red" }}> <p>{this.state.epassword}</p></div>
                        </div>
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="role1"
                          >
                            Role id
                          </label>
                          <select name="cars" id="cars" style={{ float: "right" }} onMouseEnter={(this.handleChange)}>
                            <option value="Please select Name">Name</option>
                            {
                              this.state.list &&
                              this.state.list.map((item) => {
                                return (
                                  <option value={item.id}>{item.name}</option>
                                )
                              })
                            }

                          </select>
                          <input
                            type="role"
                            id="role1"
                            className="form-control form-control-lg"
                            // onChange={(event) => { this.setState({ roleId: this.state.roll }) }}
                            name="roleId"
                            value={this.state.roleId}
                            placeholder="Enter roll id"
                          />
                          <div style={{ color: "red" }}> <p>{this.state.inputerror.roleId}</p></div>
                        </div>
                        <div className='row'>
                          <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <button
                              type="btn"
                              className="btn btn-success btn-block btn-md gradient-custom-4 text-body"

                              onClick={(event) => { this.submit(event) }}
                            >
                              {localStorage.Name === null || localStorage.Name === undefined ? <>Sign-In</> :
                                <>  {this.props.params.id ? "Update" : "AddUser"} </>
                              }
                            </button>
                          </div>
                          
                          <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <button
                              type="reset"
                              className="btn btn-primary btn-block btn-md gradient-custom-4 text-body "
                              onClick={() => { this.reset() }}
                            >
                              <>Reset</>
                            </button>
                          </div>
                        </div>
                        {
                          localStorage.Name === null || localStorage.Name === undefined ?
                            <div className="text-center text-muted mt-1 mb-0">
                              Have already an account?{" "}
                              <Link to="/login" className="fw-bold text-body">
                                <u>Login here</u>
                              </Link>
                            </div>
                            :
                            <p></p>
                        }

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default withRouter(UserAdd);