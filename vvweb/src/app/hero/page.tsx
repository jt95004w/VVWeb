"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const rotatingWords = ["artists", "engineers", "directors", "designers", "curators", "producers"];

const stats = [
  { label: "Cities represented", value: "6" },
  { label: "Projects shipped", value: "120+" },
  { label: "Disciplines", value: "10" },
];

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      setActiveWord((index) => (index + 1) % rotatingWords.length);
    }, 2200);

    return () => clearInterval(handle);
  }, []);

  const wordList = useMemo(
    () => rotatingWords.map((word, index) => ({ word, active: index === activeWord })),
    [activeWord]
  );

  return (
    <section className="section-shell" id="top">
      <div className="mb-8 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70">
        <div className="flex items-center gap-3">
          <Image src="/images/VV-icon whitegold.png" alt="Vivid Vision logo" width={44} height={44} className="h-11 w-11" />
          <span className="text-gradient font-semibold">Vivid Vision Collective</span>
        </div>
        <nav className="hidden items-center gap-6 sm:flex">
          <a href="#why" className="hover:text-white">Why us</a>
          <a href="#mission-statement" className="hover:text-white">Mission</a>
          <a href="#members" className="hover:text-white">Roster</a>
          <a href="#tap-in" className="hover:text-white">Join</a>
        </nav>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 via-purple-600/10 to-white/5 p-8 shadow-2xl sm:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(243,199,106,0.25),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(107,58,168,0.24),transparent_30%)]" />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="badge-pill mb-4">Independent and unstoppable</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
              Building a collective where <span className="text-gradient">creatives thrive</span> together.
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-white/80">
              We craft culture-defining experiences across music, visuals, and technology. Every release, show, and collaboration
              is a partnership—artists keep their voice while we amplify the signal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#members"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-purple-900 shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore the roster
              </a>
              <a
                href="#tap-in"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/50"
              >
                Pitch a project
              </a>
            </div>
            <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="badge-pill">A collective of</span>
                <div className="flex items-center gap-2 text-lg font-semibold">
                  {wordList.map(({ word, active }) => (
                    <span
                      key={word}
                      className={`transition duration-500 ${active ? "text-gradient" : "text-white/40"}`}
                    >
                      {active ? word : "."}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-white/70">Made for collaborators who want to move fast without losing soul.</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel relative h-full rounded-2xl p-6 shadow-lg">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-white/10 to-purple-500/30 blur-3xl" />
              <div className="relative grid gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm">
                  <p className="text-sm text-white/60">Next drop</p>
                  <p className="text-2xl font-semibold text-gradient">Volume 03: Live Sessions</p>
                  <p className="mt-2 text-sm text-white/70">A curated set of studio sessions going public this season.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-center">
                      <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                      <p className="text-xs uppercase tracking-wide text-white/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-white/5 bg-gradient-to-r from-white/10 via-purple-500/10 to-white/5 p-4 text-sm text-white/80">
                  <p className="font-semibold text-gradient">We go beyond visuals.</p>
                  <p className="mt-1">
                    Strategy decks, roll-out calendars, creative sprints, and production labs tailored for artists who want a long game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
