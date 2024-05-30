"use client"
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Tailwind Css </li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Nextjs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Chemical Enginner</li>
        <li>BME,University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Resilient Coders</li>
        <li>full stack web Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="rounded-4xl relative  min-h-[690px] overflow-hidden px-5 py-8 md:px-[40px] lg:md-[690px]lg:block lg:pb-10  lg:pt-8 xl:px-[67px] m-3 mt-10" style={{backgroundColor :"#141414" ,borderRadius:'32px',color:'white'}}>
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-6 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={350} height={300} />
        {/*RIGHT-SIDE */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript,Nextjs, React, Redux, Node.js, Express, MongoDB,
            , HTML, CSS,Tailwindcss and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutSection;