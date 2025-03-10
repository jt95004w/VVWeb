"use client"

import React, { useState } from 'react';
import './styles.css';

export default function Contacts() {

    const [formActive, setFormActive] = useState<boolean>(false);
    const [buttonActive, setButtonActive] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleTap = () => {
        setButtonActive(true);
        setTimeout(() => {
            setFormActive(true);
        }, 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("email", email);
        formData.append("message", message);
    
        try {
          const response = await fetch("https://formspree.io/f/xldgoaaj", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
          });
    
          const data = await response.json();
    
          if (data.ok) {
            setIsSubmitted(true);
          } else {
            console.error("FormSpree error:", data);
            alert("Submission failed. Please try again.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Something went wrong. Try again.");
        }
      };

    return (

        <div id='tap-in' className="flex flex-col items-center justify-center">
            {/* Expanding Button */}
            <button
                id="tapInButton"
                className={`text-[2.3rem] px-[5.5rem] py-[2.5rem] max-w-[800px] rounded-[50px] font-bold uppercase cursor-pointer 
                            transition-all duration-500 ease-in-out shadow-[0px_0px_25px_var(--gold)] relative 
                            ${buttonActive ? "w-[60%] h-[600px] bg-transparent text-transparent" : "w-[20%] bg-[var(--gold)] text-[var(--white)]"}`}
                onClick={handleTap}
            >
                {!buttonActive && "Tap In"}
            </button>

            {/* Expanding Form */}
            <div
                id="tapInForm"
                className={`w-[60%] max-w-[800px] mx-auto p-12 rounded-[50px] bg-[url('/images/Apply/ApplicationBoxPattern3.png')] 
                            bg-center bg-cover bg-no-repeat relative transition-all duration-2000
                            -mt-[600px]
                            ${formActive ? "opacity-100 scale-100" : "opacity-0 scale-90 hidden"}`}
            >
                
                {isSubmitted ? 
                (
                    <div>Thanks for your submission! We&aposll get back to you shortly...</div>
                ) :
                (
                    <form id="applicationForm" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="text-[1.6rem] font-bold text-[var(--white)] block mb-2 flex justify-center">
                            Your Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-black text-[1.4rem] p-4 w-full rounded-[10px] border-none"
                            required
                        />

                        <label htmlFor="message" className="text-[1.6rem] font-bold text-[var(--white)] block mb-2 flex justify-center">
                            Tell Us About Yourself:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="text-black text-[1.4rem] p-4 w-full rounded-[10px] border-none"
                            required
                        ></textarea>

                        <label htmlFor="message" className="text-[1.6rem] font-bold text-[var(--white)] block mb-2 flex justify-center">
                            (Dropbox and Drive links accepted)
                        </label>

                        <button type="submit" className="apply-btn">
                            Apply
                        </button>
                    </form>

                )}
            </div>
        </div>

    )

}