import axios from 'axios';
import React, { Component } from 'react'
import withRouter from './withRouter';

class AddRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      name: '',
      discription: '',
      id: ""
    }
    if (this.props.params.id) {
      this.get();
    }
  }
  get() {
    const url = "http://api.sunilos.com:9080/ORSP10/Role/get/" + this.props.params.id;
    axios.get(url).then((response) => {
      this.setState({
        name: response.data.result.data.name,
        discription: response.data.result.data.discription,
        id: response.data.result.data.id
      })
    })
  }
  valid() {
    if (this.state.name === "" && this.state.discription === "") {
      this.setState({ data: "Please Enter Data" })
    } else if (this.state.name === "") {
      this.setState({ data: "Enter your name" })
    } else if (this.state.discription === "") {
      this.setState({ data: "Enter Discription" })
    } else { return true }
  }
  reset(){
   this.setState({
    name: '',
    discription: '',
    data:""
   })
  }
  submit(event) {
    event.preventDefault();
    this.setState({ data: "" })
    if (this.valid()) {
      const url = "http://api.sunilos.com:9080/ORSP10/Role/save"
      axios.post(url, this.state).then((response) => {
        console.log(response.data.result)
        this.setState({ list: response.data.result.data })
        if (response.data.result.message === "name already exists") {
          this.setState({ data: "Name Already Exists/" })
        } else if (response.data.result.message === "could not execute statement; SQL [n/a]; nested exception is org.hibernate.exception.DataException: could not execute statement") {
          this.setState({ data: "could not execute this statement please change this description." })
        } else {
          this.setState({ data: "Mission Success" })
        }
      })
    }
  }
  render() {
    // console.log(this.props)
    return (
      <div className="container" style={{ marginTop: '80px', width: "26% ",border:"1px solid gray",borderRadius:"30px" }}>
        <h3 style={{ textAlign: "center" }}>
          {
            this.props.params.id ? "EDIT ROLL" : "ADD ROLL"
          }
        </h3>
        <form className='p-4'>
          <div className="form-group pb-3">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
              name="name"
              value={this.state.name}
            />
          </div>
          <div className="form-group pb-3">
            <label htmlFor="exampleInputPassword1">Discription</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter discription"
              onChange={(event) =>
                this.setState({ discription: event.target.value })
              }
              name="discription"
              value={this.state.discription}
            />
          </div>
          <h6 style={{ color: "red" }}>{this.state.data}</h6>
          
          <div className='row pt-3'>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
              <button
                type="btn"
                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body "
                onClick={(event) => { this.submit(event) }}
              >
                {
                  this.props.params.id ? "Update" : "Add"
                }

              </button>
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
              <button
                type="reset"
                className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body "
                onClick={() => { this.reset() }}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(AddRole); 