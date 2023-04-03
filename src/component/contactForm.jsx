import React, { Component } from 'react';
import '../style/contactForm.css';
import Button from './common/button';

class ContactForm extends Component {
    state = {}
    render() {
        return (
            <div className="contact-form">
                <h1 className='contact-header'>CONTACT US</h1>
                <form className="contact-cotainer">
                    <div className='input-container'>
                        <label className='label'>Name</label><br></br>
                        <input className='input-form' type='text' />
                    </div>
                    <div className='input-container'>
                        <label className='label'>Email</label><br></br>
                        <input className='input-form' type='email' />
                    </div>
                    <div className='input-container'>
                        <label className='label'>Message</label><br></br>
                        <textarea className='input-form' type='text' id="text-box" />
                    </div>
                    <Button />
                </form>
            </div>

        );
    }
}

export default ContactForm;