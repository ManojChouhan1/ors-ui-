import React, { Component } from 'react'

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Login from './component/Login';
import Registration from './component/Registration';
import Home from './component/Home';
import Footer from './componet2/Footer';
import Alert from './componet2/Alert';

import UserAdd from '../src/componet2/UserAdd';
import UserList from '../src/componet2/UserList';
import AddMarksheet from '../src/componet2/AddMarksheet';
import MarksheetList from '../src/componet2/MarksheetList';
import AddStudent from '../src/componet2/AddStudent';
import StudentList from '../src/componet2/StudentList';
import AddRole from '../src/componet2/AddRole';
import RollList from '../src/componet2/RollList';
import AddCollege from '../src/college/AddCollege';
import CollegeList from "../src/college/CollegeList"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alert: null,
    }
    if (window.location.pathname !== "/login" && !localStorage.getItem("Name"))     {
      window.location.pathname="/login"
      this.state.man = true;
    }
  }
  showAlert=(message,type)=>{
    this.setState({alert:{message:message,type:type}})
    setTimeout(() => {
      this.setState({alert:null})
    }, 3500);
  }
  render() {
    // console.log(this.state.myProblem)
    if(this.state.man){
      this.setState({mypro: "Your session is expire please login"})
    }
    return (
        <BrowserRouter>
          <Dashboard />
          <Alert alert={this.state.alert} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<Registration showAlert={this.showAlert} />} />
            <Route path='/login' element={<Login showAlert={this.showAlert} mypro={this.state.mypro}/>} />

            <Route path='/adduser' element={<UserAdd showAlert={this.showAlert} />} />
            <Route path='/addmark' element={<AddMarksheet showAlert={this.showAlert} />} />
            <Route path='/addstudent' element={<AddStudent showAlert={this.showAlert} />} />
            <Route path='/addrole' element={<AddRole showAlert={this.showAlert} />} />
            <Route path='/addcollege' element={<AddCollege showAlert={this.showAlert} />} />

            <Route path='/userlist/' element={<UserList />} />
            <Route path='/marklist' element={<MarksheetList />} />
            <Route path='/studentlist' element={<StudentList />} />
            <Route path='/rolelist' element={<RollList />} />
            <Route path='/collegelist' element={<CollegeList />} />

            <Route path='/adduser/:id' element={<UserAdd showAlert={this.showAlert} />} />
            <Route path='/addmark/:id' element={<AddMarksheet showAlert={this.showAlert} />} />
            <Route path='/addstudent/:id' element={<AddStudent showAlert={this.showAlert} />} />
            <Route path='/addrole/:id' element={<AddRole showAlert={this.showAlert} />} />
            <Route path='/addcollege/:id' element={<AddCollege showAlert={this.showAlert} />} />

          </Routes>
          <Footer />
        </BrowserRouter>
    )

  }
}
