import React from 'react';
import Typical from 'react-typical'
import {FaFacebookSquare, FaTwitter, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import './Ports.css'

export default function Port(){
 
        return(
            <div className = "profile-container">
                <div className = "profile-details">

                <div className="icons-social">
                    <a className = "icons-tag fb" href = "#!"> <FaFacebookSquare/> </a>
                    <a className = "icons-tag twitter" href = "#!"> <FaTwitter/> </a>
                    <a className = "icons-tag git" href = "#!"> <FaGithubSquare/> </a>
                    <a className = "icons-tag insta" href = "#!"> <FaInstagramSquare/> </a>             
                </div>
                
                <div className = "profile-text">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text"> Sudip </span>
                     </span>
                </div>

                <div className = "profile-title">
                    
                    <span className="primary-text">
                           <h1>
                             <Typical
                            steps = {['Full-Stack Developer :)', 1000,
                                    'Enthusiastic Devloper :)', 1000,                                      
                                    'React/Node Js Developer :)', 1000,
                                    'Creative Developer :)', 1000]}
                                     loop = {Infinity}
                                
                                    />
                            </h1>
                            <span className = "primary-text"> Love To Develop New And Creative Web-Applications </span>
                    </span>
                  
                </div>
                <div className = "myprofile-options">
                    <button className = "btn hire-me"> Hire Me </button>
                    <a href="resume.docx" download="sudip resume.docx">
                        <button className= "btn get-resume"> Get Resume </button>
                        </a>
                </div>
                </div>
                <div className = "profile-picture">
                    <div className = "proile-pic-bg">
                    </div>
                </div>
               
            </div>
        )
    }


