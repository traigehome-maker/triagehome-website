
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Parallaxmain from "@/components/sections/parallax/Parallaxmain";

import WaitList from "@/components/sections/WaitList";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import JoinTriageHome from "@/components/sections/JoinTriageHome";

import OurSolutions from "@/components/sections/OurSolutions";
import WhatWeOffer from "@/components/sections/WhatWeOffer";

const page = () => {
  return (
    <main>
      <Hero />
     
      <WhyChooseUs/>
      <Parallaxmain/>
      <HowItWorks />
      <JoinTriageHome/>
      <WhatWeOffer/>
      <OurSolutions/>
     
      <WaitList />
      <FAQ />
    </main>
  );
};

export default page;
