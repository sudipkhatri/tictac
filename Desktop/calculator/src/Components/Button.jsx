import React from 'react';
import './Button.css'

const Button = ({symbol, colors, handleClick}) =>{
    
    return(
        <div
        onClick={() =>handleClick(symbol)}
         className= 'btn-wrapper'  style={{backgroundColor: colors
          }}>
            {symbol}
        </div>
    );
};

export default Button