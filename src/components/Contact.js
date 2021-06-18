import React, { useState, useEffect,useRef }from "react";
import emailjs from 'emailjs-com';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

 function Contact() {

    const [mailresult, setMailResult] = useState(false);
    const isFirstRender = useRef(true);

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_g5fwuai', 'template_0xv77gl', e.target, 'user_lrE6vo53hRFuFfVgyyew1')
        .then((result) => {
            console.log(result.text);
            if(result.text === 'OK'){
               setMailResult(true);
            }
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    useEffect (() =>{
        if (isFirstRender.current) {
            isFirstRender.current = false // toggle flag after first render/mounting
            return;
          }
        if(mailresult === true){
        NotificationManager.success('Thank you for message. I will get back to you immediately', 'Message sent');
        }else{
        console.log(mailresult);
        NotificationManager.error('Something went wrong!', 'Try again', 5000, () => {
            alert('callback');
          })
    }
    }, [mailresult]);
  
    return (
        <>
        
        <div className="contact">Contact With Me</div>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="contact-btn" type="submit" value="Send" />
      </form>
          <NotificationContainer/>
        </>
    );
  }

  export default Contact;