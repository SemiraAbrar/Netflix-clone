import React, { useEffect, useState } from "react";
import "./nav.css";
import NetflixLogo from '../../assets/netflixlogo.jpg'
import SearchIcon from "@mui/icons-material/Search";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
function Navbar() {
  // const [show,handleShow]=useState[false];
  // useEffect(()=>{
  //   window.addEventListener("scroll",()=>{
  //     if(window.scrollY>100){
  //       handleShow(true);
  //     }else handleShow(false);
  //   });
  //   return ()=>{
  //     window.removeEventListener("scroll");
  //   };
  // },[]);
  // ${show && "nav__black"}
  return (
    <>
      <div className="nav">
        <div className="nav__left">
          <ul>
            <li>
              {" "}
              <a href="">
                <img src={NetflixLogo} alt="Netflix Logo" width={100} />
              </a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">TVShows</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">Latest</a>
            </li>
            <li>
              <a href="">MyList</a>
            </li>
            <li>
              <a href="">Browse By Languages</a>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <ul>
            <li>
              {" "}
              <a href="">
                {" "}
                <SearchIcon />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <NotificationsNoneIcon />
              </a>
            </li>
            <li>
              <a href="">
                <AccountBoxIcon />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <ArrowDropDownIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
