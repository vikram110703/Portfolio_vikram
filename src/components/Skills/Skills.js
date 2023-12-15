import React from 'react'
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';


export const Skills = () => {
  return (
    <section id='skills' >
      <span className='skillTitle' >
        What I do
      </span>
      <span className='skillDesc' >
        I  belong to Jhunjhunu district in Rajasthan
        <br></br>
        Currently a prefinal year student at NIT Agartala
      </span>
      <div className='skillBars'>
        <div className="skillBar" >
          <img className='skillBarImg' src={WebDesign} alt='' />
          <div className='skillBarText' >
            <h2>Web development</h2>
            {/* <p>This is demo text</p> */}
          </div>

        </div>
        <div className="skillBar" >
          <img className='skillBarImg' src={UIDesign} alt='' />
          <div className='skillBarText' >
            <h2>Web design</h2>
            {/* <p>This is demo text </p> */}
          </div>

        </div>
        <div className="skillBar" >
          <img className='skillBarImg' src={AppDesign} alt='' />
          <div className='skillBarText' >
            <h2>Data structures & Algorithim</h2>
            {/* <p>This is demo text </p> */}
          </div>

        </div>
      </div>


    </section>
  )
}
