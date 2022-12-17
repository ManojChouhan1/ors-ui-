import React, { Component } from 'react'
import  "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard1 from './component/Dashboard1'
import Login from './component/Login';
import Registration from './component/Registration';
import Home from './component/Home';

// import Dashboard from './component/Dashboard';

export default class App extends Component {
  render() {
    return (
      <>
      {/* <Dashboard /> */}
      <BrowserRouter>
     <Dashboard1/>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/login' element={<Login />} />
     </Routes>
     </BrowserRouter>
     </> 
    )
  }
}
