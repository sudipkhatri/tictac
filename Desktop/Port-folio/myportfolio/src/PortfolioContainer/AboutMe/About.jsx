import React from 'react';
import Typical from 'react-typical'
import './About.css';

export default function About(){
    return (
        <section className = "About-container" id ="About">
            <div className = "parent-container">
                    <h1 className = "heading"> About Me</h1>
                    <p className = "para"> Why Hire Me ? </p>
                     <hr className="hori-line"/>
            </div>
            <div className = "Main-container">
                    <div className = "img-container">
                    <img src = {require('../../PortfolioContainer/Files/Images/Main.JPG').default} alt = "Image Not Found" width = "100%" />
                    </div>
                    <div className = "why-me">
                        <p>
                            FullStack MERN Web and Mobile Application Developer with experience of making application with almost accuracy. I am Highly motivated, patience, curious and optimistic person. 
                        </p>
                        <Typical
                            steps = {['Key Points :', 1000,
                                    
                                    ]}
                                     loop = {Infinity}
                                
                                    />
                        <ul>
                            <li>Fullstack Web and Mobile Application</li>
                            <li>Implementing Rest API </li>
                            <li>Database Handling</li>
                            <li>React and Redux </li>
                            <li>UX/UI design</li>
                        </ul>
                        
                    </div>
            </div>
        </section>
    )
}
