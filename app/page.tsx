
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TriageHome",
    "url": "https://triagehome.com",
    "logo": "https://triagehome.com/triagelogowhite.png",
    "description": "Revolutionizing Healthcare Access with premium home nursing and concierge medical services.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nigeria"
    },
    "sameAs": [
      "https://facebook.com/triagehome",
      "https://twitter.com/triagehome",
      "https://instagram.com/triagehome"
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
