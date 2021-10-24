
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, NavLink, Switch,Route} from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <div id="preloader">
        <div className="loader">
            <img src="images/loader.gif" alt="#" />
        </div>
    </div>
  
    <header className="top-header">
        <nav className="navbar header-nav navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="image"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-wd" aria-controls="navbar-wd" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbar-wd">
                    <ul className="navbar-nav">
                      

                        <li> 
                            
                        <NavLink className="nav-link" to="/"> Home </NavLink>  </li>
                        <li>  <NavLink className="nav-link" to="/about">About</NavLink></li>
                        <li> <NavLink className="nav-link" to="/Courses">Courses</NavLink></li>
                        <li><NavLink className="nav-link" to="/Contact">Contact</NavLink></li>
                      
					 
						
                    </ul>
                </div>
                <div className="search-box">
                    <input type="text" className="search-txt" placeholder="Search"/>
                    <a className="search-btn">
                        <img src="images/search_icon.png" alt="#" />
                    </a>
                </div>
            </div>
        </nav>
    </header>
    

      
    
           
        </div>
    );
};

export default Header;