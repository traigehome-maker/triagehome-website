
import About from "@/components/sections/About";
import { AboutUs } from "@/components/sections/about/AboutUs";

import CoreValues from "@/components/sections/about/CoreValues";
import MeetTheTeam from "@/components/sections/about/MeetTheTeam";
import MissionVision from "@/components/sections/about/MissionVision";
import WaitList from "@/components/sections/WaitList";


const page = () => {
  return (
    <main>
      <About/>
      <AboutUs/>
      
      <MissionVision/>
      <CoreValues/>
      <MeetTheTeam />

      <WaitList/>
      
    </main>
  );
};

export default page;
