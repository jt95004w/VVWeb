import './styles.css';

export default function Mission() {

    return (

        <div>

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

        </div>

    )

}