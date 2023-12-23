import React, { useState } from 'react'
import './navbar.css';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';


export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img src='logo2.png' alt='logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>
          About
        </Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          Portfolio
        </Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>
          Contact
        </Link>
        <a href='https://drive.google.com/file/d/1VMzrkc-ikWf-wO2O0zkOOQYo_kmyMI1p/view?usp=drive_link' target='blank' className='desktopMenuListItem'>
          Resume
        </a>
      </div>


      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} alt='' className='desktopMenuImg' />
        Contact Me
      </button>

      <img src={menu} alt='logo' className='mobMenu' onClick={()=>{setShowMenu(!showMenu)}} />
      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => { setShowMenu(!false) }}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={() => { setShowMenu(false) }}>
          About
        </Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => { setShowMenu(false) }} >
          Portfolio
        </Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => { setShowMenu(false) }} >
          Contact
        </Link>
      </div>

    </nav>
  )
}
