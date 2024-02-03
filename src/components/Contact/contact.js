import React, { useRef } from 'react'
import './contact.css'
import Wallmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k7d2f7q', 'template_eocoybk', form.current, 'C8D7nA60H8pnNRd4k')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('your email has been sent!')
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
      <div id="myClient">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the oppurtinity to work with the diverse group of companies.
          some of the notable companies i have worked with includes.
        </p>
        <div className="clientImages">
          <img src={Wallmart} alt="Wallmart" className='clientImg' />
          <img src={Adobe} alt="Adobe" className='clientImg' />
          <img src={Microsoft} alt="Microsoft" className='clientImg' />
          <img src={Facebook} alt="Facebook" className='clientImg' />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work oppurtinities</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className='name' placeholder='your Name' name='from_name' />
          <input type="email" className='email' placeholder='your Email' name='from_email' />
          <textarea className="msg" rows="5" placeholder='your Message' name="message"></textarea>
          <button type="submit" value="send" className='submitBtn'>Submit</button>
          <div className="links">
            <img src={FacebookIcon} alt="FacebookIcon" className="imgLink" />
            <img src={TwitterIcon} alt="TwitterIcon" className="imgLink" />
            <img src={YoutubeIcon} alt="YoutubeIcon" className="imgLink" />
            <img src={InstagramIcon} alt="InstagramIcon" className="imgLink" />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
