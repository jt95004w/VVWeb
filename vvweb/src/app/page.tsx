import Hero from "./hero/page";
import Why from "./why/page";
import Mission from "./mission/page";
import MemberCarousel from "./member-carousel/page";
import Socials from "./socials/page";
import Contacts from "./contacts/page";

const values = [
  {
    title: "Made by artists, for artists",
    copy: "We pair creative direction with technical expertise so collaborators never have to choose between vision and execution.",
  },
  {
    title: "Modern systems",
    copy: "From release campaigns to stage design, our teams build repeatable processes that make great work sustainable.",
  },
  {
    title: "Community-first",
    copy: "We champion independent voices, run open sessions, and mentor rising talent to keep the culture evolving.",
  },
];

function ValuesStrip() {
  return (
    <section className="section-shell">
      <div className="glass-panel rounded-3xl p-8 shadow-xl">
        <div className="mb-6 flex items-center gap-3">
          <span className="badge-pill">What sets us apart</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <div className="card-grid">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-white/15 hover:bg-white/10"
            >
              <h3 className="mb-3 text-xl font-semibold text-gradient">{value.title}</h3>
              <p className="text-sm text-white/80">{value.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ValuesStrip />
      <Why />
      <Mission />
      <MemberCarousel />
      <Contacts />
      <Socials />
      <footer className="section-shell pb-20 text-sm text-white/70">
        <div className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-gradient text-lg font-semibold">Vivid Vision Collective</p>
            <p className="text-white/70">Built by independent artists pushing culture forward.</p>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#members" className="underline decoration-white/30 decoration-2 underline-offset-4 hover:text-white">
              Meet the team
            </a>
            <span className="hidden text-white/40 sm:inline">•</span>
            <a href="#tap-in" className="underline decoration-white/30 decoration-2 underline-offset-4 hover:text-white">
              Pitch a project
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/50">© 2025 Vivid Vision Incorporated. All rights reserved.</p>
      </footer>
    </main>
  );
}
