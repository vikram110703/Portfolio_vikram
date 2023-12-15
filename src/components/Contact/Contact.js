import React, { useRef } from 'react';
import './Contact.css';
import FacebookIcon from '../../assets/facebook-icon.png'
import twitterIcon from '../../assets/twitter.png'
import instagramIcon from '../../assets/instagram.png'
import linkedIcon from '../../assets/linkedin.png'

import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_crr4a0i', 'template_f7yplxf', form.current, 'n_ii0aVMRYDnZJHg_')
            .then((result) => {
                // console.log("Contact message sent : ", result.text);
                form.current.reset();
                alert("Email sent ");
            }, (err) => {
                // console.log(err.text);
                form.current.reset();
            });
    }
    return (
        <section id='contactPage'>
            <div id='contact' >
                <h1 className='contactPageTitle'>
                    Contact Me
                </h1>
                <span className='contactDesc'>
                    <form className='contactForm' ref={form} onSubmit={sendEmail}>
                        <input type='text' className='name' placeholder='Your Name' name='your_name' />
                        <input type='email' className='email' placeholder='Your Email' name='your_email' />
                        <textarea name='message' rows={5} className='msg' placeholder='Your message ' />
                        <button className='submitBtn' type='submit' value='Send'>
                            Submit
                        </button>

                        <div className='links'>
                            <a href='https://www.facebook.com/profile.php?id=100018319291843&mibextid=9R9pXO' >
                                <img src={FacebookIcon} alt='' className='link' />
                            </a>
                            <a href='https://twitter.com/Vikramsaini_01?t=p4qzKs32jWzRW6igwL6xXg&s=09'>
                                <img src={twitterIcon} alt='' className='link' />

                            </a>
                            <a href='https://www.instagram.com/vikramsaini1779?igshid=OGQ5ZDc2ODk2ZA=='>
                                <img src={instagramIcon} alt='' className='link' />

                            </a>
                            <a href='https://www.linkedin.com/in/vikram-singh-702b23288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                                <img src={linkedIcon} alt='' className='link' />

                            </a>

                        </div>

                    </form>
                </span>
            </div>
        </section>
    )
}
