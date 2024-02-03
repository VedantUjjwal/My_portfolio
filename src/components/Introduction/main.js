import React from 'react'
import './main.css';
// import bg from '../../assets/image.png'
import bg from '../../assets/green_shirt (1)_bg_removed.png'
import hiremebtn from '../../assets/hireme.png'
import { Link } from 'react-scroll';
const Main = () => {
  return (
    <>
      <section id="intro">
        <div className="introcontent">
            <span className="hello">Hello,</span>
            <span className="introtext">I'm <span className="myName">Vedant Ujjwal</span></span>
            <span className="desig">Website Developer</span>
            <p className="introPara">I am a skilled website developer with experience in creating<br/>visually appealing and user-friendly websites.</p>
            <Link><button className="btn"><img src={hiremebtn} alt="hire me" className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt="backgound image" className='bg'/>
      </section>
    </>
  )
}

export default Main
