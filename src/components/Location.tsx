const trainingAddress = 'İstiklal Avenue, Beyoğlu, Istanbul, Turkey'
const openingHours = 'Monday - Sunday | 12:00 PM - 12:00 AM'
const mapUrl = 'https://www.google.com/maps?q=Istiklal+Avenue%2C+Beyoglu%2C+Istanbul%2C+Turkey&output=embed'
const directionsUrl = 'https://www.google.com/maps/search/?api=1&query=Istiklal+Avenue%2C+Beyoglu%2C+Istanbul%2C+Turkey'

function Location() {
  return (
    <section id="location" className="bg-[#20211c] px-6 py-24 text-[#f6f0e4] sm:py-32 lg:px-10 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="max-w-lg">
          <p className="mb-6 flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#d4ad6a]">
            <span className="h-px w-10 bg-[#b9985c]" aria-hidden="true" />
            Our location
          </p>
          <h2 className="font-display text-5xl leading-[1.02] tracking-[-0.02em] sm:text-6xl">
            Find Your Way<br />to <em className="font-serif text-[#d4ad6a]">Sapore.</em>
          </h2>
          <p className="mt-8 max-w-md text-base leading-7 text-[#e7e0d3]/70 sm:text-lg">
            Step off Istanbul&apos;s most storied avenue and into a slower rhythm. We look forward to welcoming you around the table.
          </p>

          <dl className="mt-10 space-y-7 border-y border-[#e7e0d3]/15 py-7 text-sm">
            <div>
              <dt className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#d4ad6a]">Address</dt>
              <dd className="max-w-xs leading-6 text-[#f6f0e4]">{trainingAddress}</dd>
              <p className="mt-1 text-xs text-[#e7e0d3]/45">Training address - easy to replace</p>
            </div>
            <div>
              <dt className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#d4ad6a]">Opening hours</dt>
              <dd className="leading-6 text-[#f6f0e4]">{openingHours.split(' | ')[0]}<br />{openingHours.split(' | ')[1]}</dd>
            </div>
          </dl>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center border border-[#c9a466] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6f0e4] transition-colors hover:bg-[#c9a466] hover:text-[#171713]"
          >
            Get Directions <span className="ml-3 text-base" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-sm border border-[#e7e0d3]/20 bg-[#171713] p-2 shadow-2xl shadow-black/20">
          <iframe
            title="Map showing Sapore's training location on Istiklal Avenue in Beyoglu, Istanbul"
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] min-h-[320px] w-full border-0 grayscale-[0.35] contrast-[0.9] sepia-[0.15] sm:min-h-[400px] lg:aspect-[5/4]"
          />
        </div>
      </div>
    </section>
  )
}

export default Location