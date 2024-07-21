import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/navbar/Header";
import Homepage from "./components/home/Homepage";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
import Calender from "./components/calender/Calender";
import Contact from "./components/contact/Contact";
import Stories from "./components/stories/Stories";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/calender" element={<Calender />}></Route>
          <Route path="/stories" element={<Stories />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </Fragment>
  );
}

export default App;
