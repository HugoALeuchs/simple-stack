import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import SpecificationSection from "./Components/SpecificationSection/SpecificationSection";
import UsesSection from "./Components/UsesSection/UsesSection";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const main = useRef();
  const smoother = useRef();

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
    },
    {
      scope: main,
    }
  );

  return (
    <div className="App" ref={main}>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <SpecificationSection padding="10rem 0 0" />
          <UsesSection />
          <SpecificationSection padding="25rem 0 0" />
        </div>
      </div>
    </div>
  );
}

export default App;
