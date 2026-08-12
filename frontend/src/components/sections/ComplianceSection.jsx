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

const complianceItems = [
  {
    number: '01',
    status: 'GREEN',
    title: 'Verified',
    subtitle: 'Zero-risk file',
    color: '#5DA854',
    bg: '#fffcfc',
    bullets: [
      'Documentation complete',
      '28-day funds verified',
      'Academic record verified',
    ],
    action: 'CLEAR TO PROCEED',
  },
  {
    number: '02',
    status: 'AMBER',
    title: 'Review',
    subtitle: 'Clarification needed',
    color: '#ffbf00',
    bg: '#fffcfc',
    bullets: [
      'Document history check',
      'Funding origin review',
      'Regional anomaly check',
    ],
    action: 'MANUAL REVIEW',
  },
  {
    number: '03',
    status: 'RED',
    title: 'Flagged',
    subtitle: 'Non-compliant file',
    color: '#c51e1e',
    bg: '#fffcfc',
    bullets: [
      'Financial inconsistency',
      'Qualification unverified',
      'Credibility failure',
    ],
    action: 'ACTION REQUIRED',
  },
]

export default function ComplianceSection() {
  return (
    <section
      id="compliance"
      className="bg-[#EFEFEF] py-10 md:py-20"
    >
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">

        <div className="mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#353D65]/70">
            Compliance Framework
          </p>

          <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
            Risk Triage, at a Glance
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#353D65]/65 md:text-lg">
            A simple three-stage decision system for applicant-file
            readiness.
          </p>
        </div>

        <div className="relative">

          {/* Connecting line */}
          {/* <div className="absolute left-[12%] right-[12%] top-[-25px] hidden h-2 bg-[#353D65]/10 lg:block" /> */}

          <div className="grid gap-6 lg:grid-cols-3">

            {complianceItems.map((item) => (
              <div
                key={item.number}
                className="relative rounded-[24px] border border-[#353D65]/10 bg-white p-7 shadow-[0_16px_40px_rgba(53,61,101,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(53,61,101,0.10)]"
              >

                {/* Number */}
                <div
                  className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-black"
                  style={{
                    backgroundColor: item.bg,
                    color: item.color,
                  }}
                >
                  {item.number}
                </div>

                {/* Status */}
                <p
                  className="text-xs font-black tracking-[0.15em]"
                  style={{ color: item.color }}
                >
                  {item.status}
                </p>

                <h3 className="mt-2 text-3xl font-black text-[#353D65]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#353D65]/60">
                  {item.subtitle}
                </p>

                {/* Checklist */}
                <div className="mt-8 space-y-4">
                  {item.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="mt-1 flex h-2 w-2 shrink-0 rounded-full"
                        style={{
                          backgroundColor: item.color,
                        }}
                      />

                      <span className="text-sm leading-6 text-[#353D65]">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <div className="mt-8 border-t border-[#353D65]/10 pt-6">
                  <span
                    className="text-xs font-black tracking-[0.1em]"
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.action}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-8 rounded-2xl bg-[#353D65]/5 px-6 py-5 text-center">
          <p className="text-sm font-bold text-[#353D65] md:text-base">
            Decision logic: verify → clarify → protect compliance.
          </p>
        </div>

      </div>
    </section>
  )
}