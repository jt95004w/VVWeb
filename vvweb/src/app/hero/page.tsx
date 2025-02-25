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
            <section className={`relative min-h-[50vh] flex flex-col items-center 
                                justify-start bg-gradient-to-r from-purple-500 to-yellow-500 
                                bg-cover bg-blend-overlay overflow-hidden p-0`}>
                {/* <!-- Center logo --> */}
                <Image 
                    src="/images/VV-text.png" 
                    alt="Logo" 
                    width={80} 
                    height={80} 
                    className="relative mt-[-6] mb-[2 z-[5]"
                    style={{ width: "30%", height: "auto" }}
                />
            
                {/* <!-- Left and Right images --> */}
                {/* <!-- */}
                <div className="flex justify-between w-full max-w-[1200px] -mt-[8rem] -mb-[7rem] z-40">

                    <Image 
                        src="/images/VV-icon.png" 
                        alt="Left Texture" 
                        width={80} 
                        height={80} 
                        className="w-[15%] transform translate-y-0 -ml-[10%]"
                        style={{ width: "15%", height: "auto" }}
                    />

                    <Image 
                        src="/images/VV-icon.png" 
                        alt="Right Texture" 
                        width={80} 
                        height={80} 
                        className="w-[15%] transform translate-y-0 -mr-[10%]"
                        style={{ width: "15%", height: "auto" }}
                    />  

                </div>
                {/* --> */}
            
                {/* <!-- Hero text --> */}
                <div className="items-center mt-[-1]">
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