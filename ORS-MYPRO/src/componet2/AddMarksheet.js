import React, { Component } from 'react'
import axios from 'axios';
import withRouter from './withRouter';

class AddMarksheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      id: '',
      name: "",
      rollNo: "",
      studentId: "",
      physics: "",
      chemistry: "",
      maths: "",
      data: "",
      toggle: false
    }

    if (this.props.params.id) {
      this.get()
    }
  }
  get() {
    const url = "http://api.sunilos.com:9080/ORSP10/Marksheet/get/" + this.props.params.id;
    axios.get(url).then((response) => {
      console.log(response.data.result.data)
      this.setState({
        id: response.data.result.data.id,
        name: response.data.result.data.name,
        rollNo: response.data.result.data.rollNo,
        studentId: response.data.result.data.studentId,
        physics: response.data.result.data.physics,
        chemistry: response.data.result.data.chemistry,
        maths: response.data.result.data.maths
      })
    })
  }
  reset() {
    this.setState({
      id: '',
      name: "",
      rollNo: "",
      studentId: "",
      physics: "",
      chemistry: "",
      maths: "",
      data: "",
      toggle: false
    })
  }
  valid() {
    if (this.state.name === "" && this.state.rollNo === "" && this.state.studentId === "" && this.state.physics === "" && this.state.chemistry === "" && this.state.maths === "") {
      this.setState({ data: "Enter Correct Data!!!" })
    } else if (this.state.name === "") {
      this.setState({ data: "Enter full name!!!" })
    } else if (this.state.rollNo === "") {
      this.setState({ data: "Enter Roll!!!" })
    } else if (this.state.studentId === "") {
      this.setState({ data: "Enter Student id!!!" })
    } else if (this.state.physics === "") {
      this.setState({ data: "Enter Physics marks!!!" })
    } else if (this.state.chemistry === "") {
      this.setState({ data: "Enter Chemistry marks!!!" })
    } else if (this.state.maths === "") {
      this.setState({ data: "Enter Mathemetics!!!" })
    } else if (this.state.toggle) {
      // toggele
      this.setState({ data: "loginId already exists" })
    } else {
      return true
    }
  }
  submit(event) {
    event.preventDefault();
    this.setState({ data: '' })
    if (this.valid()) {
      const url = "http://api.sunilos.com:9080/ORSP10/Marksheet/save";
      axios.post(url, this.state).then((response) => {
        this.setState({ list: response.data.result })
        console.log(response.data)

        if (response.data.success === true) {
          alert("Success")
          this.setState({ data: " Success", toggle: true })
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
                  <div className="card" style={{ borderRadius: '30px', marginBottom: "100px", width: "80%" }}>
                    <h3 style={{ textAlign: 'center' }} >
                      {
                        this.props.params.id ? "EDIT MARKSHEET" : "ADD MARKSHEET"
                      }
                    </h3>
                    <div className="card-body p-5">
                      <form >
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example1cg"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ name: event.target.value }) }}
                            name='name'
                            value={this.state.name}
                            placeholder="Enter first name"
                          />

                        </div>
                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example2cg"
                          >
                            Roll number
                          </label>
                          <input
                            type="number"
                            id="form3Example2cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ rollNo: event.target.value }) }}
                            name='rollNo'
                            value={this.state.rollNo}
                            placeholder="Enter roll number"
                          />

                        </div>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example3cg"
                          >
                            Student's id
                          </label>
                          <input
                            type="number"
                            id="form3Example3cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ studentId: event.target.value }) }}
                            name="studentId"
                            value={this.state.studentId}
                            placeholder="Enter student id"
                          />

                        </div>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Physics
                          </label>
                          <input
                            type="number"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ physics: event.target.value }) }}
                            name="physics"
                            value={this.state.physics}
                            placeholder="Enter physics mark"
                          />

                        </div>

                        <div className="form-outline mb-2">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Chemistry
                          </label>
                          <input
                            type="number"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ chemistry: event.target.value }) }}
                            name="chemistry"
                            value={this.state.chemistry}
                            placeholder="Enter chemistry mark"
                          />

                        </div>

                        <div className="form-outline mb-2 ">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            Mathematics
                          </label>
                          <input
                            type="number"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            onChange={(event) => { this.setState({ maths: event.target.value }) }}
                            name="maths"
                            value={this.state.maths}
                            placeholder="Enter maths mark"
                          />

                        </div>
                        <div style={{ color: "red" }}> <h6>{this.state.data}</h6></div>
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
export default withRouter(AddMarksheet);