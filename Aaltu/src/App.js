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
    console.error(props)
    console.warn("this is props data")
    console.error(localStorage.getItem("Name"))

    


    this.state = {
      alert: null,
      logedIn:false,

    }

    if(window.location.pathname!=="/login"&& localStorage.getItem("Name")===null){
      this.state.logedIn=true;
      localStorage.setItem("logedIn",false)



    }

  }


  render() {

    const Nam = localStorage.getItem("Name");
    
    return (
      <React.Fragment>

        <BrowserRouter>
        {/* { !Nam ?
           
           
           <Dashboard />
          
            
           : */}
        

            

        
<Routes>

          
          <Dashboard />
          <Alert alert={this.state.alert} />

          

            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<Registration showAlert={this.showAlert} />} />
            <Route path='/login' element={<Login showAlert={this.showAlert} />} />

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

            {/* <Route path='/dashboard' element={<Dashboard />} /> */}

          </Routes>
       
          
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    )

  }
}
// }