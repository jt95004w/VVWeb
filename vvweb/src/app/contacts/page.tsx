"use client"

import React, { useState } from 'react';
import './styles.css';

export default function Contacts() {

    const [formActive, setFormActive] = useState<boolean>(false);
    const [formActive2, setFormActive2] = useState<boolean>(false);
    const [buttonActive, setButtonActive] = useState<boolean>(false);

    const handleTap = () => {

        setFormActive(true);
        setTimeout(() => {
            // setFormActive2(true);
        }, 10);
        setButtonActive(true);

    }

    return (

        <div>

            {/* CONTACT / CTA */}
            <section id="tap-in" className="tap-in-section slide-in">
                {/* 
                Tap In Button */}
                <button id="tapInButton" className={`tap-in-btn ${buttonActive ? "invisible" : "visible"}`} onClick={handleTap}>Tap In</button>
            
                {/* Expanding Form */}
                <div id="tapInForm" className={`tap-in-form ${formActive ? "block opacity-100 scale-100" : "hidden"} 
                ${formActive2 ? "opacity-100 scale-100" : "opacity-0"}`}>
                    <form id="applicationForm">
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" className='text-black' required/>
                
                        <label htmlFor="message">Tell Us About Yourself:</label>
                        <textarea id="message" name="message" rows={4} className='text-black' required></textarea>
                        <label htmlFor="message">(Dropbox and Drive links accepted)</label>
                        <button type="submit" className="apply-btn">Apply</button>
                    </form>
                </div>
            
                {/* Custom Submission Confirmation Screen */}
                <div id="confirmationMessage" className="confirmation-message">
                    <h2> Application Submitted</h2>
                    <p>We’ll be reaching out soon...</p>
                </div>
            </section>
            

            {/* END OF CONTACT / CTA */}

        </div>

    )

}