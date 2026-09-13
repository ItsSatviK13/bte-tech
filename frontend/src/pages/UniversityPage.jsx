import HeroSection from '../components/sections/HeroSection'
import WhyChooseSection from '../components/sections/WhyChooseSection'
import ProcessSection from '../components/sections/ProcessSection'
import ComplianceSection from '../components/sections/ComplianceSection'
import PartnerSection from '../components/sections/PartnerSection'
import Seo from '../components/Seo'

export default function UniversityPage() {
  return (
    <>
      <Seo
        title="University Verification Solutions"
        description="BTE-Tech helps universities automate transcript screening, sponsor-license compliance checks, eligibility reviews, and CAS readiness workflows."
        canonical="https://bte-tech.com/universities"
        keywords="university verification, student screening, sponsor license compliance, admissions compliance, transcript verification"
        image="https://bte-tech.com/logo.png"
      />

      <HeroSection />
      <ProcessSection />
      <ComplianceSection />
      <WhyChooseSection />
      <PartnerSection />
    </>
  )
}