// import { Link } from 'react-router-dom'

// const mncSteps = [
//   {
//     number: '01',
//     title: 'Credential Verification',
//     description: 'Instant cross-referencing of candidate degrees, certifications, and past employment credentials.',
//   },
//   {
//     number: '02',
//     title: 'Skill & Competency Audit',
//     description: 'Rigorous assessment modules designed to validate technical proficiency for specific corporate roles.',
//   },
//   {
//     number: '03',
//     title: 'Compliance & Background Screening',
//     description: 'Enterprise-grade background reviews satisfying corporate compliance frameworks safely.',
//   },
//   {
//     number: '04',
//     title: 'Enterprise Talent Dashboard',
//     description: 'A unified portal allowing recruitment teams to track and filter top-tier verified candidate pipelines.',
//   },
// ]

// export default function MncPage() {
//   return (
//     <div className="py-12 md:py-20">
      
//       {/* MNC Hero Sub-section */}
//       <section className="mx-auto max-w-[1360px] px-5 lg:px-8 mb-20">
//         <div className="grid gap-12 lg:grid-cols-2 items-center">
//           <div className="space-y-6">
//             <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-[#353D65]/5 text-[#353D65] border border-[#353D65]/10 shadow-[2px_2px_0px_0px_#353D65]">
//               Enterprise Recruitment
//             </span>

//             <h1 className="text-4xl font-black tracking-tight text-[#353D65] md:text-5xl leading-tight">
//               Verified Talent Pipelines for Leading MNCs
//             </h1>

//             <p className="text-base text-[#353D65]/75 md:text-lg font-medium leading-relaxed">
//               Accelerate your hiring cycles with risk-free candidate screening, credential checks, and automated compliance tracking tailored for high-volume enterprise recruitment.
//             </p>

//             <div className="pt-2">
//               <a
//                 href="#corporate-contact"
//                 className="inline-flex items-center justify-center rounded-xl border-[3px] border-[#353D65] bg-[#353D65] px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-white transition-all hover:-translate-y-0.5 shadow-[4px_4px_0px_0px_#52D5C4]"
//               >
//                 Request Enterprise Access →
//               </a>
//             </div>
//           </div>

//           <div 
//             className="rounded-[24px] bg-white p-8 relative"
//             style={{
//               border: '3px solid #353D65',
//               boxShadow: '8px 8px 0px 0px #353D65',
//             }}
//           >
//             <h3 className="text-xl font-black text-[#353D65] mb-4">Enterprise Metrics</h3>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="p-4 rounded-xl bg-[#EFEFEF]/50 border-2 border-[#353D65]/20">
//                 <div className="text-3xl font-black text-[#353D65]">99.8%</div>
//                 <div className="text-xs font-bold text-[#353D65]/70 mt-1">Verification Accuracy</div>
//               </div>
//               <div className="p-4 rounded-xl bg-[#EFEFEF]/50 border-2 border-[#353D65]/20">
//                 <div className="text-3xl font-black text-[#353D65]">3x Faster</div>
//                 <div className="text-xs font-bold text-[#353D65]/70 mt-1">Time to Onboard</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Corporate Workflow Steps */}
//       <section className="bg-white/40 py-16 border-y-2 border-[#353D65]/10 mb-20">
//         <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
//           <div className="mb-14 text-center max-w-2xl mx-auto">
//             <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-4xl">
//               The Corporate Screening Pipeline
//             </h2>
//             <p className="mt-4 text-sm text-[#353D65]/70 font-medium">
//               Seamless vetting protocols built to protect corporate compliance standards.
//             </p>
//           </div>

//           <div className="grid gap-6 md:grid-cols-4">
//             {mncSteps.map((step) => (
//               <div 
//                 key={step.number}
//                 className="rounded-[20px] bg-white p-6 relative flex flex-col justify-between"
//                 style={{
//                   border: '3px solid #353D65',
//                   boxShadow: '6px 6px 0px 0px #353D65',
//                 }}
//               >
//                 <div>
//                   <div 
//                     className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black mb-5"
//                     style={{
//                       backgroundColor: '#ffffff',
//                       color: '#353D65',
//                       border: '2px solid #353D65',
//                       boxShadow: '2px 2px 0px 0px #353D65',
//                     }}
//                   >
//                     {step.number}
//                   </div>
//                   <h3 className="text-lg font-black text-[#353D65] mb-2">{step.title}</h3>
//                   <p className="text-xs leading-6 text-[#353D65]/75 font-medium">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Corporate Contact Section */}
//       <section id="corporate-contact" className="mx-auto max-w-[800px] px-5 lg:px-8">
//         <div 
//           className="rounded-[24px] bg-white p-8 md:p-12 relative"
//           style={{
//             border: '3px solid #353D65',
//             boxShadow: '8px 8px 0px 0px #353D65',
//           }}
//         >
//           <h2 className="text-2xl font-black text-[#353D65] mb-2">Partner with BTE-Tech for Enterprise Hiring</h2>
//           <p className="text-xs text-[#353D65]/75 font-medium mb-6">Connect with our corporate integration specialists today.</p>
          
//           <form onSubmit={(e) => { e.preventDefault(); alert('Enterprise enquiry submitted successfully!'); }} className="space-y-4">
//             <div className="grid gap-4 md:grid-cols-2">
//               <div>
//                 <label className="mb-1 block text-xs font-black uppercase tracking-wider text-[#353D65]">Full Name</label>
//                 <input required type="text" placeholder="Full Name" className="w-full rounded-xl border-[2px] border-[#353D65] bg-[#EFEFEF]/50 px-4 py-3 text-sm font-bold text-[#353D65] outline-none" />
//               </div>
//               <div>
//                 <label className="mb-1 block text-xs font-black uppercase tracking-wider text-[#353D65]">Corporate Email</label>
//                 <input required type="email" placeholder="name@company.com" className="w-full rounded-xl border-[2px] border-[#353D65] bg-[#EFEFEF]/50 px-4 py-3 text-sm font-bold text-[#353D65] outline-none" />
//               </div>
//             </div>
//             <div>
//               <label className="mb-1 block text-xs font-black uppercase tracking-wider text-[#353D65]">Company Name</label>
//               <input required type="text" placeholder="Organization / Enterprise" className="w-full rounded-xl border-[2px] border-[#353D65] bg-[#EFEFEF]/50 px-4 py-3 text-sm font-bold text-[#353D65] outline-none" />
//             </div>
//             <button
//               type="submit"
//               className="mt-4 w-full rounded-xl border-[3px] border-[#353D65] bg-[#353D65] py-3.5 text-xs font-black uppercase tracking-[0.15em] text-white shadow-[4px_4px_0px_0px_#52D5C4]"
//             >
//               Submit Enterprise Request →
//             </button>
//           </form>
//         </div>
//       </section>

//     </div>
//   )
// }

import ProcessSection from '../components/sections/ProcessSection'
import WhyChooseSection from '../components/sections/WhyChooseSection'
import PartnerSection from '../components/sections/PartnerSection'
import { mncHeroData, mncProcessSteps, mncWhyChooseFeatures } from '../data/mncData'

export default function MncPage() {
  return (
    <>
      {/* Custom MNC Hero Sub-section */}
      <section className="bg-[#EFEFEF] py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#353D65_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="mx-auto max-w-[1360px] px-5 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-[#353D65]/5 text-[#353D65] border border-[#353D65]/10 shadow-[2px_2px_0px_0px_#353D65]">
                {mncHeroData.badge}
              </span>

              <h1 className="text-4xl font-black tracking-tight text-[#353D65] md:text-5xl leading-tight">
                {mncHeroData.title}
              </h1>

              <p className="text-base text-[#353D65]/75 md:text-lg font-medium leading-relaxed">
                {mncHeroData.description}
              </p>

              <div className="pt-2">
                <a
                  href={mncHeroData.buttonHref}
                  className="inline-flex items-center justify-center rounded-xl border-[3px] border-[#353D65] bg-[#353D65] px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-white transition-all hover:-translate-y-0.5 shadow-[4px_4px_0px_0px_#52D5C4]"
                >
                  {mncHeroData.buttonText} →
                </a>
              </div>
            </div>

            <div 
              className="rounded-[24px] bg-white p-8 relative"
              style={{
                border: '3px solid #353D65',
                boxShadow: '8px 8px 0px 0px #353D65',
              }}
            >
              <h3 className="text-xl font-black text-[#353D65] mb-4">Enterprise Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {mncHeroData.metrics.map((metric, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#EFEFEF]/50 border-2 border-[#353D65]/20">
                    <div className="text-3xl font-black text-[#353D65]">{metric.value}</div>
                    <div className="text-xs font-bold text-[#353D65]/70 mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reused Process Section with MNC Data */}
      <ProcessSection 
        steps={mncProcessSteps} 
        title="The Corporate Screening Pipeline" 
        subtitle="Seamless vetting protocols built to protect corporate compliance standards." 
      />

      {/* Reused Why Choose Section with MNC Data */}
      <WhyChooseSection 
        features={mncWhyChooseFeatures} 
        title="Why Top Enterprises Choose BTE-Tech" 
        subtitle="Secure, scalable, and audit-ready candidate vetting designed for corporate teams." 
      />

      {/* Reused Contact / Partner Section */}
      <PartnerSection />
    </>
  )
}