import React , { useRef } from 'react'
import './contact.css'
import InstagramIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'
import LinkedInIcon from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';
const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kidh1ac', 'template_clj4axa', form.current,'hKorrrQxVnomuAfwJxqtj')
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

  return (
    <section id="contactPage">
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc"> please fill out the form below to discuss any work opportunities</span>
            <form action="" className="contactForm" ref = {form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your name' name='your_name'/>
                <input type="email" className="email" placeholder='Your email' name = 'ypur_email'/>
                <textarea name="message" rows = "5" className="message" placeholder='Your message'></textarea>
                <button className="submitBtn" type = "submit" value='Send'> Submit </button>
                <div className="links">
                    <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contacts
