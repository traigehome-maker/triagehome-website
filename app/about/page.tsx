

import AboutHero from "@/components/sections/about/AboutHero";
import { AboutUs } from "@/components/sections/about/AboutUs";

import CoreValues from "@/components/sections/about/CoreValues";
import MeetTheTeam from "@/components/sections/about/MeetTheTeam";
import MissionVision from "@/components/sections/about/MissionVision";
import WaitList from "@/components/sections/WaitList";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about TriageHome, our mission to revolutionize healthcare access, and the dedicated team behind our premium medical services.",
};

const page = () => {
  return (
    <main>
      <AboutHero/>
      <AboutUs/>
      
      <MissionVision/>
      <CoreValues/>
      <MeetTheTeam />

      <WaitList/>
      
    </main>
  );
};

export default page;
