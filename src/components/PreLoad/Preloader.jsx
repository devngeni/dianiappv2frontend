import React from "react";
import "./text.css";
// import Logo from "../assets/logosmall.png";
import logo from "../assets/logosmall.png";

function Preloader() {
  return (
    <>
      <div className="">
        
        <div style={{marginTop:"45vh"}} > <img className="spinning" style={{width:"50px"}} src={logo} alt="spinning animation"/></div>
      </div>
    </>
  );
}

export default Preloader;
