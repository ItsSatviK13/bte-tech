import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About BTE-Tech"
        description="Learn how BTE-Tech automates primary-source credential verification, financial audits, and compliance workflows for universities and employers."
        canonical="https://bte-tech.com/about"
        keywords="about BTE-Tech, verification platform, university admissions compliance, enterprise hiring compliance"
        image="https://bte-tech.com/logo.png"
      />

    <div className="bg-[#EFEFEF] text-[#353D65]">
      <section className="mx-auto max-w-[1360px] px-5 py-16 md:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_420px]">
          <div className="space-y-6">
            <span className="inline-block rounded-full border border-[#353D65]/10 bg-[#353D65]/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#353D65] shadow-[2px_2px_0px_0px_#353D65]">
              About BTE-Tech
            </span>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#353D65] md:text-5xl lg:text-6xl">
              Verification Infrastructure for Global Mobility
            </h1>

            <p className="text-base font-medium leading-relaxed text-[#353D65]/75 md:text-lg">
              Bte-Tech automates application pre-screening, financial audits, and credential verification—protecting university sponsor licenses today and delivering pre-vetted international talent to global employers tomorrow.
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

          <div
            className="rounded-[24px] bg-white p-8 md:p-10 relative overflow-hidden"
            style={{
              border: '3px solid #353D65',
              boxShadow: '8px 8px 0px 0px #353D65',
            }}
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#52D5C4]/20 blur-3xl pointer-events-none" />

            <div className="space-y-5">
              <div className="rounded-2xl border-2 border-[#353D65]/30 bg-[#EFEFEF]/50 p-5">
                <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#353D65]/70">
                  Verification Layer
                </div>
                <div className="text-2xl font-black text-[#353D65]">RAG Workflow</div>
              </div>

              <div className="rounded-2xl border-2 border-[#353D65]/30 bg-[#EFEFEF]/50 p-5">
                <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#353D65]/70">
                  Compliance Signal
                </div>
                <div className="text-2xl font-black text-[#5DA854]">Primary Source</div>
              </div>

              <div className="rounded-2xl border-2 border-[#353D65]/30 bg-[#EFEFEF]/50 p-5">
                <div className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#353D65]/70">
                  Talent Mobility
                </div>
                <div className="text-2xl font-black text-[#52D5C4]">Global Pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-[#353D65]/10 bg-white py-16">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <span className="inline-block rounded-full border border-[#353D65]/10 bg-[#353D65]/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#353D65] shadow-[2px_2px_0px_0px_#353D65]">
                The Problem We Solve
              </span>
            </div>

            <div className="rounded-[24px] border-[3px] border-[#353D65] bg-[#EFEFEF]/50 p-8 md:p-12 shadow-[8px_8px_0px_0px_#353D65]">
              <p className="text-base font-medium leading-relaxed text-[#353D65]/80 md:text-lg">
                Verification shouldn't be a bottleneck to global ambition.
              </p>

              <p className="mt-5 text-sm font-medium leading-7 text-[#353D65]/70 md:text-base">
                During peak intake and recruitment cycles, both higher education institutions and corporate HR teams face overwhelming application surges. Manually auditing 28-day financial holding rules, verifying international academic transcripts, and conducting employment background checks creates massive processing backlogs, delays decisions, and exposes organizations to severe compliance risks.
              </p>

              <blockquote className="mt-8 border-l-[4px] border-[#52D5C4] pl-5 text-lg font-black leading-relaxed text-[#353D65]">
                Bte-Tech was built to replace manual guesswork with automated, primary-source verification.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-5 py-16 md:py-20 lg:px-8">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-[#353D65]/10 bg-[#353D65]/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#353D65] shadow-[2px_2px_0px_0px_#353D65]">
            How We Serve Our Partners
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="rounded-[24px] border-[3px] border-[#353D65] bg-white p-8 shadow-[8px_8px_0px_0px_#353D65]">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5DA854] text-2xl text-white shadow-[3px_3px_0px_0px_#353D65]">🏛️</span>
              <h2 className="text-2xl font-black text-[#353D65]">For Universities & Higher Education</h2>
            </div>
            <p className="text-sm font-medium leading-7 text-[#353D65]/75">
              We provide an intelligent compliance layer that safeguards institutional sponsor licenses and accelerates CAS issuance. Our automated Red-Amber-Green (RAG) framework conducts primary-source transcript checks, financial 28-day rule audits, and risk triage—allowing admissions teams to fast-track genuine applicants while blocking high-refusal risks early.
            </p>
          </article>

          <article className="rounded-[24px] border-[3px] border-[#353D65] bg-white p-8 shadow-[8px_8px_0px_0px_#353D65]">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#52D5C4] text-2xl text-white shadow-[3px_3px_0px_0px_#353D65]">🏢</span>
              <h2 className="text-2xl font-black text-[#353D65]">For Companies & Enterprise Employers</h2>
            </div>
            <p className="text-sm font-medium leading-7 text-[#353D65]/75">
              We eliminate background check friction in global hiring. By verifying academic qualifications, financial compliance records, and applicant credentials directly at the institutional source, we provide corporate recruiters with a pre-vetted, audit-ready international talent pipeline—drastically reducing time-to-hire and onboarding risk.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t-2 border-[#353D65]/10 bg-white py-16">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-[24px] border-[3px] border-[#353D65] bg-[#EFEFEF] p-8 md:p-12 shadow-[8px_8px_0px_0px_#353D65]">
            <div className="mb-6 text-center">
              <span className="inline-block rounded-full border border-[#353D65]/10 bg-[#353D65]/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#353D65] shadow-[2px_2px_0px_0px_#353D65]">
                Our Vision
              </span>
            </div>

            <blockquote className="text-center text-lg font-black leading-relaxed text-[#353D65] md:text-2xl">
              We believe that compliance should be invisible, verification should be instant, and international talent mobility should be frictionless. By bridging the gap between university admissions and corporate hiring, BTE-Tech is creating the world’s most trusted pipeline for global talent.
            </blockquote>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
