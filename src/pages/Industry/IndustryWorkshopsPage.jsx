import Header from "../../components/Industry/Header";
import Footer from "../../components/Industry/Footer";
import WorkshopHero from "../../components/Industry/WorkshopHero";
import WorkshopSubjectAreas from "../../components/Industry/WorkshopSubjectAreas";
import WorkshopFeatured from "../../components/Industry/WorkshopFeatured";
import WorkshopWhy from "../../components/Industry/WorkshopWhy";
import WorkshopLocations from "../../components/Industry/WorkshopLocations";
import WorkshopCTA from "../../components/Industry/WorkshopCTA";

export default function IndustryWorkshopsPage() {
  return (
    <div>
      <Header />
      <WorkshopHero />
      <WorkshopSubjectAreas />
      <WorkshopFeatured />
      <WorkshopWhy />
      <WorkshopLocations />
      <WorkshopCTA />
      <Footer />
    </div>
  );
}
