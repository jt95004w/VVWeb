"use client"

import Image from 'next/image';
import './styles.css';
import { useEffect, useState } from 'react';

export default function Hero() {

    // Carousel variables
    // Words for carousel to spin on
    const words = [
        "ARTISTS", "ENGINEERS", "VIDEOGRAPHERS", "MUSICIANS", 
        "DESIGNERS", "PHOTOGRAPHERS", "VISIONARIES", 
        "HOBBYISTS", "DOPE HUMANS", "CREATIVES"
    ];
    // Starting index of carousel
    const [currentIndex, setCurrentIndex] = useState(0);
    // Boolean variable to let program know when to stop carousel
    const [isFinalAnimation, setIsFinalAnimation] = useState(false);
    // Set starting speed
    const [speed, setSpeed] = useState(1200); 

    // Refs for parallax elements
    // const logoRef = useRef(null);
    // const leftImageRef = useRef(null);
    // const rightImageRef = useRef(null);

    useEffect(() => {

        // Stop cycling when we reach last word
        if (isFinalAnimation) return;

        // Create carousel
        const interval = setTimeout(() => {
            // Go until last word
            if (currentIndex < words.length - 1) {
                // Update index
                setCurrentIndex((prevIndex) => prevIndex + 1);
                // As long as the speed is greater than 0.2ms
                if (speed > 200) {
                    // Decrement speed by .15ms
                    setSpeed((prevSpeed) => Math.max(200, prevSpeed - 350));
                }
            }
            else {
                // If this is last word, alert final animation boolean
                setIsFinalAnimation(true);
            }
        }, speed);
        return () => clearTimeout(interval);
    });

    // Handles the scrolling parallax effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            const logo = document.querySelector(".parallax-image") as HTMLElement | null;
            const leftImage = document.querySelector(".parallax-left") as HTMLElement | null;
            const rightImage = document.querySelector(".parallax-right") as HTMLElement | null;

            if (logo) {
                logo.style.transform = `translateY(${scrollY * 0.2}px)`;
            }
            if (leftImage) {
                leftImage.style.transform = `translateY(${scrollY * 0.03}px)`;
            }
            if (rightImage) {
                rightImage.style.transform = `translateY(${scrollY * 0.05}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div>

            {/* <!-- HEADER --> */}
            <header className="site-header">
            <Image 
                src="/images/VV-icon whitegold.png" 
                alt="Logo" 
                width={80} 
                height={80} 
                className="logo-img"
            />
            <nav className="main-nav">
                <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#mission-statement">Mission</a></li>
                <li><a href="#members">Team</a></li>
                <li><a href="#tap-in">Join</a></li>
                </ul>
            </nav>
            </header> 

            {/* <!-- HERO SECTION --> */}
            <section className="hero">
                {/* <!-- Center logo --> */}
                <Image 
                    src="/images/VV-text.png" 
                    alt="Logo" 
                    width={80} 
                    height={80} 
                    className="relative mt-[-6] mb-[2 z-[5] parallax-image"
                    style={{ width: "30%", height: "auto" }}
                />
                
                {/* <!-- Left and Right images --> */}
                {/* <!-- */}
                <div className="hero-images">
                    <Image 
                        src="/images/VV-icon.png" 
                        alt="Left Texture" 
                        width={80} 
                        height={80} 
                        className="w-[15%] transform translate-y-0 -ml-[10%] parallax-left"
                        style={{ width: "15%", height: "auto" }}
                    />

                    <Image 
                        src="/images/VV-icon.png" 
                        alt="Right Texture" 
                        width={80} 
                        height={80} 
                        className="w-[15%] transform translate-y-0 -mr-[10%] parallax-right"
                        style={{ width: "15%", height: "auto" }}
                    /> 
                </div>
                {/* --> */}
                
                {/* <!-- Hero text --> */}
                <div className="hero-overlay">
                    <p className="intro-text">A collective of:</p>
                    <p className="key-roles">
                    <span className="dynamic-words">
                        {words.map((word, index) => (
                            <span
                                key={index}
                                className={`word 
                                    ${index < currentIndex ? "inactive" : ""}
                                    ${index === currentIndex ? "active" : ""} 
                                    ${index === words.length - 1 ? "final-word" : ""} 
                                    ${isFinalAnimation && index === words.length - 1 ? "final-animate" : ""}
                                `}
                            >
                                {word}
                            </span>
                        ))}
                    </span>
                    </p>
                    <p className="hero-statement">
                    working to facilitate real art, 
                    <span className="emphasis">nothing less.</span>
                    </p>
                    <p className="tagline">This is the <span className="glow">vision</span>.</p>
                </div>
            </section>

        </div>
    )

}