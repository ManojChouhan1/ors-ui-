import React, { Component } from 'react'
import axios from 'axios';
import withRouter from '../componet2/withRouter';

class AddCollege extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      "address": "",
      "city": "",
      "name": "",
      "state": "",
      "phoneNo": ""
    }
    if (this.props.params.id) {
      this.get();
    }
  }
  get() {
    const url = "http://api.sunilos.com:9080/ORSP10/College/get/" + this.props.params.id;
    axios.get(url).then((response) => {
      this.setState({
        "address": response.data.result.data.address,
        "city": response.data.result.data.city,
        "name": response.data.result.data.name,
        "state": response.data.result.data.state,
        "phoneNo": response.data.result.data.phoneNo,
        "id": response.data.result.data.id
      })
    })
  }
  reset() {
    console.log("reset the value")
    this.setState({
      "address": "",
      "city": "",
      "name": "",
      "state": "",
      "phoneNo": ""
    })
  }
  valid() {
    if (this.state.address === "" && this.state.name === "" && this.state.state === "" && this.state.phoneNo === "" && this.state.city === "") {
      this.setState({ data: "Enter correct college Data" })
    } else if (this.state.address === "") {
      this.setState({ data: "Enter college Address" })
    } else if (this.state.name === "") {
      this.setState({ data: "Enter college Name" })
    } else if (this.state.state === "") {
      this.setState({ data: "Enter college State" })
    } else if (this.state.phoneNo === "") {
      this.setState({ data: "Enter Contact number" })
    } else if (this.state.city === "") {
      this.setState({ data: "Enter college City" })
    } else { return true }
  }
  submit(event) {
    event.preventDefault();
    if (this.valid()) {
      const url = "http://api.sunilos.com:9080/ORSP10/College/save";
      axios.post(url, this.state).then((response) => {
        // console.log(response.data)

        this.setState({ list: response.data.result.data })
        if (response.data.result.message === "name already exists") {
          this.setState({ data: "College Name already exists" })
        } else if (response.data.success) {
          this.setState({ data: "Mission success" })
        } else {
          this.setState({ data: "Must be 10 Digit contact number" })
        }
      })
    }
  }
  render() {
    // console.log(this.props)
    return (
      <div>

        <section
          className="vh-100 bg-image"
        // style={{backgroundImage: url(require("../image/home.jpg"))}}
        >
          <div className="mask d-flex align-items-center h-50 gradient-custom-3">
            <div className="container h-50">
              <div className="row d-flex justify-content-center align-items-center h-50">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: '30px', width: "70%", marginBottom: "80px" }}>
                    <h1 style={{ textAlign: 'center' }}>
                      {
                        this.props.params.id ? "EDIT COLLEGE" : "ADD COLLEGE"
                      }
                    </h1>
                    <div className="card-body p-3">


                      <form >
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example1cg"
                          >
                            College Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ name: event.target.value }) }}
                            name='name'
                            value={this.state.name}
                          />

                        </div>
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example2cg"
                          >
                            Phone number
                          </label>
                          <input
                            type="number"
                            id="form3Example2cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ phoneNo: event.target.value }) }}
                            name='phoneNo'
                            value={this.state.phoneNo}
                          />

                        </div>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example3cg"
                          >
                            College Address
                          </label>
                          <input
                            type="text"
                            id="form3Example3cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ address: event.target.value }) }}
                            name="address"
                            value={this.state.address}

                          />

                        </div>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ city: event.target.value }) }}
                            name="city"
                            value={this.state.city}
                          />

                        </div>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            State
                          </label>
                          <input
                            type="text"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ state: event.target.value }) }}
                            name="state"
                            value={this.state.state}
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
export default withRouter(AddCollege);