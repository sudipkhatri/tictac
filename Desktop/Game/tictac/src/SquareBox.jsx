import React from 'react';
import './App.css'

export default function SquareBox(props){
    
    return(
        <span className='box' onClick={props.onClick}>
            {props.state}
        </span>
    )
}
