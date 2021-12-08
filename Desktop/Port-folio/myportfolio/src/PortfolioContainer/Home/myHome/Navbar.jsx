import React from "react";


export default function Navbar(){

        return (
            <div>
                <nav className="navbar navbar-expand-sm  navbar-dark" id = "Home">
                    <div className="container-fluid ">
                        <a className="navbar-brand " href="#">Sudip's Porfolio</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                        <a className="nav-link" href="#Home"> Home </a> </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#About"> About</a> </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#Contact"> Contact</a> </li>    
                    </ul>
                    
                    </div>
            </div>
                
                </nav>
            </div>
        )
    
     
}

