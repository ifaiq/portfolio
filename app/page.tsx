'use client';

import AnimatedGreetings from '@/components/Hello';
import Hero from '@/components/Hero';
import About from '@/components/AboutE';
import PreviousWork from '@/components/PreviousWorkT';
import Goodbye from '@/components/Goodbye';
import { ReactLenis } from '@studio-freight/react-lenis';
import Intro from '@/components/Intro';

const lenisOptions = {
  lerp: 0.05,
  duration: 1.2,
  smoothTouch: false,
  smooth: true,
};

export default function Home() {
  return (
    <div>
      <AnimatedGreetings />
      {/* <Intro /> */}
      <Hero />
      {/* <About />
      <PreviousWork />
      <Goodbye /> */}
    </div>
  );
}
