import Header from "../../components/Industry/Header";
import Footer from "../../components/Industry/Footer";
import BusinessAdvisoryHero from "../../components/Industry/BusinessAdvisoryHero";
import BusinessAdvisoryHowItWorks from "../../components/Industry/BusinessAdvisoryHowItWorks";
import BusinessAdvisoryServices from "../../components/Industry/BusinessAdvisoryServices";
import BusinessAdvisoryTestimonials from "../../components/Industry/BusinessAdvisoryTestimonials";
import BusinessAdvisoryCTA from "../../components/Industry/BusinessAdvisoryCTA";

export default function IndustryBusinessAdvisoryPage() {
  return (
    <div>
      <Header />
      <BusinessAdvisoryHero />
      <BusinessAdvisoryHowItWorks />
      <BusinessAdvisoryServices />
      <BusinessAdvisoryTestimonials />
      <BusinessAdvisoryCTA />
      <Footer />
    </div>
  );
}
