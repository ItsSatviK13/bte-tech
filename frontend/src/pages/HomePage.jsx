import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/sections/HeroSection'
import WhyChooseSection from '../components/sections/WhyChooseSection'
import ProcessSection from '../components/sections/ProcessSection'
import ComplianceSection from '../components/sections/ComplianceSection'
import PartnerSection from '../components/sections/PartnerSection'

export default function HomePage() {
  return (
    <div className="bg-[#EFEFEF] text-[#353D65]">
      <Navbar />
      <main>
        <HeroSection />
        <ProcessSection />
        <ComplianceSection />
        <WhyChooseSection />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  )
}
