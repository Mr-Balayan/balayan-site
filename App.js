import React from "react";

// One-file React landing page for Balayan & Co
// TailwindCSS utility classes are used by default in this preview environment.
// Replace placeholder images with your real photos/videos when ready.

export default function BalayanCoSite() {
  const projects = [
    {
      title: "Meteorite Decanter Case",
      tag: "Luxury Spirits",
      thumb:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c76f0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Emerald Gift Box Mechanism",
      tag: "Engineering + Art",
      thumb:
        "https://images.unsplash.com/photo-1617564934946-1f6b36f2c3c9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Balayan & Co Signature Bottle",
      tag: "Limited Edition",
      thumb:
        "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Da Vinci Cryptex Cap",
      tag: "Concept",
      thumb:
        "https://images.unsplash.com/photo-1501441858153-72662f58f0cb?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/50 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-serif tracking-widest text-xl md:text-2xl">
            <span className="text-yellow-400">Balayan</span> & Co
          </a>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
            <a href="#work" className="hover:text-yellow-300">Work</a>
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
          <a
            href="#contact"
            className="md:inline-flex hidden rounded-2xl border border-yellow-400/50 px-4 py-2 text-xs tracking-widest hover:bg-yellow-400 hover:text-black transition"
          >
            Start a Project
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 md:pb-16">
          <p className="text-yellow-300/90 text-xs md:text-sm uppercase tracking-[0.35em]">Luxury Packaging • Signature Bottles • Mechanical Art</p>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            Balayan & Co
            <span className="block text-3xl md:text-5xl text-zinc-300 font-light mt-3">
              Crafting unforgettable cases & bottles for high-end spirits
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-zinc-300/90">
            We design and engineer premium packaging that elevates your brand: gold-on-black aesthetics, heraldic details, and smooth lift mechanics that present your bottle like a work of art.
          </p>
        </div>
      </section>
    </div>
  );
}