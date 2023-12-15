import React from 'react';
import './Works.css';
import Portfolio1 from '../../assets/crypto2.png'
import Portfolio2 from '../../assets/todo4.png'
import Portfolio3 from '../../assets/hostal3.png'


export const Works = () => {
    return (
        <section id='works'>
            <div className='worksTitle'>
                My Portfolio
            </div>
            <span className='workDesc'>
                {/* I take pride in playing attention to the smallest details. */}
            </span>
            <div className='worksImgs'>
                <img src={Portfolio1} alt='' className='workImg' />
                <span>Crypto App </span>
                <img src={Portfolio2} alt='' className='workImg' />
                <span>Task Mannager  </span>
                <img src={Portfolio3} alt='' className='workImg' />
                <span>Find Hostel Room </span>
                {/* <img src={Portfolio4} alt='' className='workImg' />
                <img src={Portfolio5} alt='' className='workImg' />
                <img src={Portfolio16} alt='' className='workImg' /> */}
            </div>
            <a href='https://github.com/vikram110703' target='blank' >
                <button className='worksBtn'>
                    See More
                </button>
            </a>
        </section>

    )
}
