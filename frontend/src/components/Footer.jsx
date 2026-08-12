const quickLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
//   { label: 'Resources', href: '#resources' },
]

const solutions = [
  { label: 'Student Screening', href: '#process' },
  { label: 'Eligibility Check', href: '#process' },
//   { label: 'Reporting', href: '#resources' },
  { label: 'Support', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#353D65] text-white">
      <div className="mx-auto max-w-[1360px] px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3" aria-label="BTE-Tech home">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 bg-white/10 text-lg font-bold text-white">
                <img src='/favicon.svg' alt='BTE-Tech logo' className='h-6 w-6' />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">BTE-Tech</span>
            </a>
            <p className="max-w-xs text-sm text-white/80">
              Screening and verification with reliable student screening and evaluation to build stronger futures.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/80">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#52D5C4]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Solutions</h3>
            <ul className="space-y-3 text-sm text-white/80">
              {solutions.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#52D5C4]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="mailto:info@bte-tech.com" className="hover:text-[#52D5C4]">
                  info@bte-tech.com
                </a>
              </li>
              <li>
                <a href="tel:+919111776776" className="hover:text-[#52D5C4]">
                  +91-9111776776
                </a>
              </li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© 2024 BTE-Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#contact" className="hover:text-[#52D5C4]">Privacy Policy</a>
            <a href="#contact" className="hover:text-[#52D5C4]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
