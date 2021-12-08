import { React, useState } from 'react';
import Education from './Menuoptions/Education';
import Work from './Menuoptions/Work';
import Skills from './Menuoptions/Skills';
import Interest from './Menuoptions/Interest';
import Project from './Menuoptions/Project';


// import {FaUniversity} from "react-icons/fa";
// import {MdWork, MdComputer} from "react-icons/md";
// import {GrProjects} from "react-icons/gr";
// import {BiGame} from "react-icons/bi";
import './sides.css'



const Side = () =>{
    
    const options = ['Education', 'Work', 'Skills', 'Projects', 'Interest']
    const [myOptions, setmyOptions] = useState('')
    // const logo = [<FaUniversity/>, <MdWork/>, <MdComputer/>, <GrProjects/>, <BiGame/>]
    // const [myLogo, setmyLogo] = useState("")
    
    return(
           <div className = "Menu-container">
               <div className = "Menu-items">
                  <ul className = "list-items">
                      {options.map(optionsArray =>(
                        <li className = "list">
                            <button 
                                key = {options}
                                type = "button"
                                onClick = {() => setmyOptions(optionsArray)}
                            > 
                            {optionsArray.toLocaleUpperCase()}
                             </button>
                        </li>
                        
                      ))}
                     
                     {/* <li className = "list">  <button > <FaUniversity/> Education </button> </li>
                     <li className = "list">  <a href = "Menuoptions/work.jsx"> <MdWork/> Work History </a>  </li>
                    <li className = "list">  <a href = "programming.jsx"> <MdComputer/> Programming Skills </a> </li>
                    <li className = "list"> <a href = "project.jsx"> <GrProjects/> Projects </a> </li>
                    <li className = "list"> <a href = "interest.jsx"> <BiGame/> Interests </a> </li> */}
                  </ul>
               </div>
               <div className = "show-Menu">
                        {myOptions === 'Education' && <Education/>}
                        {myOptions === 'Work' && <Work/>}
                        {myOptions === 'Skills' && <Skills/>}
                        {myOptions === 'Projects' && <Project/>}
                        {myOptions === 'Interest' && <Interest/>}   
               </div>
           </div> 
    )
}


export default Side;

