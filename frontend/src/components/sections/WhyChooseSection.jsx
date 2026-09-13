// const features = [
//   {
//     title: 'Accurate & Reliable',
//     description: 'Data-driven assessments that ensure accuracy and relevance at every step.',
//     icon: '✓',
//     accent: 'bg-[#52D5C4]/20 text-[#353D65]',
//   },
//   {
//     title: 'Secure & Confidential',
//     description: 'Robust data security with complete confidentiality and protected student information.',
//     icon: '9',
//     accent: 'bg-[#353D65]/10 text-[#353D65]',
//   },
//   {
//     title: 'Actionable Insights',
//     description: 'Detailed reports that help your team make informed decisions and improve throughput.',
//     icon: '∑',
//     accent: 'bg-[#5DA854]/10 text-[#5DA854]',
//   },
//   {
//     title: 'Efficient & Scalable',
//     description: 'Streamlined processes designed to scale with growing student volumes and complexity.',
//     icon: '◔',
//     accent: 'bg-[#52D5C4]/20 text-[#353D65]',
//   },
//   {
//     title: 'Expert Support',
//     description: 'A dedicated team that partners with you throughout the screening journey.',
//     icon: '◌',
//     accent: 'bg-[#5DA854]/10 text-[#5DA854]',
//   },
// ]

// export default function WhyChooseSection() {
//   return (
//     <section id="about" className="bg-[#EFEFEF] py-12 md:py-20">
//       <div id="why-us" className="mx-auto max-w-[1360px] px-5 lg:px-8">
//         <div className="mb-10 text-center">
//           <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
//             Why Universities Choose BTE-Tech
//           </h2>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
//           {features.map((feature) => (
//             <div key={feature.title} className="rounded-[1.5rem] border border-[#dfe4ea] bg-white p-5 text-center shadow-sm">
//               <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${feature.accent}`}>
//                 {feature.icon}
//               </div>
//               <h3 className="mb-3 text-lg font-bold text-[#353D65]">{feature.title}</h3>
//               <p className="text-sm leading-6 text-[#353D65]/70">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
const defaultFeatures = [
  {
    number: '01',
    title: 'Accurate & Reliable',
    description: 'Data-driven assessments that ensure accuracy and relevance at every step.',
    // icon: '✓',
  },
  {
    number: '02',
    title: 'Secure & Confidential',
    description: 'Robust data security with complete confidentiality and protected student information.',
    // icon: '🔒',
  },
  {
    number: '03',
    title: 'Actionable Insights',
    description: 'Detailed reports that help your team make informed decisions and improve throughput.',
    // icon: '📈',
  },
  {
    number: '04',
    title: 'Efficient & Scalable',
    description: 'Streamlined processes designed to scale with growing student volumes and complexity.',
    // icon: '⚡',
  },
  {
    number: '05',
    title: 'Expert Support',
    description: 'A dedicated team that partners with you throughout the screening journey.',
    // icon: '🤝',
  },
]

// export default function WhyChooseSection() {
//   return (
//     <section id="about" className="bg-[#EFEFEF] py-16 md:py-24 relative overflow-hidden">
//       {/* Decorative background grid pattern */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#353D65_1px,transparent_1px)] [background-size:16px_16px]" />

//       <div id="why-us" className="mx-auto max-w-[1360px] px-5 lg:px-8 relative z-10">
        
//         {/* Section Header */}
//         <div className="mb-14 text-center max-w-2xl mx-auto">
//           <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-[#353D65]/5 text-[#353D65] border border-[#353D65]/10 shadow-[2px_2px_0px_0px_#353D65]">
//             Core Advantages
//           </span>

//           <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
//             Why Universities Choose BTE-Tech
//           </h2>

//           <p className="mt-4 text-base leading-7 text-[#353D65]/70 md:text-lg font-medium">
//             Engineered for modern institutions seeking security, precision, and reliable growth.
//           </p>
//         </div>

//         {/* Feature Cards Grid */}
//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
//           {features.map((feature) => (
//             <div 
//               key={feature.title} 
//               className="relative rounded-[20px] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
//               style={{
//                 border: '3px solid #353D65',
//                 boxShadow: '6px 6px 0px 0px #353D65',
//               }}
//             >
//               {/* Decorative Corner Sketch Notch */}
//               <div className="absolute top-0 right-0 w-6 h-6 bg-[#353D65]/5 rounded-bl-[16px] border-b-2 border-l-2 border-[#353D65]" />

//               <div>
//                 {/* Top Number / Icon Header */}
//                 <div className="flex items-center justify-between mb-5">
//                   <div 
//                     className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black"
//                     style={{
//                       backgroundColor: '#ffffff',
//                       color: '#353D65',
//                       border: '2px solid #353D65',
//                       boxShadow: '2px 2px 0px 0px #353D65',
//                     }}
//                   >
//                     {feature.number}
//                   </div>

//                   <span className="text-xl">
//                     {feature.icon}
//                   </span>
//                 </div>

//                 <h3 className="mb-3 text-xl font-black text-[#353D65] tracking-tight">
//                   {feature.title}
//                 </h3>
                
//                 <p className="text-xs leading-6 text-[#353D65]/75 font-medium">
//                   {feature.description}
//                 </p>
//               </div>

//               {/* Bottom Accent Line */}
//               <div className="mt-6 pt-4 border-t-2 border-dashed border-[#353D65]/20 flex items-center justify-between">
//                 <span className="text-[10px] font-black uppercase tracking-wider text-[#353D65]/50">Verified Advantage</span>
//                 <span className="h-2 w-2 rounded-full bg-[#52D5C4] border border-[#353D65]" />
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }
export default function WhyChooseSection({ 
  features = defaultFeatures, 
  title = "Why Universities Choose BTE-Tech", 
  subtitle = "Engineered for modern institutions seeking security, precision, and reliable growth."
}) {
  return (
    <section id="about" className="bg-[#EFEFEF] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#353D65_1px,transparent_1px)] [background-size:16px_16px]" />

      <div id="why-us" className="mx-auto max-w-[1360px] px-5 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-[#353D65]/5 text-[#353D65] border border-[#353D65]/10 shadow-[2px_2px_0px_0px_#353D65]">
            Core Advantages
          </span>

          <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
            {title}
          </h2>

          <p className="mt-4 text-base leading-7 text-[#353D65]/70 md:text-lg font-medium">
            {subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className={`grid gap-6 md:grid-cols-2 xl:grid-cols-${features.length}`}>
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="relative rounded-[20px] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              style={{
                border: '3px solid #353D65',
                boxShadow: '6px 6px 0px 0px #353D65',
              }}
            >
              {/* Decorative Corner Sketch Notch */}
              <div className="absolute top-0 right-0 w-6 h-6 bg-[#353D65]/5 rounded-bl-[16px] border-b-2 border-l-2 border-[#353D65]" />

              <div>
                {/* Top Number / Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black"
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#353D65',
                      border: '2px solid #353D65',
                      boxShadow: '2px 2px 0px 0px #353D65',
                    }}
                  >
                    {feature.number}
                  </div>

                  <span className="text-xl">
                    {feature.icon}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-black text-[#353D65] tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-xs leading-6 text-[#353D65]/75 font-medium">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="mt-6 pt-4 border-t-2 border-dashed border-[#353D65]/20 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#353D65]/50">Verified Advantage</span>
                <span className="h-2 w-2 rounded-full bg-[#52D5C4] border border-[#353D65]" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}