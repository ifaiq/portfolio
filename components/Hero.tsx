'use client';

import React, { useState, useEffect } from 'react';
import Intro from './Intro';
import { FaCaretDown, FaPhone } from 'react-icons/fa';
import { Link } from 'lucide-react';

const Hero: React.FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight;
      const newScale = 1 + (scrollPosition / maxScroll) * 0.2;
      setScale(newScale > 1.2 ? 1.2 : newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden text-[#f0f0f0]">
      <div
        className="relative flex flex-col items-center text-center transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <p className="mb-4 text-4xl sm:text-5xl md:text-6xl">
          Hey, I&apos;m <span className="underline">Faiq</span>
        </p>
        <Intro />

        {/* 
        <div className="mt-8">
          <a href="tel:+923222339643" className="text-2xl font-bold hover:underline">
            <FaPhone />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
