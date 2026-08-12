import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Process', href: '#process' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full bg-[#EFEFEF]/90 backdrop-blur-sm z-50">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="BTE-Tech home">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#353D65] bg-white text-lg font-bold text-[#353D65] shadow-sm">
              <img src='/favicon.svg' alt='BTE-Tech logo' className='h-6 w-6' />
            </div>
            <span className="text-2xl font-black tracking-tight text-[#353D65]">BTE-Tech</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#353D65] transition hover:text-[#5DA854]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#353D65]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* <a
            href="#contact"
            className="rounded-md border border-[#353D65] bg-[#353D65] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2e3758]"
          >
            Partner With Us
          </a> */}
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t border-[#353D65]/10">
            <div className="mx-auto max-w-[1360px] px-5 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-2 text-sm font-medium text-[#353D65] transition hover:text-[#5DA854]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}
