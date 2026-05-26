import Header from "../../components/Industry/Header";
import Herosection from "../../components/Industry/Herosection";
import Footer from "../../components/Industry/Footer";
import WhatWeOffer from "../../components/Industry/WhatWeOffer";
import WhyVisgrow from "../../components/Industry/WhyVisgrow";
import OwnerManagerProgram from "../../components/Industry/OwnerManagerProgram";
import IndustryCTA from "../../components/Industry/IndustryCTA";
import Testimonials from "../../components/Industry/Testimonials";


export default function StudentHome() {
  return (
    <div>
   <Header/>
   <Herosection/>
   <WhatWeOffer/>
   <WhyVisgrow/>
   <OwnerManagerProgram/>
   <Testimonials/>
   <IndustryCTA/>
   <Footer/>

</div>
   
   
  );
}