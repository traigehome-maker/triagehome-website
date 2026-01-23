

import { AboutUs } from "@/components/sections/about/AboutUs";

import CoreValues from "@/components/sections/about/CoreValues";
import MeetTheTeam from "@/components/sections/about/MeetTheTeam";
import MissionVision from "@/components/sections/about/MissionVision";
import WaitList from "@/components/sections/WaitList";
import AboutHero from "@/components/sections/about/AboutHero";


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
