"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { members as importedMembers } from "../../../public/jsons/Members.json";

interface Member {
  id: number;
  name: string;
  image: string;
}

const categoryLabels: Record<string, string> = {
  artists: "Artists",
  engineers: "Engineers",
  videographers: "Videographers",
  photographers: "Photographers",
  editors: "Editors",
};

export default function MemberCarousel() {
  const [currentCategory, setCurrentCategory] = useState<string>("artists");

  const roster = useMemo(() => importedMembers[currentCategory] ?? [], [currentCategory]);

  return (
    <section id="members" className="section-shell">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="badge-pill mb-2">Collective roster</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Meet the people shaping the vision.</h2>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {Object.keys(categoryLabels).map((categoryKey) => (
          <button
            key={categoryKey}
            onClick={() => setCurrentCategory(categoryKey)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              currentCategory === categoryKey
                ? "border-white/40 bg-white/10 text-white"
                : "border-white/10 bg-white/5 text-white/70 hover:border-white/30"
            }`}
          >
            {categoryLabels[categoryKey]}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roster.map((member: Member) => (
          <div
            key={member.id}
            className="glass-panel relative overflow-hidden rounded-2xl p-5 shadow-lg transition hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-purple-900/10 to-transparent" />
            <div className="relative flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full border border-white/10 bg-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-cover"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gradient">{member.name}</p>
                <p className="text-sm uppercase tracking-wide text-white/60">{categoryLabels[currentCategory]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-white/5 bg-white/5 p-6 text-sm text-white/75">
        Looking for a specific collaborator? Drop us a line with the role you need and we will assemble the right pod.
      </div>
    </section>
  );
}
