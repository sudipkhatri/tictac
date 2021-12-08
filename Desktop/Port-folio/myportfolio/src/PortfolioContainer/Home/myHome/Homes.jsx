import React from 'react';
import Port from '../Port';
import Footers from '../Footer/Footers';
import FooterEnd from '../Footer/FooterEnd';
import Navbar from './Navbar';
import About from '../../AboutMe/About'
import Side from '../../SmoothMenu/Side'
import ContactMe from '../../ContactMe/ContactMe';

import './Home.css'

export default function Homes(){
    return(
        <div className = "Home-container ">
            <Navbar/>
            <Port/>
            <Footers/>
            <About/>
            <Side/>
            <ContactMe/>
            <FooterEnd/>
        </div>
    )
}
