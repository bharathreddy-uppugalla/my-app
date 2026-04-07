import Header from "../../components/Students/Header";
import Landjobs from "../../components/Students/Landjobs";
import TheChallenge from "../../components/Students/Thechallenge";
import OurSupport from "../../components/Students/Oursupport";
import Herosection from "../../components/Students/Herosection";
import HowItWorks from "../../components/Students/Howitworks";
import WhatYoullGain from "../../components/Students/Whatyoullgain";
import ContactSection from "../../components/Students/Contactsection";
import SuccessStories from "../../components/Students/Successstories";
import Footer from "../../components/Students/Footer";


export default function StudentHome() {
  return (
    <div>
   <Header/>
   <Herosection/>
   <Landjobs/>
   <TheChallenge/>
   <OurSupport/>
   <WhatYoullGain/>
   <HowItWorks/>
   <SuccessStories/>
   <ContactSection/>
   <Footer/>

   

</div>
   
   
  );
}