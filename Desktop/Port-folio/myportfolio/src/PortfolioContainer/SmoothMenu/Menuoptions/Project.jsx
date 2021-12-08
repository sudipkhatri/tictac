import React from 'react';
import './options.css'

const Project = () =>{

    return(
        <div className = "Project-container">
            <div className = "Project proj-1">
                <img src = {require('../../Files/Images/apple.jpg').default} alt = "Img Not Found" />
                <a href = "https://github.com/sudipkhatri/app-development" target = "_blank"> IOS/Andriod App</a>
            </div>
            <div className = "Project proj-2">
                <img src = {require('../../Files/Images/header.jpg').default} alt = "Img Not Found" />
                <a href = "https://github.com/sudipkhatri/website" target = "_blank"> Scholarship Ranking Website </a>
            </div>
            <div className = "Project proj-3">
            <img src = {require('../../Files/Images/sample.jpg').default} alt = "Img Not Found" />
                <a href = "https://github.com/sudipkhatri/RIver-Crossing-Game" target = "_blank"> River Crossing Game</a>
            </div>
            <div className = "Project proj-4">
                <img src = {require('../../Files/Images/survey.png').default} alt = "Img Not Found" />
                <a href = "https://codepen.io/your-work" target = "_blank"> Survey Page </a>
            </div>
            <div className = "Project proj-6">
                <h1> Further More Projects are coming soon! </h1>
            </div>
            
        </div>
    )

}

export default Project;