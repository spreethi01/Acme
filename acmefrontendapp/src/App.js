import React from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login";
import Customize from "./components/Customize";
import EventPage from "./components/EventPage";
import Participants from "./components/Participants";
import WinnerPage from "./components/WinnerPage";
import Registration from "./components/Registration";
import RegistrationForm from "./components/RegistrationForm";
import TestTricon from "./components/TestTricon";

function App() {
  return (
    <div>
      <Nav></Nav>
      {/* <TestTricon></TestTricon> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/ContactUS" element={<ContactUs></ContactUs>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/customize" element={<Customize />}></Route>
        <Route path="/admin/events" element={<EventPage></EventPage>}></Route>
        <Route path="/admin/participants" element={<Participants></Participants>}></Route>
        <Route path="/admin/winners" element={<WinnerPage></WinnerPage>}></Route>
        <Route path="register" element={<Registration></Registration>}></Route>
        <Route path="/registration/:eventId" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
