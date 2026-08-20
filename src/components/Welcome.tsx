function Welcome() {
  return (
    <section id="welcome" className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-[#171713] px-6 py-28 text-center text-[#f6f0e4] sm:min-h-[680px] lg:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515003197210-e0b6c1c6f0f5?auto=format&fit=crop&w=2200&q=85')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#171713]/75" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,16,14,0.65),rgba(15,16,14,0.82))]" aria-hidden="true" />

      <div className="relative max-w-3xl">
        <p className="hero-reveal mb-7 flex items-center justify-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#d4ad6a]">
          <span className="h-px w-10 bg-[#b9985c]" aria-hidden="true" />
          Your table awaits
          <span className="h-px w-10 bg-[#b9985c]" aria-hidden="true" />
        </p>
        <h2 className="hero-reveal font-display text-5xl leading-[1.02] tracking-[-0.02em] sm:text-7xl" style={{ animationDelay: '140ms' }}>
          Come Hungry.<br /><em className="font-serif text-[#d4ad6a]">Leave with a Story.</em>
        </h2>
        <p className="hero-reveal mx-auto mt-8 max-w-xl text-base leading-7 text-[#e7e0d3]/75 sm:text-lg" style={{ animationDelay: '280ms' }}>
          Join us at Sapore for handmade pasta, honest ingredients, and an evening worth remembering.
        </p>
        <div className="hero-reveal mt-10 flex flex-col justify-center gap-4 sm:flex-row" style={{ animationDelay: '420ms' }}>
          <a href="#contact" className="inline-flex items-center justify-center bg-[#c9a466] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#171713] transition-colors hover:bg-[#e0bf83]">
            Reserve a Table
          </a>
          <a href="#features" className="inline-flex items-center justify-center border border-[#e7e0d3]/55 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6f0e4] transition-colors hover:border-[#d4ad6a] hover:text-[#d4ad6a]">
            Explore the Menu <span className="ml-3 text-base" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Welcome