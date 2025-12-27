const reasons = [
  {
    title: "We protect creative control",
    description: "Artists keep their masters, their story, and their aesthetic. We simply build the runway for launches and tours.",
  },
  {
    title: "We ship like a studio",
    description: "Sprint-based planning, weekly feedback, and cross-discipline pods make even ambitious ideas feel organized.",
  },
  {
    title: "We keep it human",
    description: "Mentorship, honest critique, and transparent revenue splits ensure the collective stays equitable and kind.",
  },
];

const tracks = [
  {
    label: "Release Lab",
    summary: "Campaign strategy, visual identity, and rollout calendars for singles and EPs.",
  },
  {
    label: "Stagecraft",
    summary: "Lighting, projection, and performance direction to make shows unforgettable.",
  },
  {
    label: "Content Systems",
    summary: "Weekly capture pipelines, social edits, and automation so the feed never sleeps.",
  },
];

export default function Why() {
  return (
    <section id="why" className="section-shell">
      <div className="mb-4 flex items-center gap-2">
        <span className="badge-pill">Why we exist</span>
      </div>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            A collective built to make bold ideas feel inevitable.
          </h2>
          <p className="text-lg text-white/80">
            Vivid Vision is a home for the obsessives—storytellers, engineers, performers, and filmmakers who want to move faster without
            sacrificing intent. We collaborate like a studio but stay as independent as the people we back.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-2xl border border-white/5 bg-white/5 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gradient">{reason.title}</h3>
                <p className="mt-2 text-sm text-white/75">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-2xl p-6 shadow-lg">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">What we activate</p>
            <div className="mt-4 space-y-4">
              {tracks.map((track) => (
                <div key={track.label} className="rounded-xl border border-white/5 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-gradient">{track.label}</p>
                  <p className="text-sm text-white/75">{track.summary}</p>
                </div>
              ))}
            </div>
            <div className="section-divider" />
            <p className="text-sm text-white/70">
              Tell us the story you want to tell. We will build the release plan, assemble the crew, and keep the momentum going long
              after the premiere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
