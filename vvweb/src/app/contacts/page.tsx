"use client"

import React, { useState } from 'react';
import './styles.css';

export default function Contacts() {

    const [formActive, setFormActive] = useState<boolean>(false);
    const [buttonActive, setButtonActive] = useState<boolean>(false);

    const handleTap = () => {

        setFormActive(true);
        setButtonActive(true);

    }

    return (

        <div>

            {/* CONTACT / CTA */}
            <section id="tap-in" className="tap-in-section slide-in">
                {/* 
                Tap In Button */}
                <button id="tapInButton" className={`text-[3.2rem] px-[5.5rem] py-[2.5rem] bg-[var(--gold)] 
                                                    text-[var(--white)] font-bold border-none rounded-[50px] 
                                                    cursor-pointer uppercase transition-all duration-300 ease-in-out 
                                                    shadow-[0px_0px_25px_var(--gold)] relative animate-[glowEffect_1.5s_infinite_alternate_ease-in-out] 
                                                    ${buttonActive ? "invisible" : "visible"}`} onClick={handleTap}>Tap In</button>
            
                {/* Expanding Form */}
                <div id="tapInForm" className={`w-[60%] max-w-[800px] mx-auto my-12 p-12 rounded-[20px] 
                                                bg-[url('/images/Apply/ApplicationBoxPattern3.png')] bg-center bg-cover bg-no-repeat 
                                                relative transition-all duration-300 ease-in-out ${formActive ? "block opacity-100 scale-100" : "hidden"}`}>
                    <form id="applicationForm">
                        <label htmlFor="email" className='text-[1.6rem] font-bold text-[var(--white)] block mb-2'>Your Email:</label>
                        <input type="email" id="email" name="email" className='text-black text-[1.4rem] p-4 w-full rounded-[10px] border-none' required/>
                
                        <label htmlFor="message" className='text-[1.6rem] font-bold text-[var(--white)] block mb-2'>Tell Us About Yourself:</label>
                        <textarea id="message" name="message" rows={4} className='text-black text-[1.4rem] p-4 w-full rounded-[10px] border-none' required></textarea>
                        <label htmlFor="message" className='text-[1.6rem] font-bold text-[var(--white)] block mb-2'>(Dropbox and Drive links accepted)</label>
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