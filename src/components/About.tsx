function About() {
  return (
    <section id="about" className="bg-[#ebe4d7] px-6 py-24 text-[#20211c] sm:py-32 lg:px-10 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -bottom-5 -left-5 h-28 w-28 border-b border-l border-[#b9985c] sm:-bottom-7 sm:-left-7" aria-hidden="true" />
          <div className="relative overflow-hidden bg-[#d8d0c2]">
            <img
              src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=85"
              alt="Handmade pasta being prepared on a wooden table"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
          <p className="absolute -right-5 bottom-7 hidden bg-[#20211c] px-4 py-3 text-[0.62rem] uppercase tracking-[0.22em] text-[#e7e0d3] sm:block">
            Pasta fatta a mano
          </p>
        </div>

        <div className="max-w-xl">
          <p className="mb-6 flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#a47c3c]">
            <span className="h-px w-10 bg-[#b9985c]" aria-hidden="true" />
            Our story
          </p>
          <h2 className="font-display text-5xl leading-[1.02] tracking-[-0.02em] text-[#20211c] sm:text-6xl">
            A little piece of <em className="font-serif text-[#a47c3c]">Italy</em>,<br />made in Istanbul.
          </h2>
          <div className="mt-8 space-y-5 text-[0.98rem] leading-8 text-[#20211c]/70 sm:text-lg">
            <p>
              Sapore began with a simple belief: the most memorable meals are made with time, care, and ingredients that speak for themselves.
            </p>
            <p>
              From authentic family recipes to pasta rolled by hand each morning, our kitchen brings the generous spirit of Italy to the heart of Istanbul. Every plate is an invitation to slow down, gather close, and feel at home.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-5 border-t border-[#20211c]/15 pt-5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#20211c]/60">
            <span className="font-display text-3xl font-normal normal-case tracking-normal text-[#a47c3c]">10</span>
            <span className="max-w-[150px] leading-5">years of bringing people to the table</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About