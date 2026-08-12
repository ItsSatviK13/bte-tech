const complianceItems = [
  {
    badge: 'Green Pass',
    badgeClass: 'bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]',
    title: 'Audit-Ready & Verified',
    description:
      'Clear documentation, full 28-day financial compliance, verified academic record, and passing credibility assessment. Action: Fast-tracked for internal CAS drafting.',
  },
  {
    badge: 'Amber Review',
    badgeClass: 'bg-[#FFF8E1] text-[#F57F17] border border-[#FFE082]',
    title: 'Desk Audit Required',
    description:
      'Minor clarification required regarding document history, funding origins, or regional qualification anomalies. Action: Escalated to registry lead with specific audit notes.',
  },
  {
    badge: 'Red Flag',
    badgeClass: 'bg-[#FFEBEE] text-[#C62828] border border-[#EF9A9A]',
    title: 'High Risk / Non-Compliant',
    description:
      'Inconsistent financial records, unverified qualifications, or credibility failure. Action: Recommended for immediate rejection to protect institutional compliance metrics.',
  },
]

export default function ComplianceSection() {
  return (
    <section id="compliance" className="bg-[#EFEFEF] py-10 md:py-20">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#353D65]/80">
            Compliance framework
          </p>
          <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
            The Risk Triage Framework
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#353D65]/70 md:text-lg">
            Every applicant file is analyzed and categorized to ensure your CAS drafters only process zero-risk applicants.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#dfe4ea] bg-white shadow-[0_18px_40px_rgba(53,61,101,0.08)]">
          {complianceItems.map((item) => (
            <div
              key={item.badge}
              className="flex flex-col gap-5 border-b border-[#dfe4ea] p-6 md:flex-row md:items-start md:gap-8 md:p-8 last:border-b-0"
            >
              <div
                className={`inline-flex min-w-[170px] items-center justify-center rounded-md px-4 py-3 text-sm font-bold uppercase tracking-[0.5px] ${item.badgeClass}`}
              >
                {item.badge}
              </div>

              <div className="flex-1">
                <h3 className="mb-2 text-xl font-bold text-[#353D65] md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-[#353D65]/75 md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
