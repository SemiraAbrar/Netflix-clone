import React, { useEffect, useState } from "react";
import "./nav1.css";
import NetflixLogo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        handleShow(true);
      }else
        handleShow(false);
      
    });
    return ()=>{
      window.removeEventListener("scroll",handleShow);
    };
  },[]);
  
  return (
    <>
     
        <nav className={`navbar navbar-expand-md   fixed-top ${show&&"nav__black"} `}>
          <div className="container-fluid">
            <a className="navbar-brand d-md-none" href="#">
              <img src={NetflixLogo} alt="Netflix Logo" width={100} />
            </a>
            <a className="nav-link d-md-none" href="#">
              <SearchIcon />
            </a>
            <a className="nav-link d-md-none" href="#">
              <ArrowDropDownIcon />
            </a>
            <a className="nav-link d-md-none" href="#">
              <NotificationsNoneIcon />
            </a>

            <button
          
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse  row" id="navbarNav">
              <div className="nav-left col-md-9 ">
                <ul className="navbar-nav ul-left mx-auto">
                  <li className="nav-item">
                    <a className="nav-link logo " href="/">
                      <img src={NetflixLogo} alt="Netflix Logo" width={100} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/">
                      TVShows
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Movies
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Latest
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      MyList
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Browse By Languages
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-right col-md-2">
                <ul className=" navbar-nav mx-auto">
                  <li className="nav-item">
                    <a className=" search nav-link " href="#">
                      <SearchIcon />
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="arrow nav-link " href="#">
                      <ArrowDropDownIcon />
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="account nav-link " href="#">
                      <AccountBoxIcon />
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="notification nav-link " href="#">
                      <NotificationsNoneIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    
    </>
  );
}

export default Navbar;
