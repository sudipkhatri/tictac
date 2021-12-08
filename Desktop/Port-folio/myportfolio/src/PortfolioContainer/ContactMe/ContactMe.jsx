import React from 'react';
import './ContactMe.css'
import emailjs from 'emailjs-com'


export default function ContactMe(){
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
            'Gmail_1$',
            'template_ym8effo',
            e.target,
            'user_2N3VFzAvNtdbdnvCq6DNd'
        ).then(res=>{
            alert('Message Sent');
            console.log(res)
        }
        ).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className = "Contact-container" id = "Contact">
            <div className = "contact main">
                <h1> Get In Touch </h1>
                <form className = "Contactus Form"  method="post" onSubmit = {sendEmail}>
                <input  type = "text" name = "FullName" placeholder = "Enter Your Full Name.." required/>
                <input type = "email" name = "Email" placeholder = "Enter Your Email.."  required/>
                <textarea type = "textArea" name = "Description" placeholder = "Enter Your Message.." required/>
                <button type = "submit"> Submit </button>
                </form>
            </div>
            

        </div>


    )


}