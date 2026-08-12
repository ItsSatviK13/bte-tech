const partnerLogos = ['Greenfield University', 'Northwood University', 'Riverdale Institute', 'Horizon University']

export default function HeroSection() {
  return (
    <section id="home" className="bg-[#EFEFEF] pt-8">
      <div className="mx-auto max-w-[1360px] px-5 pb-10 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6 py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#353D65]">
              Smarter Screening. Stronger Futures.
            </p>

            <h1 className="max-w-xl text-5xl font-black leading-[1.1] tracking-[-0.04em] text-[#353D65] xl:text-[4.25rem]">
              Smarter Screening.
              <span className="block text-[#52D5C4]">Stronger Futures.</span>
            </h1>

            <p className="max-w-lg text-lg leading-8 text-[#353D65]/75">
              We help universities identify the right students through reliable, data-driven screening and evaluation processes.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="rounded-md border border-[#353D65] bg-[#353D65] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#2b3453]"
              >
                Partner With Us
              </a>
              <a
                href="#why-us"
                className="flex items-center gap-2 rounded-md border border-[#353D65] px-6 py-3.5 text-base font-semibold text-[#353D65] transition hover:bg-white"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* <div className="relative mx-auto w-full max-w-[680px]">
            <div className="absolute -left-10 top-10 h-28 w-28 rounded-full border-[3px] border-[#52D5C4]/60" />
            <div className="absolute -left-16 bottom-14 h-20 w-20 rounded-full border-[3px] border-[#5DA854]/60" />
            <div className="absolute -right-10 top-12 h-24 w-24 rounded-full border-[3px] border-[#52D5C4]/60" />
            <div className="absolute -right-5 bottom-12 h-28 w-28 rounded-full border-[3px] border-[#5DA854]/60" />
            <div className="absolute left-8 top-8 h-[420px] w-[420px] rounded-[52%_48%_42%_58%/46%_54%_46%_54%] bg-[#52D5C4]/70 blur-[2px]" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#dfe4ea] bg-white p-2 shadow-[0_25px_60px_rgba(53,61,101,0.12)]">
              <div
                className="h-[500px] rounded-[2rem] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1571113390215-0cdbbd0d0134?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                }}
              />
            </div>
          </div> */}
          <div className="relative mx-auto w-full max-w-[680px]">
            <div className="absolute -left-14 top-6 h-40 w-40 rounded-full border-[4px] border-[#52D5C4]/60" />

            <div class="absolute -left-14 bottom-6 h-48 w-48 rounded-full border-[3px] border-[#5DA854]/60"></div>

            <div className="absolute -right-20 top-2 h-48 w-48 rounded-full border-[4px] border-[#52D5C4]/60" />

            <div className="absolute -right-8 bottom-4 h-32 w-32 rounded-full border-[3px] border-[#5DA854]/60" />

            <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-[62%_38%_46%_54%/42%_58%_40%_60%] bg-[#52D5C4]/70 blur-[3px]" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#dfe4ea] bg-white p-2 shadow-[0_25px_60px_rgba(53,61,101,0.12)]">
                <div className="h-[500px] rounded-[2rem] bg-cover bg-center bg-no-repeat" style={{ backgroundImage:
                    "url('https://images.unsplash.com/photo-1571113390215-0cdbbd0d0134?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",}}
                />
                </div>
            </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[#dfe4ea] bg-white/60 px-4 py-6 backdrop-blur-sm">
          <div className="grid gap-5 text-center md:grid-cols-4">
            {partnerLogos.map((logo) => (
              <div key={logo} className="flex items-center justify-center gap-3 text-[#353D65]">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[#dfe4ea] bg-[#EFEFEF] text-xs font-black text-[#353D65]">
                  {logo.charAt(0)}
                </div>
                <span className="text-sm font-semibold tracking-wide">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
