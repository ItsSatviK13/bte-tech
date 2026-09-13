// const steps = [
//   {
//     number: '01',
//     title: 'Application Review',
//     description: 'We review and verify student applications and supporting documentation with speed and accuracy.',
//   },
//   {
//     number: '02',
//     title: 'Eligibility Check',
//     description: 'We assess academic records and verify eligibility against institutional criteria and compliance standards.',
//   },
//   {
//     number: '03',
//     title: 'Assessment & Evaluation',
//     description: 'We identify inconsistencies and evaluate relevant academic, financial, and credibility indicators.',
//   },
//   {
//     number: '04',
//     title: 'Shortlisting',
//     description: 'We shortlist suitable candidates using a structured, rule-based review model that is easy to audit.',
//   },
//   {
//     number: '05',
//     title: 'Final Report',
//     description: 'We deliver a clear summary with actions, findings, and next-step recommendations to your admissions team.',
//   },
// ]

// export default function ProcessSection() {
//   return (
//     <section id="process" className="bg-[#EFEFEF] py-10 md:py-20">
//       <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
//         <div className="mb-10 flex flex-col gap-4 text-center md:text-left md:flex-row md:items-center md:justify-between">
//           <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
//             Our Screening Process
//           </h2>
//           {/* <a href="#compliance" className="text-sm font-semibold text-[#353D65] transition hover:text-[#5DA854]">
//             View Detailed Process →
//           </a> */}
//         </div>

//         <div className="grid gap-5 md:grid-cols-5">
//           {steps.map((step, index) => (
//             <div key={step.number} className="group relative h-full">
//               <div className="flex h-full flex-col items-center text-center md:items-start md:text-left rounded-[1.5rem] border border-[#dfe4ea] bg-white p-4 shadow-sm transition group-hover:shadow-md">
//                 <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#52D5C4]/20 text-sm font-bold text-[#353D65]">
//                   {step.number}
//                 </div>
//                 <h3 className="mb-3 text-lg font-bold text-[#353D65]">{step.title}</h3>
//                 <p className="text-sm leading-6 text-[#353D65]/70">{step.description}</p>
//               </div>
//               {index < steps.length - 1 && (
//                 <div className="hidden md:block absolute -right-4 top-1/2 h-0.5 w-8 -translate-y-1/2 bg-[#52D5C4]/60" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// import mncData from '../../data/mncData'
const defaultSteps = [
  {
    number: '01',
    title: 'Application Review',
    description: 'We review and verify student applications and supporting documentation with speed and accuracy.',
  },
  {
    number: '02',
    title: 'Eligibility Check',
    description: 'We assess academic records and verify eligibility against institutional criteria and compliance standards.',
  },
  {
    number: '03',
    title: 'Assessment & Evaluation',
    description: 'We identify inconsistencies and evaluate relevant academic, financial, and credibility indicators.',
  },
  {
    number: '04',
    title: 'Shortlisting',
    description: 'We shortlist suitable candidates using a structured, rule-based review model that is easy to audit.',
  },
  {
    number: '05',
    title: 'Final Report',
    description: 'We deliver a clear summary with actions, findings, and next-step recommendations to your admissions team.',
  },
]

// export default function ProcessSection() {
//   return (
//     <section id="process" className="bg-[#EFEFEF] py-16 md:py-24 relative overflow-hidden">
//       {/* Decorative background grid pattern */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#353D65_1px,transparent_1px)] [background-size:16px_16px]" />

//       <div className="mx-auto max-w-[1360px] px-5 lg:px-8 relative z-10">
        
//         {/* Section Header */}
//         <div className="mb-14 text-center max-w-2xl mx-auto">
//           <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-[#353D65]/5 text-[#353D65] border border-[#353D65]/10 shadow-[2px_2px_0px_0px_#353D65]">
//             Workflow Architecture
//           </span>

//           <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
//             Our Screening Process
//           </h2>

//           <p className="mt-4 text-base leading-7 text-[#353D65]/70 md:text-lg font-medium">
//             A reliable, rule-based 5-stage pipeline designed for total transparency and auditing accuracy.
//           </p>
//         </div>

//         {/* Steps Grid */}
//         <div className="grid gap-8 md:grid-cols-5">
//           {steps.map((step) => (
//             <div 
//               key={step.number} 
//               className="relative rounded-[20px] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
//               style={{
//                 border: '3px solid #353D65',
//                 boxShadow: '6px 6px 0px 0px #353D65',
//               }}
//             >
//               {/* Decorative Corner Sketch Notch */}
//               <div className="absolute top-0 right-0 w-6 h-6 bg-[#353D65]/5 rounded-bl-[16px] border-b-2 border-l-2 border-[#353D65]" />

//               <div>
//                 {/* Number Badge */}
//                 <div 
//                   className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black mb-5"
//                   style={{
//                     backgroundColor: '#ffffff',
//                     color: '#353D65',
//                     border: '2px solid #353D65',
//                     boxShadow: '2px 2px 0px 0px #353D65',
//                   }}
//                 >
//                   {step.number}
//                 </div>

//                 <h3 className="mb-3 text-xl font-black text-[#353D65] tracking-tight">
//                   {step.title}
//                 </h3>
                
//                 <p className="text-xs leading-6 text-[#353D65]/75 font-medium">
//                   {step.description}
//                 </p>
//               </div>

//               {/* Bottom Accent Line */}
//               <div className="mt-6 pt-4 border-t-2 border-dashed border-[#353D65]/20 flex items-center justify-between">
//                 <span className="text-[10px] font-black uppercase tracking-wider text-[#353D65]/50">Stage {step.number}</span>
//                 <span className="h-2 w-2 rounded-full bg-[#52D5C4] border border-[#353D65]" />
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

export default function ProcessSection({ 
  steps = defaultSteps, 
  title = "Our Screening Process", 
  subtitle = "A reliable, rule-based 5-stage pipeline designed for total transparency and auditing accuracy." 
}){
  return (
    <section id="process" className="bg-[#EFEFEF] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#353D65_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-[1360px] px-5 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-[#353D65]/5 text-[#353D65] border border-[#353D65]/10 shadow-[2px_2px_0px_0px_#353D65]">
            Workflow Architecture
          </span>

          <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
            {title}
          </h2>

          <p className="mt-4 text-base leading-7 text-[#353D65]/70 md:text-lg font-medium">
            {subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className={`grid gap-8 ${steps.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-5'}`}>
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="relative rounded-[20px] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              style={{
                border: '3px solid #353D65',
                boxShadow: '6px 6px 0px 0px #353D65',
              }}
            >
              {/* Decorative Corner Sketch Notch */}
              <div className="absolute top-0 right-0 w-6 h-6 bg-[#353D65]/5 rounded-bl-[16px] border-b-2 border-l-2 border-[#353D65]" />

              <div>
                {/* Number Badge */}
                <div 
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black mb-5"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#353D65',
                    border: '2px solid #353D65',
                    boxShadow: '2px 2px 0px 0px #353D65',
                  }}
                >
                  {step.number}
                </div>

                <h3 className="mb-3 text-xl font-black text-[#353D65] tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-xs leading-6 text-[#353D65]/75 font-medium">
                  {step.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="mt-6 pt-4 border-t-2 border-dashed border-[#353D65]/20 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#353D65]/50">Stage {step.number}</span>
                <span className="h-2 w-2 rounded-full bg-[#52D5C4] border border-[#353D65]" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}