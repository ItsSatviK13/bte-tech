// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import HeroSection from '../components/sections/HeroSection'
// import WhyChooseSection from '../components/sections/WhyChooseSection'
// import ProcessSection from '../components/sections/ProcessSection'
// import ComplianceSection from '../components/sections/ComplianceSection'
// import PartnerSection from '../components/sections/PartnerSection'

// export default function HomePage() {
//   return (
//     <div className="bg-[#EFEFEF] text-[#353D65]">
//       <Navbar />
//       <main>
//         <HeroSection />
//         <ProcessSection />
//         <ComplianceSection />
//         <WhyChooseSection />
//         <PartnerSection />
//       </main>
//       <Footer />
//     </div>
//   )
// }

import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function HomePage() {
  return (
    <>
      <Seo
        title="BTE-Tech Home"
        description="BTE-Tech automates verification, financial compliance audits, and international talent screening for universities and global employers."
        canonical="https://bte-tech.com/"
        keywords="BTE-Tech, university verification, international talent screening, compliance, employer hiring"
        image="https://bte-tech.com/logo.png"
      />

      <div className="mx-auto max-w-[1360px] px-5 py-16 md:py-28 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        
        {/* Left Intro content */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-[#353D65]/5 text-[#353D65] border border-[#353D65]/10 shadow-[2px_2px_0px_0px_#353D65]">
            Next-Gen Verification & Talent Pipeline
          </span>

          <h1 className="text-4xl font-black tracking-tight text-[#353D65] md:text-6xl leading-tight">
            Building Trusted Bridges for <span className="text-[#5DA854]">Education</span> & <span className="text-[#52D5C4]">Enterprise</span>
          </h1>

          <p className="text-base text-[#353D65]/75 md:text-lg font-medium leading-relaxed">
            BTE-Tech provides robust academic candidate verification workflows for higher-ed institutions, alongside precision talent screening pipelines for leading multinational corporations.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/universities"
              className="inline-flex items-center justify-center rounded-xl border-[3px] border-[#353D65] bg-[#353D65] px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-white transition-all hover:-translate-y-0.5 shadow-[4px_4px_0px_0px_#52D5C4]"
            >
              For Universities →
            </Link>
            
            <Link
              to="/companies"
              className="inline-flex items-center justify-center rounded-xl border-[3px] border-[#353D65] bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-[#353D65] transition-all hover:-translate-y-0.5 shadow-[4px_4px_0px_0px_#353D65]"
            >
              For Companies →
            </Link>
          </div>
        </div>

        {/* Right Feature Display Card */}
        <div 
          className="rounded-[24px] bg-white p-8 md:p-12 relative overflow-hidden"
          style={{
            border: '3px solid #353D65',
            boxShadow: '8px 8px 0px 0px #353D65',
          }}
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#52D5C4]/20 blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl font-black text-[#353D65] mb-6">Choose Your Pathway</h3>
          
          <div className="space-y-5">
            <Link 
              to="/universities" 
              className="block p-5 rounded-2xl bg-[#EFEFEF]/60 border-2 border-[#353D65] transition-all hover:bg-white hover:shadow-[3px_3px_0px_0px_#353D65] group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-black text-lg text-[#353D65] group-hover:text-[#5DA854]">University Solutions</h4>
                  <p className="text-xs text-[#353D65]/70 mt-1">Application reviews, eligibility audits, & compliance mapping.</p>
                </div>
                <span className="text-xl font-black text-[#353D65]">→</span>
              </div>
            </Link>

            <Link 
              to="/companies" 
              className="block p-5 rounded-2xl bg-[#EFEFEF]/60 border-2 border-[#353D65] transition-all hover:bg-white hover:shadow-[3px_3px_0px_0px_#353D65] group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-black text-lg text-[#353D65] group-hover:text-[#52D5C4]">Company Hiring Solutions</h4>
                  <p className="text-xs text-[#353D65]/70 mt-1">Pre-employment background checks, skills vetting, & campus pipelines.</p>
                </div>
                <span className="text-xl font-black text-[#353D65]">→</span>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}