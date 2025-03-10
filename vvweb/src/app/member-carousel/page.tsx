"use client"

import './styles.css';
import Image from 'next/image';
// import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useState, useEffect } from 'react';
import { members as importedMembers } from '../../../public/jsons/Members.json';
import useEmblaCarousel from "embla-carousel-react"

interface Member {

    id: number;
    name: string;
    image: string;

}

export default function MemberCarousel() {

    // useState variables
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [currentCategory, setCurrentCategory] = useState("artists");
    const [currentIndex, setCurrentIndex] = useState(0);

    const slidePrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const slideNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const handleCurrentCategory = (category: string) => {

        setCurrentCategory(category);
        setCurrentIndex(0);

    }

    useEffect(() => {

        if (!emblaApi) return; // Ensure Embla is initialized

        const onSelect = () => {
            setCurrentIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        onSelect(); // Initialize index

        return () => emblaApi.off('select', onSelect); // Cleanup listener

    })

    return (

        <div className='max-w-screen'>

            {/* <!-- Member Carousel --> */}
            <section id="members" className="members-section slide-in">
                <h2 className="section-title">Meet the Collective</h2> 
                {/* <!-- New Title --> */}
                
                {/* <!-- Category Tabs --> */}
                <div className="category-tabs">
                    <span className={`tab ${currentCategory === "artists" ? 'active' : ''}`} onClick={() => handleCurrentCategory("artists")}>
                        Artists
                    </span>
                    <span className={`tab ${currentCategory === "engineers" ? 'active' : ''}`} onClick={() => handleCurrentCategory("engineers")}>
                        Engineers
                    </span>
                    <span className={`tab ${currentCategory === "videographers" ? 'active' : ''}`} onClick={() => handleCurrentCategory("videographers")}>
                        Videographers
                    </span>
                    <span className={`tab ${currentCategory === "photographers" ? 'active' : ''}`} onClick={() => handleCurrentCategory("photographers")}>
                        Photographers
                    </span>
                    <span className={`tab ${currentCategory === "editors" ? 'active' : ''}`} onClick={() => handleCurrentCategory("editors")}>
                        Editors
                    </span>
                </div>

                {/* Carousel */}
                <div className='w-full h-[350px] flex justify-center items-center'>

                    <button className='arrow left' onClick={slidePrev}> &lt; </button>

                    {/* Carousel Viewport */}
                    <div className='w-1/2 h-full overflow-hidden' ref={emblaRef}>

                        {/* Cards container */}
                        <div className='h-full flex flex-row gap-x-10'>

                            {importedMembers[currentCategory].map((artist: Member, index: number) => (

                                // Each artist card
                                <div key={index} className={`min-w-full h-full
                                                                    bg-[url('/images/Profiles/Potential%20Profile%20Backing.png')] 
                                                                    rounded-3xl bg-cover bg-blend-overlay
                                                                    flex flex-col justify-center items-center
                                                                    transition-opacity duration-300
                                                                    ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>

                                    <Image
                                        src={artist.image}
                                        width={100}
                                        height={100}
                                        alt={artist.name}
                                        style={{ borderRadius: '50%' }} // This applies to the actual image
                                    />

                                    {artist.name}

                                </div>

                            ))}

                        </div>

                    </div>

                    <button className='arrow right' onClick={slideNext}> &gt; </button>

                </div>
            
            
            </section>
            {/* <!-- END OF MEMBERS SECTION --> */}

        </div>

    );

}