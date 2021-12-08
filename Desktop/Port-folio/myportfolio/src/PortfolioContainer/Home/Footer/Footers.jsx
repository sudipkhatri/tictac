import React from 'react';
import './Footer.css'

export default function Footers(){
    return (
        <div className = "footer-container">
            <div className = "footer-parent">
                <img src = {require('../../../PortfolioContainer/Files/Images/svg.png').default} alt = "Image Not Found" width = "100%" />
            </div>
        </div>
    )
}
