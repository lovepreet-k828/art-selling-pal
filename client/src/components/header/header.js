import React, { useState } from 'react';
import './header.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from '../../features/user';
import MainNav from './mainNav';
import LoginNav from './loginNav';
// import Slideshow from './slider.js'

function Head() {
  const navigate = useNavigate();
  
  const [isLogin, setLogin] = useState(false);
  const user = useSelector((state) => state.currentUser.user);
  const dispatch = useDispatch();
  // if(user['fName'])setLogin(true)
  const handleLogout = () =>{
    dispatch(signIn({}))
    setLogin(false)
    navigate('/')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav" style={{ width: '100%', justifyContent:"space-between" }}>
      
        <div className="container-fluid" id="mainContainer">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="h1 navbar-brand font-weight-bold">ART SELLING PAL.</span>
          </Link>
          <button id="buttonMenu" className="navbar-toggler btn btn-primary font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            Main menu
          </button>
          <MainNav />          
          {isLogin ? <><Link to='/profile' style={{ textDecoration: 'none' }}>
            <span className="col-md-3 h4 btn btn-primary mx-3" style={{ color: "black",minWidth:"fit-content" }}>Welcome {user['fName']} {"["}{user['nft']}{"]"}</span></Link>
              <span className="btn btn-primary" onClick={handleLogout}>Log out</span></> 
              : <LoginNav setLogin={setLogin}/>}
        </div>
        {/* <Slideshow style={{position:"relative"}}/> */}
      </nav>
    </>
  );
}

export default Head;