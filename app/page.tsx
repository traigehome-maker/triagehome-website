import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Pioneer from "@/components/sections/Pioneer";
import Services from "@/components/sections/Services";
import WaitList from "@/components/sections/WaitList";

const page = () => {
  return (
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <Pioneer />
      <WaitList />
      <FAQ />
    </main>
  );
};

export default page;
