import AboutSection from "@/components/AboutSection";
import Herosection from "@/components/Herosection";

import Work from "@/components/Work";
import Contact from "@/components/contact/Contact";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Herosection/>
   <AboutSection/>
   
   <Work/>
   <Contact/>
   
   </>
  );
}
