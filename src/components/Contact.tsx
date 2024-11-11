import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className=' container'>
        <div id='contactDiv1' >
            <div id='contactDiv2' >
                <h2 id='contactH2' data-aos="zoom-in-up">Get in touch</h2>
                <p id="contactPara"  data-aos="zoom-in-up" >
                    Drop me a line, give me a call, or send me a message by submittng the  form.
                </p>
                <div id='contactDiv3' data-aos="zoom-in-up" >
                <AiOutlineMail  size={30}/> rehmatkhalid11@gmail.com
                </div>
                <div id="contactDiv4" data-aos="zoom-in-up" >
                <BsTelephone size={30} /> (021)00-0000
                </div>
            </div>
            <div id='contactDiv5' >
                <div className='contactDiv6' data-aos="zoom-in-up" >
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    
                    id='name'/>
                </div>
                <div className='contactDiv6' data-aos="zoom-in-up" >
                    <label htmlFor="email">Email</label>
                    <input type="text"
                 
                    id='email'/>
                </div>
                <div className='contactDiv6' data-aos="zoom-in-up">
                    <label htmlFor="message">Message</label>
                    <textarea 
                    
                    id='message' rows={8}>
                    </textarea>
                </div>
                <button id="contactButton" data-aos="zoom-in-up" >Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
