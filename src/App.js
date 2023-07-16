import React from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Academics from './components/Academics';
import Login from './components/Login';
import Registration from './components/Registration';
import ContactUs from './components/ContactUs';
import StudentProfile from './components/StudentProfile';
// import Title from "./components/Title";
import {Route, Routes} from 'react-router-dom';
import MissionVIsion from './components/MissionVIsion';



function App() {
  return (
  <>
  <Navbar/>
    <Routes>
      <Route exact path='/' element={<div><Navbar/><Home/><Footer/></div>}/>
      <Route path='/contact' element={<div><ContactUs/><Footer/></div>}/>
      <Route path='/about' element={<div><About/><Footer/></div>}/>
      <Route path='/academics' element={<div><Academics/><Footer/></div>}/>
      <Route path='/dashboard' element={<div> <Login/><Registration/><Footer/></div>}/>
      <Route path='/studentprofile' element={<div> <StudentProfile/><Footer/></div>}/>
    </Routes>
     {/* <Navbar/> */}
    {/* <Home/>
    <About/>
    <Academics/>
    <Login/>
    <StudentProfile/>
    <Registration/>
    <ContactUs/> */}
    {/* <Footer/>  */}
 </>);
}

export default App;
