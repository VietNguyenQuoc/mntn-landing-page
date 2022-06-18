import { useState } from "react";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { MainSection } from "./MainSection";
import NavBar from "./NavBar";

const steps = [
  {
    index: "01",
    name: "Get started",
    headingText: "What level of hiker are you?",
    bodyText: `Determining what level of hiker you are can be an important tool
    when planning future hikes. This hiking level guide will help you
    plan hikes according to different hike ratings set by various
    websites like All Trails and Modern Hiker. What type of hiker are
    you – novice, moderate, advanced moderate, expert, or expert
    backpacker?`,
    imgSrc: "/img/1.png",
    alt: "hiker type",
  },
  {
    index: "02",
    name: "Hiking Essentials",
    headingText: "Picking the right Hiking Gear!",
    bodyText: `The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
    Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.`,
    imgSrc: "/img/2.png",
    alt: "man standing on the edge mountain",
  },
  {
    index: "03",
    name: "Where you go is the key",
    headingText: "Understand Your Map & Timing",
    bodyText: `To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.`,
    imgSrc: "/img/3.png",
    alt: "hand holding the compass",
  },
];

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const onStepEnterViewport = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  return (
    <div className="text-white bg-theme pb-12 overflow-x-hidden">
      <header className="relative bg-hero bg-no-repeat">
        <NavBar />
        <HeroSection
          activeStep={activeStep}
          onStepEnterViewport={onStepEnterViewport}
        />
        <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-theme"></div>
      </header>

      <MainSection steps={steps} onStepEnterViewport={onStepEnterViewport} />

      <FooterSection />
    </div>
  );
}

export default App;
