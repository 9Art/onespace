import React from "react";
import Logo from "../img/logo_oneSpace.png";
import "./Navbar.css";

// import { BrowserRouter as Link } from "react-router-dom";

const navstyle = {
  margin: "12px auto 142px auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const Navbartop = props => {
  return (
    <div className="container" style={navstyle}>
      <img src={Logo} alt="Logo" width="96" height="68" />
      <div className="textstyle">
        <div style={{ paddingRight: "45px" }}><a href="/">บริการ</a></div>
        {/* <Link to="/">Home</Link> */}
        <div><a href="/form">พูดคุยกัน</a></div>
        {/* <NavLink to="/content" class="nav-link" style={{fontWeight: "bold", fontSize: "18px",color: "#1E2235" }}>บริการ</NavLink> */}
      </div>
    </div>
  );
};

export default Navbartop;
