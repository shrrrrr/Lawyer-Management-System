
import React, { useState,useEffect,setText } from "react";
import { Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import RegistrationForm from "./RegistrationForm";
import '/home/soham/SE Projects 3/test3/with_phone/client/src/css/homepage.css'
import customNavbar from './customNavbar'

import a3 from '/home/soham/SE Projects 3/test3/with_phone/client/src/images/a3.jpg'
import a4 from '/home/soham/SE Projects 3/test3/with_phone/client/src/images/a4.jpg'
import a5 from '/home/soham/SE Projects 3/test3/with_phone/client/src/images/a5.jpg'

const Home = () => {
  const [name, setName] = useState(localStorage.getItem('userName') || '');
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleRegistrationForm=async()=>{
    console.log("regitratin button clicked");
    try{
          navigate("/registrationform")
    }catch(err){
      console.log(err)
    }
  };
  return (
    <>



    
    
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>


<div className="d-grid gap-2"

style={{
  width:'20%'
}}

>
        <Button variant="primary" onClick={handleRegistrationForm}>Complete Registration</Button>
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
  


<div className="p-4 box mt-3 text-center">
        Hello  {name}
        {user && user.email}
        
      </div>



<div className="midpart">


<div className="card" style={{ width: "18rem" }}>
  <img src={a3} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Judgement Discovery</h5>
    <p className="card-text">
      Uncover insightful judgement with...
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
<div className="card" style={{ width: "18rem" }}>
  <img src={a4} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Case research</h5>
    <p className="card-text">
      AI powered contextual search...
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

<div className="card" style={{ width: "18rem" }}>
  <img src={a5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Contrast drafting</h5>
    <p className="card-text">
    AI powered contextual search...
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>


<div className="card" style={{ width: "18rem" }}>
  <img src={a5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Contrast drafting</h5>
    <p className="card-text">
    AI powered contextual search...
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>










</div>



  
  

    
    
     
  
    </>
  );
};

export default Home;
