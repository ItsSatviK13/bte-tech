// const complianceItems = [
//   {
//     badge: 'Green Pass',
//     badgeClass: 'bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]',
//     title: 'Audit-Ready & Verified',
//     description:
//       'Clear documentation, full 28-day financial compliance, verified academic record, and passing credibility assessment. Action: Fast-tracked for internal CAS drafting.',
//   },
//   {
//     badge: 'Amber Review',
//     badgeClass: 'bg-[#FFF8E1] text-[#F57F17] border border-[#FFE082]',
//     title: 'Desk Audit Required',
//     description:
//       'Minor clarification required regarding document history, funding origins, or regional qualification anomalies. Action: Escalated to registry lead with specific audit notes.',
//   },
//   {
//     badge: 'Red Flag',
//     badgeClass: 'bg-[#FFEBEE] text-[#C62828] border border-[#EF9A9A]',
//     title: 'High Risk / Non-Compliant',
//     description:
//       'Inconsistent financial records, unverified qualifications, or credibility failure. Action: Recommended for immediate rejection to protect institutional compliance metrics.',
//   },
// ]

// export default function ComplianceSection() {
//   return (
//     <section id="compliance" className="bg-[#EFEFEF] py-10 md:py-20">
//       <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
//         <div className="mb-10 text-center">
//           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#353D65]/80">
//             Compliance framework
//           </p>
//           <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
//             The Risk Triage Framework
//           </h2>
//           <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#353D65]/70 md:text-lg">
//             Every applicant file is analyzed and categorized to ensure your CAS drafters only process zero-risk applicants.
//           </p>
//         </div>

//         <div className="overflow-hidden rounded-[2rem] border border-[#dfe4ea] bg-white shadow-[0_18px_40px_rgba(53,61,101,0.08)]">
//           {complianceItems.map((item) => (
//             <div
//               key={item.badge}
//               className="flex flex-col gap-5 border-b border-[#dfe4ea] p-6 md:flex-row md:items-start md:gap-8 md:p-8 last:border-b-0"
//             >
//               <div
//                 className={`inline-flex min-w-[170px] items-center justify-center rounded-md px-4 py-3 text-sm font-bold uppercase tracking-[0.5px] ${item.badgeClass}`}
//               >
//                 {item.badge}
//               </div>

//               <div className="flex-1">
//                 <h3 className="mb-2 text-xl font-bold text-[#353D65] md:text-2xl">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm leading-7 text-[#353D65]/75 md:text-base">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// const complianceItems = [
//   {
//     number: '01',
//     status: 'GREEN',
//     title: 'Verified',
//     subtitle: 'Zero-risk file',
//     color: '#5DA854',
//     bg: '#fffcfc',
//     bullets: [
//       'Documentation complete',
//       '28-day funds verified',
//       'Academic record verified',
//     ],
//     action: 'CLEAR TO PROCEED',
//   },
//   {
//     number: '02',
//     status: 'AMBER',
//     title: 'Review',
//     subtitle: 'Clarification needed',
//     color: '#ffbf00',
//     bg: '#fffcfc',
//     bullets: [
//       'Document history check',
//       'Funding origin review',
//       'Regional anomaly check',
//     ],
//     action: 'MANUAL REVIEW',
//   },
//   {
//     number: '03',
//     status: 'RED',
//     title: 'Flagged',
//     subtitle: 'Non-compliant file',
//     color: '#c51e1e',
//     bg: '#fffcfc',
//     bullets: [
//       'Financial inconsistency',
//       'Qualification unverified',
//       'Credibility failure',
//     ],
//     action: 'ACTION REQUIRED',
//   },
// ]

// export default function ComplianceSection() {
//   return (
//     <section
//       id="compliance"
//       className="bg-[#EFEFEF] py-10 md:py-20"
//     >
//       <div className="mx-auto max-w-[1360px] px-5 lg:px-8">

//         <div className="mb-14">
//           <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#353D65]/70">
//             Compliance Framework
//           </p>

//           <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
//             Risk Triage, at a Glance
//           </h2>

//           <p className="mt-4 max-w-2xl text-base leading-7 text-[#353D65]/65 md:text-lg">
//             A simple three-stage decision system for applicant-file
//             readiness.
//           </p>
//         </div>

//         <div className="relative">

//           {/* Connecting line */}
//           {/* <div className="absolute left-[12%] right-[12%] top-[-25px] hidden h-2 bg-[#353D65]/10 lg:block" /> */}

//           <div className="grid gap-6 lg:grid-cols-3">

//             {complianceItems.map((item) => (
//               <div
//                 key={item.number}
//                 className="relative rounded-[24px] border border-[#353D65]/10 bg-white p-7 shadow-[0_16px_40px_rgba(53,61,101,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(53,61,101,0.10)]"
//               >

//                 {/* Number */}
//                 <div
//                   className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-black"
//                   style={{
//                     backgroundColor: item.bg,
//                     color: item.color,
//                   }}
//                 >
//                   {item.number}
//                 </div>

//                 {/* Status */}
//                 <p
//                   className="text-xs font-black tracking-[0.15em]"
//                   style={{ color: item.color }}
//                 >
//                   {item.status}
//                 </p>

//                 <h3 className="mt-2 text-3xl font-black text-[#353D65]">
//                   {item.title}
//                 </h3>

//                 <p className="mt-2 text-sm font-medium text-[#353D65]/60">
//                   {item.subtitle}
//                 </p>

//                 {/* Checklist */}
//                 <div className="mt-8 space-y-4">
//                   {item.bullets.map((bullet) => (
//                     <div
//                       key={bullet}
//                       className="flex items-start gap-3"
//                     >
//                       <span
//                         className="mt-1 flex h-2 w-2 shrink-0 rounded-full"
//                         style={{
//                           backgroundColor: item.color,
//                         }}
//                       />

//                       <span className="text-sm leading-6 text-[#353D65]">
//                         {bullet}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Action */}
//                 <div className="mt-8 border-t border-[#353D65]/10 pt-6">
//                   <span
//                     className="text-xs font-black tracking-[0.1em]"
//                     style={{
//                       color: item.color,
//                     }}
//                   >
//                     {item.action}
//                   </span>
//                 </div>

//               </div>
//             ))}

//           </div>
//         </div>

//         {/* Bottom message */}
//         <div className="mt-8 rounded-2xl bg-[#353D65]/5 px-6 py-5 text-center">
//           <p className="text-sm font-bold text-[#353D65] md:text-base">
//             Decision logic: verify → clarify → protect compliance.
//           </p>
//         </div>

//       </div>
//     </section>
//   )
// }

// import { FileCheck2, FileWarning, FileX, ShieldCheck, Play } from "lucide-react";
// import { SiGooglescholar } from "react-icons/si"; // Importing from simple-icons via react-icons

// const complianceItems = [
//   {
//     number: "01",
//     status: "GREEN",
//     title: "Verified",
//     subtitle: "Zero-risk file",
//     color: "#5DA854", // Vibrant Green for UI
//     icon: ShieldCheck,
//     bullets: ["Documentation complete", "28-day funds verified", "Academic record verified"],
//     // Specific visual element for Green card: A RAG graph
//     graph: [
//         { name: 'Risk', value: 95, fill: '#00C853' },
//         { name: 'Pass', value: 5, fill: '#333' },
//     ],
//     graphLabel: "Verified Risk Profile",
//     action: "CLEAR TO PROCEED",
//   },
//   {
//     number: "02",
//     status: "AMBER",
//     title: "Review",
//     subtitle: "Clarification needed",
//     color: "#FFAB00", // Warning Amber for UI
//     icon: FileWarning,
//     bullets: ["Document history check", "Funding origin review", "Regional anomaly check"],
//     // Specific visual element for Amber card: A partial RAG graph
//     graph: [
//         { name: 'Risk', value: 60, fill: '#FFAB00' },
//         { name: 'Pass', value: 40, fill: '#333' },
//     ],
//     graphLabel: "Compliance Health Check",
//     action: "MANUAL REVIEW",
//   },
//   {
//     number: "03",
//     status: "RED",
//     title: "Flagged",
//     subtitle: "Non-compliant file",
//     color: "#FF1744", // Alert Red for UI
//     icon: FileX,
//     bullets: ["Financial inconsistency", "Qualification unverified", "Credibility failure"],
//     // Specific visual element for Red card: A video thumbnail of the refusal event
//     mediaThumbnail: {
//         title: "Refusal Rationale",
//         duration: "02:15",
//         previewImage: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=400&auto=format&fit=crop" // Example image related to documents/finances
//     },
//     action: "ACTION REQUIRED",
//   },
// ];

// // Helper component for a simple horizontal bar graph
// const SimpleRAGBar = ({ data }) => (
//     <div className="w-full h-2.5 flex rounded-full overflow-hidden bg-[#253149]">
//         {data.map((item, index) => (
//             <div
//                 key={index}
//                 style={{ width: `${item.value}%`, backgroundColor: item.fill }}
//             />
//         ))}
//     </div>
// );

// export default function ComplianceSectionDark() {
//   return (
//     <section
//       id="compliance"
//       className="bg-[#0A1020] py-16 md:py-28" // Deep Navy Background
//     >
//       <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
//         {/* Header Section - Dark Theme Styled */}
//         <div className="mb-16 max-w-3xl">
//           <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#8B9BB4]/70">
//             Compliance Engine
//           </p>

//           <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
//             Risk Triage, at a Glance
//           </h2>

//           <p className="mt-5 text-lg leading-8 text-[#8B9BB4] md:text-xl">
//             A modular infrastructure designed to protect your UKVI Sponsor License without adding unnecessary headcount to your admissions team.
//           </p>
//         </div>

//         {/* Grid of Cards - Dark Theme Styled */}
//         <div className="grid gap-8 lg:grid-cols-3">
//           {complianceItems.map((item) => {
//             const StatusIcon = item.icon;
//             return (
//               <div
//                 key={item.number}
//                 className="group relative rounded-[28px] border border-[#1F2940] bg-[#141A2B] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
//               >
//                 {/* Number Icon */}
//                 <div
//                   className="mb-10 flex h-16 w-16 items-center justify-center rounded-3xl text-xl font-black"
//                   style={{
//                     backgroundColor: `${item.color}15`, // Low opacity background
//                     color: item.color,
//                     border: `1px solid ${item.color}30`
//                   }}
//                 >
//                   {item.number}
//                 </div>

//                 {/* Status Header */}
//                 <div className="flex items-center gap-3">
//                   <StatusIcon
//                     className="h-5 w-5"
//                     style={{ color: item.color }}
//                   />
//                   <p
//                     className="text-sm font-bold uppercase tracking-[0.15em]"
//                     style={{ color: item.color }}
//                   >
//                     {item.status}
//                   </p>
//                 </div>

//                 <h3 className="mt-4 text-4xl font-bold tracking-tight text-white">
//                   {item.title}
//                 </h3>

//                 <p className="mt-2.5 text-base font-medium text-[#8B9BB4]">
//                   {item.subtitle}
//                 </p>

//                 {/* Checklist */}
//                 <div className="mt-8 mb-8 space-y-5">
//                   {item.bullets.map((bullet) => (
//                     <div key={bullet} className="flex items-start gap-4">
//                       <span
//                         className="mt-1.5 flex h-2.5 w-2.5 shrink-0 rounded-full"
//                         style={{
//                           backgroundColor: item.color,
//                           boxShadow: `0 0 10px ${item.color}50`
//                         }}
//                       />
//                       <span className="text-base leading-7 text-white/90">
//                         {bullet}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* VISUAL ELEMENT INSERTS (Graphs or Media) */}
//                 {item.graph && (
//                     <div className="mt-6 pt-6 border-t border-[#1F2940]">
//                         <SimpleRAGBar data={item.graph} />
//                         <p className="mt-2 text-xs text-[#8B9BB4]">{item.graphLabel}</p>
//                     </div>
//                 )}

//                 {item.mediaThumbnail && (
//                     <div className="mt-6 pt-6 border-t border-[#1F2940] relative rounded-xl overflow-hidden group/media">
//                         <img
//                             src={item.mediaThumbnail.previewImage}
//                             alt={item.mediaThumbnail.title}
//                             className="w-full h-32 object-cover transition duration-500 group-hover/media:scale-105"
//                         />
//                         <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//                             <div className="flex items-center gap-2.5 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
//                                 <Play className="h-5 w-5 text-white fill-white" />
//                                 <span className="text-sm font-bold text-white">{item.mediaThumbnail.title}</span>
//                                 <span className="text-xs text-white/70 ml-2">{item.mediaThumbnail.duration}</span>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Action Footer */}
//                 <div className="mt-8 pt-8 border-t border-[#1F2940]">
//                   <span
//                     className="text-sm font-bold tracking-[0.1em]"
//                     style={{
//                       color: item.color,
//                     }}
//                   >
//                     {item.action}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Bottom message */}
//         <div className="mt-16 rounded-2xl bg-[#1F2940] px-8 py-6 text-center border border-[#253149]">
//           <p className="text-base font-medium text-white md:text-lg">
//             Decision logic: verify → clarify → protect compliance.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

const complianceItems = [
  {
    number: '01',
    status: 'GREEN',
    title: 'Verified',
    subtitle: 'Zero-risk file',
    color: '#5DA854',
    bg: '#ffffff',
    bullets: [
      'Documentation complete',
      '28-day funds verified',
      'Academic record verified',
    ],
    graphStats: [
      { label: 'Integrity', val: '98%', width: '98%' },
      { label: 'Risk Index', val: '0.2%', width: '15%' },
    ],
    action: 'CLEAR TO PROCEED',
  },
  {
    number: '02',
    status: 'AMBER',
    title: 'Review',
    subtitle: 'Clarification needed',
    color: '#FFAB00',
    bg: '#ffffff',
    bullets: [
      'Document history check',
      'Funding origin review',
      'Regional anomaly check',
    ],
    graphStats: [
      { label: 'Integrity', val: '74%', width: '74%' },
      { label: 'Risk Index', val: '4.8%', width: '45%' },
    ],
    action: 'MANUAL REVIEW',
  },
  {
    number: '03',
    status: 'RED',
    title: 'Flagged',
    subtitle: 'Non-compliant file',
    color: '#FF1744',
    bg: '#ffffff',
    bullets: [
      'Financial inconsistency',
      'Qualification unverified',
      'Credibility failure',
    ],
    graphStats: [
      { label: 'Integrity', val: '31%', width: '31%' },
      { label: 'Risk Index', val: '91.2%', width: '90%' },
    ],
    action: 'ACTION REQUIRED',
  },
]

export default function ComplianceSection() {
  return (
    <section
      id="compliance"
      className="bg-[#EFEFEF] py-16 md:py-24 relative overflow-hidden"
    >
      {/* Decorative background grid and sketch shade blobs */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#353D65_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#52D5C4]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#5DA854]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1360px] px-5 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-[#353D65]/5 text-[#353D65] border border-[#353D65]/10 shadow-[2px_2px_0px_0px_#353D65]">
            Compliance Framework
          </span>

          <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
            Risk Triage, at a Glance
          </h2>

          <p className="mt-4 text-base leading-7 text-[#353D65]/70 md:text-lg font-medium">
            A precise three-stage sketch and metrics system for real-time applicant-file readiness.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3">

          {complianceItems.map((item) => (
            <div
              key={item.number}
              className="relative rounded-[20px] bg-[#ffffff] p-8 transition-all duration-300 hover:-translate-y-1.5 group"
              style={{
                /* Sketchy hand-drawn multi-layered hard shadow border aesthetic */
                border: '3px solid #353D65',
                boxShadow: '6px 6px 0px 0px #353D65',
              }}
            >
              {/* Decorative Corner Sketch Notch */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#353D65]/5 rounded-bl-[20px] border-b-2 border-l-2 border-[#353D65]" />

              {/* Number Badge */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black"
                  style={{
                    backgroundColor: item.bg,
                    color: '#353D65',
                    border: '2px solid #353D65',
                    boxShadow: '2px 2px 0px 0px #353D65',
                  }}
                >
                  {item.number}
                </div>

                <div 
                  className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase"
                  style={{ 
                    backgroundColor: `${item.color}20`,
                    color: '#353D65',
                    border: `2px solid #353D65`
                  }}
                >
                  {item.status}
                </div>
              </div>

              {/* Titles */}
              <h3 className="text-3xl font-black text-[#353D65] tracking-tight">
                {item.title}
              </h3>

              <p className="mt-1 text-sm font-bold text-[#353D65]/60">
                {item.subtitle}
              </p>

              {/* Checklist */}
              <div className="mt-6 space-y-3">
                {item.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-3 bg-[#EFEFEF]/50 p-2.5 rounded-lg border border-[#353D65]/10"
                  >
                    <span
                      className="flex h-2.5 w-2.5 shrink-0 rounded-full border border-[#353D65]"
                      style={{
                        backgroundColor: item.color,
                      }}
                    />
                    <span className="text-xs font-bold leading-tight text-[#353D65]">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Visual Graph Section Added to All Cards */}
              <div className="mt-6 pt-5 border-t-2 border-dashed border-[#353D65]/20">
                <p className="text-[10px] font-black uppercase tracking-wider text-[#353D65]/60 mb-3">
                  Analytics & Metric Breakdown
                </p>
                <div className="space-y-2.5">
                  {item.graphStats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-black text-[#353D65] mb-1">
                        <span>{stat.label}</span>
                        <span>{stat.val}</span>
                      </div>
                      <div className="h-3 w-full bg-[#EFEFEF] rounded-full overflow-hidden p-0.5 border border-[#353D65]">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: stat.width,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button Banner */}
              <div className="mt-8 pt-4 border-t-2 border-[#353D65]">
                <div
                  className="w-full py-3 text-center rounded-xl text-xs font-black tracking-[0.15em] transition-all"
                  style={{
                    backgroundColor: item.color,
                    color: '#353D65',
                    border: '2px solid #353D65',
                    boxShadow: '2px 2px 0px 0px #353D65',
                  }}
                >
                  {item.action}
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom banner */}
        <div className="mt-12 rounded-2xl bg-white px-6 py-5 text-center border-2 border-[#353D65] shadow-[4px_4px_0px_0px_#353D65]">
          <p className="text-sm font-black text-[#353D65] md:text-base">
            Decision logic workflow: verify → clarify → protect compliance infrastructure.
          </p>
        </div>

      </div>
    </section>
  )
}