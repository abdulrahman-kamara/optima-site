import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PerfectScrollbar from 'react-perfect-scrollbar'
import "./Nav.css";
import { ImMenu } from "react-icons/im";
import { ImCross } from "react-icons/im";

function NavBar() {
  const [mobile, setmobile] = useState(false);
  // const [hover, setHover] = useState(false);
  

  return (

    <nav className="navbar">

      <div className="logo">
        <a className="nav-bar-link" href="/">
        <img src="/images/logo.jpg" alt="" className="logo-image" />
 <h6 className="logo-name">CERCLE OPTIMA</h6>
        </a>
       
      </div>

      <ul
        className={ mobile ? "nav-links-mobile" : "nav-link" } 
        onClick={() => setmobile(false)}
        

        // onMouseEnter={()=> setHover(false)}
        // onMouseLeave={()=> setHover(false)}
      >
        <Link  to="/">
          <li>Accuiel</li>
        </Link>
        <Link  to="/activities">
          <li>Notre Activités</li>
        </Link>
        <Link  to="/notre métier">
          <li>Nos métier</li>
        </Link>
        <Link  to="/certificat">
          <li>Certificats & Agréments</li>
        </Link>
        <Link  to="/about">
          <li>Boutique</li>
        </Link>
        <Link  to="/carrières">
          <li>Carrières</li>
        </Link>
        <Link  to="/notre réseau">
          <li>Notre Réseau</li>
        </Link>
        <Link  to="/contact">
          <li>Contact</li>
        </Link>
        <Link  to="/réclamations">
          <li>Réclamations / Appels</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setmobile(!mobile)}>
        {mobile ? <ImCross  size={15}/> : <ImMenu  size={25}/>}
      </button>
    </nav>
   
  );
}

export default NavBar;

