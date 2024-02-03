import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll'
import menu from '../../assets/menu.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <navbar class="siteNavbar">
        <button id='logoBtn' onClick={()=>{
          document.getElementsByid('logoBtn')
        }}><img src={logo} alt='logo' className='logo'/></button>
        <div className='desktopMenu'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desklistItems'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desklistItems'>About</Link>
          <Link activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500} className='desklistItems'>Portfolio</Link>
          <Link activeClass='active' to='myClient' spy={true} smooth={true} offset={-50} duration={500} className='desklistItems'>Clients</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contactPage').scrollIntoView({ behavour: 'smooth' })
        }}><img className='desktopMenuImg' src={contactImg} alt=''></img> Contact Me</button>
        <img src={menu} alt="hamburgerMenu" className='menu' onClick={() => setShowMenu(!showMenu)} />
        <div className='mobMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='moblistItems' onClick={() => setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='moblistItems' onClick={() => setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='work' spy={true} smooth={true} offset={-50} duration={500} className='moblistItems' onClick={() => setShowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='myClient' spy={true} smooth={true} offset={-50} duration={500} className='moblistItems' onClick={() => setShowMenu(false)}>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='moblistItems' onClick={() => setShowMenu(false)}>Contact</Link>

        </div>
      </navbar>
    </>
  )
}

export default Navbar
