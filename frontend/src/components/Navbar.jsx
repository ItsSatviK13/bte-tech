const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="bg-[#EFEFEF]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="BTE-Tech home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#353D65] bg-white text-lg font-bold text-[#353D65] shadow-sm">
            <img src='/favicon.svg' alt='BTE-Tech logo' className='h-6 w-6' />
          </div>
          <span className="text-2xl font-black tracking-tight text-[#353D65]">BTE-Tech</span>
        </a>

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

        {/* <a
          href="#contact"
          className="rounded-md border border-[#353D65] bg-[#353D65] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2e3758]"
        >
          Partner With Us
        </a> */}
      </div>
    </header>
  )
}
