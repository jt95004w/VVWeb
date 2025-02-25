import Image from 'next/image'
import './styles.css'

export default function Hero() {

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
                    className="relative mt-[-6] mb-[2 z-[5]"
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