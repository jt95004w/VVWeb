// import Image from "next/image";
import Hero from './hero/page';
import Why from './why/page';
import Mission from './mission/page'
import MemberCarousel from './member-carousel/page';
import Socials from './socials/page';

export default function Home() {
  return (
    <div>

        <Hero/>

        <Why/>

        <Mission/>

        <MemberCarousel/>

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
        
        <Socials/>

        {/* <!-- FOOTER --> */}
        <footer className="site-footer">
          <p>© 2025 Vivid Vision Incorporated. All Rights Reserved.</p>
        </footer>

    </div>
  );
}
