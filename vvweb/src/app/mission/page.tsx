const pillars = [
  {
    title: "Quality without compromise",
    detail: "Every drop, short film, and live moment is treated like a flagship release. We obsess over the details so the art can stand taller.",
  },
  {
    title: "Collaboration over competition",
    detail: "We connect artists with engineers, directors, and designers who elevate the work while respecting the original spark.",
  },
  {
    title: "Ownership and fairness",
    detail: "Revenue shares are transparent, credits are locked in, and artists keep creative control at every stage.",
  },
];

const commitments = [
  "Weekly creative reviews to unblock projects",
  "Release playbooks tailored to each artist",
  "Hands-on production support and gear",
  "Data dashboards to track growth without losing authenticity",
];

export default function Mission() {
  return (
    <section id="mission-statement" className="section-shell">
      <div className="mb-6 flex items-center gap-2">
        <span className="badge-pill">Mission</span>
      </div>
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-3xl font-semibold sm:text-4xl">Our mission is to make artist-led work sustainable.</h2>
          <p className="text-lg text-white/80">
            Vivid Vision exists to prove that independent artists can build world-class outputs with the right support system. We mix
            creative direction, production muscle, and strategic planning to keep every project moving.
          </p>
          <div className="card-grid">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/10 via-purple-900/10 to-white/5 p-5 shadow-lg">
                <p className="text-sm font-semibold text-gradient">{pillar.title}</p>
                <p className="mt-2 text-sm text-white/80">{pillar.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-2xl p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">How we work</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-white to-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="section-divider" />
            <p className="text-sm text-white/70">
              If you are building something audacious, we want in—strategy, production, and a crew of specialists ready to move.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
