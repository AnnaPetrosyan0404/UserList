import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import UserList from "../UserList/UserList";
import Contact from "../Contact/Contact";

 function ReactRoter () {
  return (
      <Routes>
          <Route index path="/Login" element={<Login/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="UserList" element={<UserList/>} />
          <Route path="Contact" element={<Contact/>} />
      </Routes>
  );
}

export default ReactRoter


