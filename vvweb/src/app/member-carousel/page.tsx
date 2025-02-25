import './styles.css';

export default function MemberCarousel() {

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
            
            {/* <!-- Member Carousel --> */}
            <div className="carousel">
                <button className="arrow left-arrow">&lt;</button> 
                {/* <!-- Left Arrow --> */}
                <div className="carousel-inner">
                {/* <!-- ARTISTS --> */}
                <div className="member-card" data-category="artists">
                    <img src="images\Profiles\Potential Profile Backing.png" alt="GEØ" className="member-image" />
                    <h3 className="member-name">GEØ</h3>
                    <div className="member-details">
                    <p className="member-bio">Brief artist description here.</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/vvisioncollective/" className="spotify">
                        <img src="images\Socials\Spotify_Primary_Logo_RGB_Green.png" alt="Spotify"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="apple-music">
                        <img src="images\Socials\Apple-Music-Logo-PNG.png" alt="Apple Music"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="instagram">
                        <img src="images\Socials\Instagram.png" alt="Instagram"/>
                        </a>
                    </div>
                    </div>
                </div>
                
                <div className="member-card" data-category="artists">
                    <img src="images\Profiles\Potential Profile Backing.png" alt="Vrishabh" className="member-image" />
                    <h3 className="member-name">Vrishabh</h3>
                    <div className="member-details">
                    <p className="member-bio">Brief artist description here.</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/vvisioncollective/" className="spotify">
                        <img src="images\Socials\Spotify_Primary_Logo_RGB_Green.png" alt="Spotify"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="apple-music">
                        <img src="images\Socials\Apple-Music-Logo-PNG.png" alt="Apple Music"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="instagram">
                        <img src="images\Socials\Instagram.png" alt="Instagram"/>
                        </a>
                    </div>
                    </div>
                </div>
                
                <div className="member-card" data-category="artists">
                    <img src="images/members/artist1.jpg" alt="Hooper James" className="member-image" />
                    <h3 className="member-name">Hooper James</h3>
                    <div className="member-details">
                    <p className="member-bio">Brief artist description here.</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/vvisioncollective/" className="spotify">
                        <img src="images\Socials\Spotify_Primary_Logo_RGB_Green.png" alt="Spotify"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="apple-music">
                        <img src="images\Socials\Apple-Music-Logo-PNG.png" alt="Apple Music"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="instagram">
                        <img src="images\Socials\Instagram.png" alt="Instagram"/>
                        </a>
                    </div>
                    </div>
                </div>
                
                <div className="member-card" data-category="artists">
                    <img src="images/members/artist1.jpg" alt="AvThaKidd" className="member-image" />
                    <h3 className="member-name">AvThaKidd</h3>
                    <div className="member-details">
                    <p className="member-bio">Brief artist description here.</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/vvisioncollective/" className="spotify">
                        <img src="images\Socials\Spotify_Primary_Logo_RGB_Green.png" alt="Spotify"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="apple-music">
                        <img src="images\Socials\Apple-Music-Logo-PNG.png" alt="Apple Music"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="instagram">
                        <img src="images\Socials\Instagram.png" alt="Instagram"/>
                        </a>
                    </div>
                    </div>
                </div>

                {/* <!-- ENGINEERS --> */}
                <div className="member-card" data-category="engineers">
                    <img src="images/members/artist1.jpg" alt="Griffin Louis LaFlam" className="member-image" />
                    <h3 className="member-name">Griffin Louis LaFlam</h3>
                    <div className="member-details">
                    <p className="member-bio">Brief artist description here.</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/vvisioncollective/" className="spotify">
                        <img src="images\Socials\Spotify_Primary_Logo_RGB_Green.png" alt="Spotify"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="apple-music">
                        <img src="images\Socials\Apple-Music-Logo-PNG.png" alt="Apple Music"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="instagram">
                        <img src="images\Socials\Instagram.png" alt="Instagram"/>
                        </a>
                    </div>
                    </div>
                </div>

                <div className="member-card" data-category="engineers">
                    <img src="images/members/artist1.jpg" alt="EZRA" className="member-image" />
                    <h3 className="member-name">EZRA</h3>
                    <div className="member-details">
                    <p className="member-bio">Brief artist description here.</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/vvisioncollective/" className="spotify">
                        <img src="images\Socials\Spotify_Primary_Logo_RGB_Green.png" alt="Spotify"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="apple-music">
                        <img src="images\Socials\Apple-Music-Logo-PNG.png" alt="Apple Music"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="instagram">
                        <img src="images\Socials\Instagram.png" alt="Instagram"/>
                        </a>
                    </div>
                    </div>
                </div>

                {/* <!-- VIDEOGRAPHERS --> */}

                <div className="member-card" data-category="videographers">
                    <img src="images/members/artist1.jpg" alt="AAA" className="member-image" />
                    <h3 className="member-name">ADAM ALEXANDER</h3>
                    <div className="member-details">
                    <div className="social-links">
                        <a href="https://www.instagram.com/vvisioncollective/" className="spotify">
                        <img src="images\Socials\Spotify_Primary_Logo_RGB_Green.png" alt="Spotify"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="apple-music">
                        <img src="images\Socials\Apple-Music-Logo-PNG.png" alt="Apple Music"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="instagram">
                        <img src="images\Socials\Instagram.png" alt="Instagram"/>
                        </a>
                    </div>
                    </div>
                </div>

                {/* <!-- PHOTOGRAPHERS --> */}

                <div className="member-card" data-category="photographers">
                    <img src="images/members/artist1.jpg" alt="SAMSUNG CAMERA" className="member-image" />
                    <h3 className="member-name">ADAM ALEXANDER</h3>
                    <div className="member-details">
                    <p className="member-bio">Brief artist description here.</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/vvisioncollective/" className="spotify">
                        <img src="images\Socials\Spotify_Primary_Logo_RGB_Green.png" alt="Spotify"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="apple-music">
                        <img src="images\Socials\Apple-Music-Logo-PNG.png" alt="Apple Music"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="instagram">
                        <img src="images\Socials\Instagram.png" alt="Instagram"/>
                        </a>
                    </div>
                    </div>
                </div>

                {/* <!-- EDITORS --> */}

                <div className="member-card" data-category="editors">
                    <img src="images/members/artist1.jpg" alt="JAMBA TINO" className="member-image" />
                    <h3 className="member-name">JAMBA TINO</h3>
                    <div className="member-details">
                    <p className="member-bio">Brief artist description here.</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/vvisioncollective/" className="spotify">
                        <img src="images\Socials\Spotify_Primary_Logo_RGB_Green.png" alt="Spotify"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="apple-music">
                        <img src="images\Socials\Apple-Music-Logo-PNG.png" alt="Apple Music"/>
                        </a>
                        <a href="https://www.instagram.com/vvisioncollective/" className="instagram">
                        <img src="images\Socials\Instagram.png" alt="Instagram"/>
                        </a>
                    </div>  
                    </div>
                </div>


                </div>          
                <button className="arrow right-arrow">&gt;</button> 
                {/* <!-- Right Arrow --> */}
            </div>
            </section>
            {/* <!-- END OF MEMBERS SECTION --> */}

        </div>

    )

}