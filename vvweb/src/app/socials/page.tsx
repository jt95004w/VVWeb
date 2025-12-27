const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/vvisioncollective/",
  },
];

export default function Socials() {
  return (
    <section id="socials" className="section-shell">
      <div className="glass-panel flex flex-col items-center gap-4 rounded-3xl p-10 text-center shadow-xl">
        <p className="badge-pill">Follow along</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">See the work in motion.</h2>
        <p className="max-w-2xl text-white/75">
          Behind-the-scenes looks, release announcements, and live session drops. Catch the newest updates first.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:-translate-y-0.5"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
