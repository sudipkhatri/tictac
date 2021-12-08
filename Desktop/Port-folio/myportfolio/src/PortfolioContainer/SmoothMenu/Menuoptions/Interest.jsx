import React from 'react';
import './options.css'
export default function Interest(){

    return(
        <div className = "Skills-container" >
            <div className = "col-1 col1">
                <ul className = "ul">
                <li> <span> Reading Books </span> </li>
                <li> <span> Listening Music </span> </li>
                <li> <span> Playing Guitar </span> </li>
                <li> <span> Cooking </span> </li>

                </ul>

            </div>
            <div className = "col-2 col2">
                <ul className = "ul">
                <li> <span> Playing Soccer </span> </li>
                <li> <span> Watching Documentries </span> </li>
                <li>  <span> Playing Chess </span> </li>
                <li> <span> Solving Puzzles</span> </li>
               
                </ul>
            </div>
        </div>
    )

}