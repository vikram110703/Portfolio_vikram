import React from 'react'
import './Intro.css';
import bgImg from '../assets/vikram.3.png'
import { Link } from 'react-scroll';
import btnImg from '../assets/hireme.png'

export const Intro = () => {
  return (
    <section id='intro' >
      <div className='introContent' >
        <span className='hello'>
          Hello,
        </span>
        <span className='intoText'>I'm
          <span className='introName'>Vikram </span>
          <br />
          Web Developer
        </span>
        <p className='introPara'>
          I am a skilled full stack web develper .
        </p>
        <div>
          <button className='btn'>
            <img src={btnImg} alt='buttonImage' className='btnImg' />
            <a href='https://drive.google.com/file/d/1VMzrkc-ikWf-wO2O0zkOOQYo_kmyMI1p/view?usp=sharing' target='blank' >
              Hire me
            </a>
          </button>
        </div>
      </div>
      <img src={bgImg} alt='profilePic' className='bgImg' />
    </section>
  )
}
