import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { HERO_LINKS } from '@/lib/consts';

const AboutE: React.FC = () => {
  return (
    <div
      id="about"
      className="relative flex min-h-screen w-full flex-col items-center justify-center space-y-8 overflow-hidden px-4 py-8 text-[#f0f0f0] sm:space-y-12 sm:py-12 md:py-16"
    >
      <div className="flex w-full max-w-6xl flex-col space-y-4 md:flex-row md:space-x-3 md:space-y-0">
        <div className="flex w-full flex-col items-start justify-center space-y-4 rounded-xl border border-[#292929] p-4 sm:space-y-6 sm:p-6 md:space-y-8">
          <h1 className="text-3xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">Lead FullStack Engineer</h1>
          <div className="space-y-2 text-sm text-[#8b8b8b] sm:text-base md:text-lg lg:text-xl">
            <p>
              As a Lead Software Engineer with 6 years of industry expertise, I specialize in designing and developing scalable, high-performance backend systems using Node.js (Nest.js, Express.js, Salesforce Commerce Cloud), Python (fastAPI, Django), and modern cloud technologies. I focus on creating intelligent solutions that align with business objectives and deliver exceptional user experiences. With a strong foundation in system design, microservices architecture, and AI integrations, I have successfully led teams in building robust platforms that foster innovation.
            </p>

          </div>
        </div>
        <div className="aspect-video h-full w-full overflow-hidden rounded-xl border border-[#292929] md:aspect-square md:w-fit">
          <Image src="/faiq.jpg" alt="Faiq" width={295} height={295} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="flex space-x-4">
        {HERO_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.src}
            target="_blank"
            className="rounded-xl border border-[#d1d1d1] bg-[#EEECEC] p-3 text-[#494949] transition-all duration-300 hover:scale-110 hover:bg-opacity-80"
          >
            {link.icon}
          </Link>
        ))}
        <a href="/FaiqShariff_CV.pdf" download>
          <button className="flex items-center space-x-2 rounded-xl border border-[#d1d1d1] bg-[#EEECEC] p-2 font-semibold text-[#494949] transition-all duration-300 hover:scale-105 sm:p-3">
            <IoDocumentTextOutline size={20} className="sm:text-2xl" />
            <span className="text-sm sm:text-base">View my resume</span>
          </button>
        </a>
      </div>

    </div>
  );
};

export default AboutE;
