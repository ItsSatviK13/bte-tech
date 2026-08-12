const steps = [
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

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#EFEFEF] py-10 md:py-20">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 text-center md:text-left md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
            Our Screening Process
          </h2>
          {/* <a href="#compliance" className="text-sm font-semibold text-[#353D65] transition hover:text-[#5DA854]">
            View Detailed Process →
          </a> */}
        </div>

        <div className="grid gap-5 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative h-full">
              <div className="flex h-full flex-col items-center text-center md:items-start md:text-left rounded-[1.5rem] border border-[#dfe4ea] bg-white p-4 shadow-sm transition group-hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#52D5C4]/20 text-sm font-bold text-[#353D65]">
                  {step.number}
                </div>
                <h3 className="mb-3 text-lg font-bold text-[#353D65]">{step.title}</h3>
                <p className="text-sm leading-6 text-[#353D65]/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 h-0.5 w-8 -translate-y-1/2 bg-[#52D5C4]/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}