"use client"

import './styles.css';
// import Image from 'next/image';
// import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { members as importedMembers } from '../../../public/jsons/Members.json';


export default function MemberCarousel() {

    const { artists } = importedMembers;

    const members = [
        {
            name: "GEØ",
            category: "artists",
            image: "/images/Profiles/Potential Profile Backing.png",
        },
        {
            name: "Vrishabh",
            category: "artists",
            image: "/images/Profiles/Potential Profile Backing.png",
        },
        {
            name: "Hooper James",
            category: "artists",
            image: "/images/members/artist1.jpg",
        },
        {
            name: "AvThaKidd",
            category: "artists",
            image: "/images/members/artist1.jpg",
        },
        {
            name: "Griffin Louis LaFlam",
            category: "engineers",
            image: "/images/members/artist1.jpg",
        },
        {
            name: "EZRA",
            category: "engineers",
            image: "/images/members/artist1.jpg",
        },
        {
            name: "ADAM ALEXANDER",
            category: "videographers",
            image: "/images/members/artist1.jpg",
        },
        {
            name: "SAMSUNG CAMERA",
            category: "photographers",
            image: "/images/members/artist1.jpg",
        },
        {
            name: "JAMBA TINO",
            category: "editors",
            image: "/images/members/artist1.jpg",
        },
    ];

    const categories = ["artists", "engineers", "videographers", "photographers", "editors"];

    const [selectedCategory, setSelectedCategory] = useState("artists");
    const [index, setIndex] = useState(0);

    const filteredMembers = members.filter((member) => member.category === selectedCategory);

    const nextSlide = () => setIndex((prev) => (prev + 1) % filteredMembers.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + filteredMembers.length) % filteredMembers.length);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <div>

            {/* <!-- Member Carousel --> */}
            <section id="members" className="members-section slide-in">
                <h2 className="section-title">Meet the Collective</h2> 
                {/* <!-- New Title --> */}
                
                {/* <!-- Category Tabs --> */}
                <div className="category-tabs">
                    <span className="tab active" data-category="artists">Artists</span>
                    <span className="tab" data-category="engineers">Engineers</span>
                    <span className="tab" data-category="videographers">Videographers</span>
                    <span className="tab" data-category="photographers">Photographers</span>
                    <span className="tab" data-category="editors">Editors</span>
                </div>

                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {artists.map((artist) => (
                        <Carousel.Item key={artist.id} className="" interval={4000}>
                            <div className="member-card" data-category="artists">
                                {/* <img src="images\Profiles\Potential Profile Backing.png" alt="Vrishabh" className="member-image" /> */}
                                <h3 className="member-name">{artist.name}</h3>
                                <div className="member-details">
                                    <p className="member-bio">Brief artist description here.</p>
                                    <div className="social-links">
                                        {/* <a href="https://www.instagram.com/vvisioncollective/" className="spotify">
                                            <img src="images\Socials\Spotify_Primary_Logo_RGB_Green.png" alt="Spotify">
                                        </a> */}
                                        {/* <a href="https://www.instagram.com/vvisioncollective/" className="apple-music">
                                            <img src="images\Socials\Apple-Music-Logo-PNG.png" alt="Apple Music">
                                        </a> */}
                                        {/* <a href="https://www.instagram.com/vvisioncollective/" className="instagram">
                                            <img src="images\Socials\Instagram.png" alt="Instagram">
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            
            
            </section>
            {/* <!-- END OF MEMBERS SECTION --> */}

        </div>

    );

}