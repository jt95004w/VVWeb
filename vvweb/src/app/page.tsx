// import Image from "next/image";
import Hero from './hero/page';
import Why from './why/page';

export default function Home() {
  return (
    <div>

        <Hero/>

        <Why/>

        {/* <!-- MISSION SECTION --> */}
        <section id="mission-statement" className="mission-statement slide-in">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-cards">
            <div className="mission-card" data-title="Quality">
              <p className="mission-text">
                We are committed to creating art that resonates on a profound level. From the first note to the final mix, we prioritize authenticity, innovation, and craftsmanship. We believe that great art transcends fleeting trends—it inspires, challenges, and endures, leaving a lasting impact.
              </p>
            </div>
            <div className="mission-card" data-title="Community">
              <p className="mission-text">
                Our mission is about more than music; it’s about people. We strive to amplify underrepresented voices and build platforms where creativity drives real change. Through supporting local initiatives and mentoring emerging talent, we use art as a tool to empower individuals and strengthen communities.
              </p>
            </div>
            <div className="mission-card" data-title="Independence">
              <p className="mission-text">
                We stand for artists retaining full creative control and receiving a fair share of their work’s success. In a landscape where growth often comes at the cost of independence, this collective exists to challenge that model—ensuring that artists thrive without compromise.
              </p>
            </div>
          </div>
        </section>  
        {/* <!-- END OF MISSION SECTION --> */}

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

        {/* <!-- CONTACT / CTA -->
        <section id="tap-in" className="tap-in-section slide-in">
          <!-- Tap In Button -->
          <button id="tapInButton" className="tap-in-btn">Tap In</button>
        
          <!-- Expanding Form -->
          <div id="tapInForm" className="tap-in-form">
            <form id="applicationForm">
              <label for="email">Your Email:</label>
              <input type="email" id="email" name="email" required/>
        
              <label for="message">Tell Us About Yourself:</label>
              <textarea id="message" name="message" rows={4} required></textarea>
              <label for="message">(Dropbox and Drive links accepted)</label>
              <button type="submit" className="apply-btn">Apply</button>
            </form>
          </div>
        
          <!-- Custom Submission Confirmation Screen -->
          <div id="confirmationMessage" className="confirmation-message">
            <h2> Application Submitted</h2>
            <p>We’ll be reaching out soon...</p>
          </div>
        </section> */}
        

        {/* <!-- END OF CONTACT / CTA --> */}
        
        {/* <!-- SOCIALS SECTION --> */}
        <section id="socials" className="socials-section slide-in">
          <h2 className="section-title">SEE US</h2>
          <div className="social-links">
            <a href="https://www.instagram.com/vvisioncollective/" className="instagram">
              <img src="images\Socials\Instagram.png" alt="Instagram"/>
            </a>
          </div>
        </section>
        {/* <!-- END OF SOCIALS SECTION --> */}

        {/* <!-- FOOTER --> */}
        <footer className="site-footer">
          <p>© 2025 Vivid Vision Incorporated. All Rights Reserved.</p>
        </footer>

    </div>
  );
}
