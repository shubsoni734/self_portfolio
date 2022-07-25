import React, { useState } from 'react'
import "./contact.scss"
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

export default function Contact() {
  const[message,setMessage]=useState(false)

  const handelSubmit =  (e) =>{
      e.preventDefault();
      setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handelSubmit} >
        <input type="text" name='name' placeholder='Name' />
          <input type="text" name='email' placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type="submit">Send</button>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 9461096095</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>SS387403@gmail.com</span>
          </div>
          {message && <span>Thanks, I'll reply ASAP :) </span>}
        </form>
      </div>
    </div>
  )
}
