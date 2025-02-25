import Image from 'next/image'
import Link from 'next/link';

export default function Hero() {

    return (
        <div>

            {/* <!-- HEADER --> */}
            <header className="sticky top-0 z-[999] flex items-center bg-gray-800 px-4 py-2 -mr-1">
                <Image 
                    src="/images/VV-icon whitegold.png" 
                    alt="Logo" 
                    width={80} 
                    height={80} 
                    className="logo-img"
                    style={{ width: "6%", height: "auto", minWidth: "80px" }}
                />
                <nav className="ml-[65%]">
                    <ul className="flex gap-[4%] m-0 p-0 list-none">
                        <li>
                            <Link href="/" className="text-white text-[170%] font-semibold px-[1%] py-[0.5%] transition-colors duration-200 hover:text-gold active:text-gold">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/#mission-statement" className="text-white text-[170%] font-semibold px-[1%] py-[0.5%] transition-colors duration-200 hover:text-gold">
                                Mission
                            </Link>
                        </li>
                        <li>
                            <Link href="/#members" className="text-white text-[170%] font-semibold px-[1%] py-[0.5%] transition-colors duration-200 hover:text-gold">
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link href="/#tap-in" className="text-white text-[170%] font-semibold px-[1%] py-[0.5%] transition-colors duration-200 hover:text-gold">
                                Join
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header> 

            {/* <!-- HERO SECTION --> */}
            <section className="hero">
                {/* <!-- Center logo --> */}
                <img src="images/VV-text.png" alt="Logo" className="parallax-image"/>
            
                {/* <!-- Left and Right images --> */}
                {/* <!-- */}
                <div className="hero-images">
                    <img src="images/VV-icon.png" alt="Left Texture" className="parallax-left"/>
                    <img src="images/VV-icon.png" alt="Right Texture" className="parallax-right"/>
                </div>
                {/* --> */}
            
                {/* <!-- Hero text --> */}
                <div className="hero-overlay">
                    <p className="intro-text">A collective of:</p>
                    <p className="key-roles">
                    <span className="dynamic-words">
                        <span>ARTISTS</span>
                        <span>ENGINEERS</span>
                        <span>VIDEOGRAPHERS</span>
                        <span>MUSICIANS</span>
                        <span>DESIGNERS</span>
                        <span>PHOTOGRAPHERS</span>
                        <span>VISIONARIES</span>        
                        <span>HOBBYISTS</span>          
                        <span>DOPE HUMANS</span>          
                        <span>CREATIVES</span>
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