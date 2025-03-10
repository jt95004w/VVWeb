// import Image from "next/image";
import Hero from './hero/page';
import Why from './why/page';
import Mission from './mission/page'
import MemberCarousel from './member-carousel/page';
import Socials from './socials/page';
import Contacts from './contacts/page';

export default function Home() {
  return (
    <div className='w-screen h-screen'>

        <Hero/>

        <Why/>

        <Mission/>

        <MemberCarousel/>

        <Contacts/>
        
        <Socials/>

        {/* <!-- FOOTER --> */}
        <footer className="site-footer">
          <p>© 2025 Vivid Vision Incorporated. All Rights Reserved.</p>
        </footer>

    </div>
  );
}
