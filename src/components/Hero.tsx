function Hero() {
  return (
    <main id="home" className="relative flex min-h-screen items-end overflow-hidden bg-[#171713] pt-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2200&q=85')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,16,14,0.9)_0%,rgba(15,16,14,0.62)_48%,rgba(15,16,14,0.38)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,16,14,0.82)_0%,transparent_45%)]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-24">
        <div className="max-w-3xl">
          <p className="hero-reveal mb-7 flex items-center gap-4 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-[#d4ad6a]" style={{ animationDelay: '100ms' }}>
            <span className="h-px w-10 bg-[#d4ad6a]" />
            Istanbul · Since 2014
          </p>
          <h1 className="hero-reveal font-display text-5xl leading-[0.98] tracking-[-0.02em] text-[#f6f0e4] sm:text-7xl lg:text-8xl" style={{ animationDelay: '220ms' }}>
            The soul of Italy,<br /><em className="font-serif text-[#d4ad6a]">served slowly.</em>
          </h1>
          <p className="hero-reveal mt-8 max-w-lg text-base leading-7 text-[#e7e0d3]/75 sm:text-lg" style={{ animationDelay: '340ms' }}>
            An intimate table in the heart of Istanbul, where handmade pasta, honest ingredients, and the warmth of Italian hospitality meet.
          </p>
          <div className="hero-reveal mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: '460ms' }}>
            <a href="#contact" className="inline-flex items-center justify-center bg-[#c9a466] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#171713] transition-colors hover:bg-[#e0bf83]">
              Reserve a Table
            </a>
            <a href="#features" className="inline-flex items-center justify-center border border-[#e7e0d3]/50 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6f0e4] transition-colors hover:border-[#d4ad6a] hover:text-[#d4ad6a]">
              Explore Menu <span className="ml-3 text-base" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between border-t border-white/20 pt-5 text-[0.62rem] uppercase tracking-[0.2em] text-[#e7e0d3]/55 lg:mt-20">
          <span>Fine Italian dining</span>
          <span className="hidden sm:inline">Scroll to discover <span className="ml-2 text-[#d4ad6a]">↓</span></span>
        </div>
      </div>
    </main>
  )
}

export default Hero