"use client"

import { useEffect, useState } from "react";
import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { InterestsSection } from "@/components/interests-section"
import { ValuesSection } from "@/components/values-section"

export default function AboutPage() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero triggerAnimation={animate} />
      <InterestsSection />
      {/* Full-width separator between What I Love and My Values */}
      <div className="relative z-[1000]" style={{ marginTop: "-250px" }}>
        <img
          src="/images/section-seperator.png"
          alt=""
          className="w-full h-auto object-contain block pointer-events-none"
        />
      </div>
      <ValuesSection />
    </main>
  )
}
