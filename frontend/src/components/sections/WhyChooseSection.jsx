const features = [
  {
    title: 'Accurate & Reliable',
    description: 'Data-driven assessments that ensure accuracy and relevance at every step.',
    icon: '✓',
    accent: 'bg-[#52D5C4]/20 text-[#353D65]',
  },
  {
    title: 'Secure & Confidential',
    description: 'Robust data security with complete confidentiality and protected student information.',
    icon: '9',
    accent: 'bg-[#353D65]/10 text-[#353D65]',
  },
  {
    title: 'Actionable Insights',
    description: 'Detailed reports that help your team make informed decisions and improve throughput.',
    icon: '∑',
    accent: 'bg-[#5DA854]/10 text-[#5DA854]',
  },
  {
    title: 'Efficient & Scalable',
    description: 'Streamlined processes designed to scale with growing student volumes and complexity.',
    icon: '◔',
    accent: 'bg-[#52D5C4]/20 text-[#353D65]',
  },
  {
    title: 'Expert Support',
    description: 'A dedicated team that partners with you throughout the screening journey.',
    icon: '◌',
    accent: 'bg-[#5DA854]/10 text-[#5DA854]',
  },
]

export default function WhyChooseSection() {
  return (
    <section id="about" className="bg-[#EFEFEF] py-12 md:py-20">
      <div id="why-us" className="mx-auto max-w-[1360px] px-5 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black tracking-tight text-[#353D65] md:text-5xl">
            Why Universities Choose BTE-Tech
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-[1.5rem] border border-[#dfe4ea] bg-white p-5 text-center shadow-sm">
              <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${feature.accent}`}>
                {feature.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-[#353D65]">{feature.title}</h3>
              <p className="text-sm leading-6 text-[#353D65]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
