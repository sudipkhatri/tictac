import React from 'react';
import './Footer.css'

export default function FooterEnd(){
    const current = new Date();
    const date =  current.getFullYear()
    return(
        <section id="footer">
            <div className="column">
    

                <div className="row">
                    <h2>Get In Touch </h2><hr/>
                        <a  href = "mailto: sudpkhatri4@gmail.com">Send Email</a>
                        <a  href="https://www.linkedin.com/in/sudip-khatri-353370148/" target="_blank" >Linkedin </a>
                        </div>
 
                <div className="row">
                    <h2>Membership</h2><hr/>
                    <p>Australian Computer Society(ACS)</p>
                    <p>Membership No: 4302600 </p>
                </div>
            </div>
               
                
            <div className="text">
                    <p> @copyright { date } </p>
                    <p> . All right reserved.</p>
            </div>

        </section>

    )

}