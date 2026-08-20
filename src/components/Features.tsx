const features = [
  {
    number: '01',
    title: 'Handmade Pasta',
    description: 'Rolled, shaped, and finished by hand each morning for a texture you can feel in every bite.',
  },
  {
    number: '02',
    title: 'Fresh Ingredients',
    description: 'Seasonal produce, excellent olive oil, and carefully chosen ingredients let simplicity shine.',
  },
  {
    number: '03',
    title: 'Authentic Recipes',
    description: 'Time-honoured recipes travel from Italian family tables to our kitchen in Istanbul.',
  },
  {
    number: '04',
    title: 'Warm Hospitality',
    description: 'A generous welcome, an unhurried table, and the feeling that you have arrived among friends.',
  },
]

function Features() {
  return (
    <section id="features" className="bg-[#171713] px-6 py-24 text-[#f6f0e4] sm:py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-6 flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#d4ad6a]">
              <span className="h-px w-10 bg-[#b9985c]" aria-hidden="true" />
              The Sapore way
            </p>
            <h2 className="max-w-md font-display text-5xl leading-[1.02] tracking-[-0.02em] sm:text-6xl">
              Made with <em className="font-serif text-[#d4ad6a]">intention.</em>
            </h2>
            <p className="mt-7 max-w-sm text-base leading-7 text-[#e7e0d3]/65">
              Every detail has a purpose: to bring the generous, unhurried spirit of an Italian meal to your table.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 sm:gap-y-16">
            {features.map((feature) => (
              <li key={feature.number} className="group border-t border-[#e7e0d3]/20 pt-5 transition-transform duration-500 hover:-translate-y-1">
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b9985c] text-[0.65rem] font-semibold tracking-[0.14em] text-[#d4ad6a] transition-colors duration-300 group-hover:bg-[#d4ad6a] group-hover:text-[#171713]" aria-hidden="true">
                    {feature.number}
                  </span>
                  <span className="h-px w-12 bg-[#b9985c]/60 transition-all duration-500 group-hover:w-20" aria-hidden="true" />
                </div>
                <h3 className="font-display text-3xl text-[#f6f0e4]">{feature.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-6 text-[#e7e0d3]/60">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features