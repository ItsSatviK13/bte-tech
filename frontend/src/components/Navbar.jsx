// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'

// const navItems = [
//   { label: 'Home', href: '/' },
//   // { label: 'Our Process', href: '#process' },
//   // { label: 'Compliance', href: '#compliance' },
//   // { label: 'Why Us', href: '#why-us' },
//   // { label: 'Contact Us', href: '#contact' },
//   {label: 'For Universities', href: '/universities' },
//   {label: 'For Companies', href: '/companies' },
// ]

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const navigate = useNavigate()

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
//   const closeMenu = () => setIsMenuOpen(false)

//   const handleScrollToContact = (e) => {
//     e.preventDefault()
//     closeMenu()
//     if (window.location.pathname !== '/universities') {
//       navigate('/universities')
//       setTimeout(() => {
//         document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
//       }, 100)
//       } else {
//         document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})
//       }
//     }

//     return (
//       <>
//         <header className="fixed top-0 left-0 right-0 w-full bg-[#EFEFEF]/85 backdrop-blur-md z-50 border-b-2 border-[#353D65]/10">
//           <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-4 lg:px-8">
//             <Link to="/" className="flex items-center gap-3 group" aria-label="BTE-Tech home">
//               <div 
//                 className="flex h-11 w-11 items-center justify-center rounded-xl bg-white transition-transform group-hover:scale-105"
//                 style={{
//                   border: '2px solid #353D65',
//                   boxShadow: '3px 3px 0px 0px #353D65',
//                 }}
//               >
//                 <img src='/logo.png' alt='BTE-Tech logo' className='h-7 w-7 rounded'/>
//               </div>
//               <span className="text-2xl font-black tracking-tight text-[#353D65]">BTE-Tech</span>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden items-center gap-3 md:flex bg-white/80 p-1.5 rounded-2xl border-2 border-[#353D65] shadow-[4px_4px_0px_0px_#353D65]">
//               {navItems.map((item) => (
//                 <Link
//                 key={item.label}
//                 to={item.href}
//                 className="px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider text-[#353D65] transition-all hover:bg-[#353D65] hover:text-white"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>

//             {/* Partner Action Button (Desktop) */}
//             <div className="hidden md:block">
//               <a
//                 href="#contact"
//                 onClick={handleScrollToContact}
//                 className="inline-flex items-center justify-center rounded-xl border-[3px] border-[#353D65] bg-[#353D65] px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-white transition-all hover:-translate-y-0.5 shadow-[3px_3px_0px_0px_#52D5C4] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#52D5C4]"
//                 >
//                 Partner With Us
//               </a>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={toggleMenu}
//               className="md:hidden p-2.5 rounded-xl bg-white border-2 border-[#353D65] text-[#353D65] shadow-[2px_2px_0px_0px_#353D65]"
//               aria-label="Toggle menu"
//               >
//               {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>

//           {/* Mobile Navigation Menu */}
//           {isMenuOpen && (
//             <nav className="md:hidden bg-white border-t-2 border-[#353D65] shadow-xl">
//               <div className="mx-auto max-w-[1360px] px-5 py-6 flex flex-col gap-3">
//                 {navItems.map((item) => (
//                   <Link
//                   key={item.label}
//                   to={item.href}
//                   onClick={closeMenu}
//                   className="block px-4 py-3 rounded-xl text-sm font-black text-[#353D65] bg-[#EFEFEF]/50 border-2 border-[#353D65]/20 transition hover:bg-[#353D65] hover:text-white hover:border-[#353D65]"
//                   >
//                     → {item.label}
//                   </Link>
//                 ))}
//                 <div className="pt-2">
//                   <a
//                     href="#contact"
//                     onClick={handleScrollToContact}
//                     className="block text-center rounded-xl border-[3px] border-[#353D65] bg-[#353D65] py-3.5 text-xs font-black uppercase tracking-[0.15em] text-white shadow-[3px_3px_0px_0px_#52D5C4]"
//                     >
//                     Partner With Us
//                   </a>
//                 </div>
//               </div>
//             </nav>
//           )}
//         </header>
//       <div className="h-20 md:h-24" />
//     </>
//   )
// }

//   return (
//     <>
//       <header className="fixed top-0 left-0 right-0 w-full bg-[#EFEFEF]/70 backdrop-blur-sm z-50">
//         <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-4 lg:px-8">
//           <a href="#home" className="flex items-center gap-3" aria-label="BTE-Tech home">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-[#353D65] shadow-sm">
//               <img src='/logo.png' alt='BTE-Tech logo' className='h-10 w-10 rounded-md'/>
//             </div>
//             <span className="text-2xl font-black tracking-tight text-[#353D65]">BTE-Tech</span>
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden items-center gap-8 md:flex">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="text-sm font-medium text-[#353D65] transition hover:text-[#5DA854]"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden p-2 text-[#353D65]"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           {/* <a
//             href="#contact"
//             className="rounded-md border border-[#353D65] bg-[#353D65] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2e3758]"
//           >
//             Partner With Us
//           </a> */}
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isMenuOpen && (
//           <nav className="md:hidden bg-white border-t border-[#353D65]/10">
//             <div className="mx-auto max-w-[1360px] px-5 py-4 flex flex-col gap-3">
//               {navItems.map((item) => (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   onClick={closeMenu}
//                   className="block py-2 text-sm font-medium text-[#353D65] transition hover:text-[#5DA854]"
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </nav>
//         )}
//       </header>
//       {/* Spacer to prevent content from hiding behind fixed navbar */}
//       <div className="h-16 md:h-20" />
//     </>
//   )
// }

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'For Universities', href: '/universities' },
  { label: 'For Companies', href: '/companies' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const handleScrollToContact = (e) => {
    e.preventDefault()
    closeMenu()
    if (window.location.pathname !== '/universities') {
      navigate('/universities')
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full bg-[#EFEFEF]/85 backdrop-blur-md z-50 border-b-2 border-[#353D65]/10">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3 group" aria-label="BTE-Tech home">
            <div 
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white transition-transform group-hover:scale-105"
              style={{
                border: '2px solid #353D65',
                boxShadow: '3px 3px 0px 0px #353D65',
              }}
            >
              <img src='/logo.png' alt='BTE-Tech logo' className='h-7 w-7 rounded'/>
            </div>
            <span className="text-2xl font-black tracking-tight text-[#353D65]">BTE-Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-3 md:flex bg-white/80 p-1.5 rounded-2xl border-2 border-[#353D65] shadow-[4px_4px_0px_0px_#353D65]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 transform ${
                    isActive
                      ? 'bg-[#353D65] text-white shadow-[2px_2px_0px_0px_#52D5C4] -translate-y-0.5'
                      : 'text-[#353D65] hover:bg-[#353D65] hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Partner Action Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center rounded-xl border-[3px] border-[#353D65] bg-[#353D65] px-5 py-2.5 text-xs font-black uppercase tracking-[0.15em] text-white transition-all hover:-translate-y-0.5 shadow-[3px_3px_0px_0px_#52D5C4] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#52D5C4]"
            >
              Partner With Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2.5 rounded-xl bg-white border-2 border-[#353D65] text-[#353D65] shadow-[2px_2px_0px_0px_#353D65]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t-2 border-[#353D65] shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="mx-auto max-w-[1360px] px-5 py-6 flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-xl text-sm font-black transition-all duration-200 border-2 ${
                      isActive
                        ? 'bg-[#353D65] text-white border-[#353D65] shadow-[3px_3px_0px_0px_#52D5C4] translate-x-1'
                        : 'text-[#353D65] bg-[#EFEFEF]/50 border-[#353D65]/20 hover:bg-[#353D65] hover:text-white hover:border-[#353D65]'
                    }`}
                  >
                    → {item.label}
                  </Link>
                )
              })}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="block text-center rounded-xl border-[3px] border-[#353D65] bg-[#353D65] py-3.5 text-xs font-black uppercase tracking-[0.15em] text-white shadow-[3px_3px_0px_0px_#52D5C4]"
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>
      <div className="h-20 md:h-24" />
    </>
  )
}