import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#10110f]/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10" aria-label="Main navigation">
        <a href="#home" className="font-display text-2xl tracking-[0.28em] text-[#f6f0e4]" onClick={closeMenu}>
          SAPORE
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#e7e0d3]/75 transition-colors hover:text-[#d4ad6a]">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="border border-[#c9a466] px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#e7e0d3] transition-colors hover:bg-[#c9a466] hover:text-[#171713]">
            Reserve a Table
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/20 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="h-px w-5 bg-[#f6f0e4]" />
          <span className="h-px w-5 bg-[#f6f0e4]" />
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#10110f] px-6 py-5 lg:hidden">
          <div className="flex flex-col items-start gap-5">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="text-xs uppercase tracking-[0.2em] text-[#e7e0d3]/80 hover:text-[#d4ad6a]">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu} className="w-full border border-[#c9a466] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#e7e0d3]">
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar