import Header from "../../components/Industry/Header";
import Footer from "../../components/Industry/Footer";
import HireInternsHero from "../../components/Industry/HireInternsHero";
import HireInternsSectors from "../../components/Industry/HireInternsSectors";
import HireInternsProfiles from "../../components/Industry/HireInternsProfiles";
import HireInternsWhy from "../../components/Industry/HireInternsWhy";
import HireInternsProcess from "../../components/Industry/HireInternsProcess";
import HireInternsTestimonials from "../../components/Industry/HireInternsTestimonials";
import HireInternsCTA from "../../components/Industry/HireInternsCTA";

export default function IndustryHireInternsPage() {
  return (
    <div>
      <Header />
      <HireInternsHero />
      <HireInternsSectors />
      <HireInternsProfiles />
      <HireInternsWhy />
      <HireInternsProcess />
      <HireInternsTestimonials />
      <HireInternsCTA />
      <Footer />
    </div>
  );
}
